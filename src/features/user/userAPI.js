export function fetchLoggedInUserOrders(userId) {
    return new Promise(async (resolve) =>{
      console.log('userorderid',userId)
      const response = await fetch('http://localhost:8080/orders/?user='+userId) 
      const data = await response.json()
      console.log('userorderid',data)


      // working here userinfo update hoga

      resolve({data})
    }
    );
  }
 

  export function fetchLoggedInUser(userId) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/users/'+userId) 
      const data = await response.json()

      resolve({data})
    }
    );
  }
  
  export function updateUser(update) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8080/users/'+update.id, {
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      console.log('update user async',data)
      resolve({ data });
    });
  }
  


// export function createUser(userData) {
//   return new Promise(async (resolve) => {
//     const response = await fetch('/auth/signup', {
//       method: 'POST',
//       body: JSON.stringify(userData),
//       headers: { 'content-type': 'application/json' },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });
// }

// export function loginUser(loginInfo) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch('/auth/login', {
//         method: 'POST',
//         body: JSON.stringify(loginInfo),
//         headers: { 'content-type': 'application/json' },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         resolve({ data });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       reject( error );
//     }

//   });
// }

// export function checkAuth() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch('/auth/check');
//       if (response.ok) {
//         const data = await response.json();
//         resolve({ data });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       reject( error );
//     }

//   });
// }


// export function signOut(userId) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch('/auth/logout');
//       if (response.ok) {
//         resolve({ data:'success' });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       console.log(error)
//       reject( error );
//     }
//   });
// }


// export function resetPasswordRequest(email) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch('/auth/reset-password-request', {
//         method: 'POST',
//         body: JSON.stringify({email}),
//         headers: { 'content-type': 'application/json' },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         resolve({ data });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       reject( error );
//     }

//   });
// }

// export function resetPassword(data) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch('/auth/reset-password', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: { 'content-type': 'application/json' },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         resolve({ data });
//       } else {
//         const error = await response.text();
//         reject(error);
//       }
//     } catch (error) {
//       reject( error );
//     }

//   });
// }
  
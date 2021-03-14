import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); // firebase auth provider initialize
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      return signedInUser;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Fb login auth method
export const FbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then(function (result) {
      const { displayName, photoURL, email } = result.user;
      const user = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      user.success = true;
      return user;
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// export const handleSignOut = () =>{
//    return firebase.auth().signOut()
//     .then( res => {
//         const signOutUser ={
//             isSignedIn : false,
//             name: '',
//             photo : '',
//             email : '',
//             error : '',
//             success : false,
//         }
//        return signOutUser;
//     })
//     .catch(err =>{
//         console.log(err)
//     })
// }

// export const createUserWithEmailAndPassword = (name, email, password) => {
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then( res => {
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       updateUserName(name);
//       return newUserInfo;
//     })
//     .catch( error => {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });
// }
// export const signInWithEmailAndPassword = (email, password) => {
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(res => {
//       const newUserInfo = res.user;
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       return newUserInfo;
//     })
//     .catch(function(error) {
//       const newUserInfo = {};
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       return newUserInfo;
//     });
//  }

// export const updateUserName = name =>{
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name
//     }).then(function() {
//       console.log('user name updated successfully')
//     }).catch(function(error) {
//       console.log(error)
//     });
// }

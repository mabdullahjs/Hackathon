import { auth } from "./config.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
let click = document.getElementById("click");
let email = document.getElementById("email");
let password = document.getElementById("password");
let forgot = document.getElementById("forgot");
click.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user);
      window.location = "./page.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      swal("please Register First");
    });
})
forgot.addEventListener("click", () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      // Password reset email sent!
      // ..
      swal("Dont Worry!!", "Verification Email send", "success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("enter email first");
      // ..
    });
})
onAuthStateChanged(auth, (user) => {
if (user) {
const uid = user.uid;
// ...
} else {
}
});
import{sigInWhitEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {auth} from "./firebase.js" ;
import {showMessage} from "./showMessage.js" 


const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signInForm["signin-email"].value;
    const password = signInForm ["sigin-password"].value;
    try {const userCredentials = await sigInWhitEmailAndPassword (auth,email,password)
    console.log(userCredentials)}
    catch (error){ 
    if(error.code==="auth/wrong-password"){
        showMessage("Incorrect Password","error")
    }else{
        showMessage("otro tipo de error","error")
    }

    }

});
import {onAuthStateChanged} from "" ;
import  {auth} from './firebase.js' ;
import { saveTask } from './firebase.js';
import './siginForm.js'
import './signupForm.js' ;
import './logout.js' ;
import { loginCheck } from './loginCheck.js';

window.addEventListener("DOMContentLoaded",()=>{
    const taskForm = document.querySelector('#task-form')

    taskForm.addEventListener('submit', (e) => { 
        e.preventDefault();
        console.log('enviado')
        const title = taskForm["task-title"];
        const description = taskForm["task-description"];
        saveTask(title.value, description.value);
    });
    
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loginCheck(user)
            try {
                console.log("sesión iniciada");
            } catch (error) {
                console.log(error);
            }
        } else {
            loginCheck(user)
        }
    })
    
})



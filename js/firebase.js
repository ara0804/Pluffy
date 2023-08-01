// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
//import {} "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"
import { getFirestore, 
addDoc,
collection,
onSnapshot,
deleteDoc,
updateDoc,
getDocs,
getDoc,
doc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw5zgZCja3bvkYXrIDGpLQ0PKynOnPHtA",
  authDomain: "unidad-4-767a1.firebaseapp.com",
  projectId: "unidad-4-767a1",
  storageBucket: "unidad-4-767a1.appspot.com",
  messagingSenderId: "798446993266",
  appId: "1:798446993266:web:f4f2a0a04b26c05b0767eb",
  measurementId: "G-M1Y5SKVH60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth (app);


//conexion a la base de datos 
export const db = getFirestore();

export const saveTask = (title, description) =>
  //console.log (title, description);
  addDoc(collection(db, "post" ), {title, description})


  //listar datos 
  //export const getTasks = () => console.log('tasks-list');
  export const getTasks = () => getDocs(collection(db, "posts"))

// generando la nueva funcion
export const onGetTasks =  (callback) => onSnapshot(collection(db, "posts"), callback);

// export {
 //   onSnapshot,
 //   collection
  //}

  export const deleteTask = (id) => deleteDoc(doc(db,"posts", id));

  // Se crea una funcion que traiga o que obtenga una tarea individual
  export const getTask = (id) => getDoc(doc(db, "posts", id))

  // Crear una funcion que actualice una tarea

  export const updateTask = (id, NewFieldsTask) => updateDoc(doc(db, "posts", id), NewFieldsTask);


  
  




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection,
    addDoc, serverTimestamp
} from 'firebase/firestore'

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLrGWp71J01dzwtYwX6lmpPybOmsc9kiM",
  authDomain: "orbitar-studio.firebaseapp.com",
  projectId: "orbitar-studio",
  storageBucket: "orbitar-studio.appspot.com",
  messagingSenderId: "509590499811",
  appId: "1:509590499811:web:abc69603dd9075b872f0d6",
  measurementId: "G-ZHSJGKBGFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// collection ref
const colref_creativos = collection(db, "creativos")
const colref_clientes = collection(db, "clientes")

//! Create
// adding creative forms
try {
    const addCreativeForm = document.querySelector('.creative-form');
addCreativeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(addCreativeForm.nombre.value);
    // console.log(addCreativeForm.habilidades.value);
    // console.log(addCreativeForm.pais.value);
    // console.log(addCreativeForm.mensaje.value);
    addDoc(colref_creativos, {  //sending books as parameter
        nombre: addCreativeForm.nombre.value,
        habilidades: addCreativeForm.habilidades.value,
        pais: addCreativeForm.pais.value,
        mensaje: addCreativeForm.mensaje.value,
        fecha: serverTimestamp()
    })
    .then(() => {
        addCreativeForm.reset();
    });
});
} catch (error) {
    
}


try {
    const addClientForm = document.querySelector('.client-form');
    addClientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(addClientForm.nombre.value);
        // console.log(addClientForm.empresa.value);
        // console.log(addClientForm.necesidad.value);
        // console.log(addClientForm.pais.value);
        // console.log(addClientForm.mensaje.value);
        addDoc(colref_clientes, {  //sending books as parameter
            nombre: addClientForm.nombre.value,
            empresa: addClientForm.empresa.value,
            necesidad: addClientForm.necesidad.value,
            pais: addClientForm.pais.value,
            mensaje: addClientForm.mensaje.value,
            fecha: serverTimestamp()
        })
        .then(() => {
            addClientForm.reset();
        });
    });
} catch (error) {
    
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getFirestore, collection,
    addDoc, serverTimestamp
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWVRGdl1oDHPFF2P_lP_FZG6o1RFRBnrk",
  authDomain: "orbitarstudio-a6bbb.firebaseapp.com",
  projectId: "orbitarstudio-a6bbb",
  storageBucket: "orbitarstudio-a6bbb.appspot.com",
  messagingSenderId: "836652019701",
  appId: "1:836652019701:web:0dbbf5618578ea28d2babc",
  measurementId: "G-W1HGFQSX49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
        correo: addCreativeForm.correo.value,
        phone: addCreativeForm.phone.value,
        pais: addCreativeForm.pais.value,
        habilidades: addCreativeForm.habilidades.value,
        link: addCreativeForm.link.value,
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
            correo: addClientForm.correo.value,
            phone: addClientForm.phone.value,
            pais: addClientForm.pais.value,
            asunto: addClientForm.asunto.value,
            mensaje: addClientForm.mensaje.value,
            fecha: serverTimestamp()
        })
        .then(() => {
            addClientForm.reset();
        });
    });
} catch (error) {
    
}

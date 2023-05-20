
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBivaYn_BZI_8rE0J_naDd1rdsn0fKjJWk",
    authDomain: "login-form-84b3d.firebaseapp.com",
    projectId: "login-form-84b3d",
    storageBucket: "login-form-84b3d.appspot.com",
    messagingSenderId: "306318474541",
    appId: "1:306318474541:web:b48bcdaec69c869f1267a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phoneNumber')
const submitBtn = document.querySelector('#submitBtn')
// console.log(username)
// console.log(email)
// console.log(phoneNumber)
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    set(ref(database, 'user/' + username.value), {
        username: username.value,
        email: email.value,
        PhoneNumber: phoneNumber.value,
    })
    alert("login Successful")
    username.value = ""
    email.value = ""
    phoneNumber.value = ""
})





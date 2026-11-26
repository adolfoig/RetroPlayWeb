import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const formularioRegistro = document.querySelector(".auth-form");

if (formularioRegistro) {
    formularioRegistro.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Crear usuario en Firebase Auth
            const credenciales = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado con éxito:", credenciales.user);
            
            // Redirigir a la página principal del juego
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error en el registro:", error.message);
            alert("Hubo un error al registrarse: " + error.message);
        }
    });
}
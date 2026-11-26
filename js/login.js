import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const formularioLogin = document.querySelector(".formulario-auth");
const botonGoogle = document.querySelector(".boton-google");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const credenciales = await signInWithEmailAndPassword(auth, email, password);
            console.log("Inicio de sesión exitoso:", credenciales.user);
            
            // Redirigir a la vista principal
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
            alert("Credenciales incorrectas o usuario no encontrado.");
        }
    });
}

if (botonGoogle) {
    botonGoogle.addEventListener("click", async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Usuario autenticado con Google:", result.user);
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error con la autenticación de Google:", error.message);
        }
    });
}

// Función para mostrar el nombre del usuario
function showUserInfo() {
    const userData = JSON.parse(localStorage.getItem('loggedInUser')); // Recuperar datos del usuario

    // Verificar si hay datos del usuario
    if (userData && userData.name) {
        const userInfoDiv = document.getElementById('user-info');
        const welcomeMessage = document.getElementById('welcome-message');
        const loginItem = document.getElementById('login-item');

        welcomeMessage.textContent = `Bienvenido, ${userData.name}`; // Mostrar el nombre real del usuario
        userInfoDiv.style.display = 'flex'; // Muestra la información del usuario
        loginItem.style.display = 'none'; // Oculta el enlace de inicio de sesión
    }
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', showUserInfo);

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('loggedInUser'); // Eliminar datos del usuario de localStorage
    alert("Has cerrado sesión.");
    
    // Redirigir al usuario a la página de inicio o login
    window.location.href = "index.html"; // Cambia esto por la URL adecuada
}

// Evento para manejar el clic en el botón de cerrar sesión
document.getElementById('logout-button').addEventListener('click', logout);
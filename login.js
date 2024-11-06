const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(user => user.email === email && user.password === password)
    if (!validUser) {
        return alert("Usuario y/o contraseña incorrectos")
    }
    alert(`Bienvenido, ${validUser.name}`);
    window.location.href = 'index.html'
})
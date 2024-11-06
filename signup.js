const signupForm = document.querySelector("#signup-form")
signupForm.addEventListener('submit',  (event) => {
    event.preventDefault()
    const name = document.querySelector('#name').value
    const surname = document.querySelector('#surname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const gender = document.querySelector('#gender')

    const users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = users.find(user => user.email === email)

    if (isUserRegistered) {
        return alert('El usuario ya se encuentra registrado.')
    }

    users.push({name: name, surname: surname, email: email, password: password, gender: gender})
    localStorage.setItem('users', JSON.stringify(users))
    alert("Registro exitoso")

    // Redirección a la pantalla de login

    window.location.href = 'login.html'

    })
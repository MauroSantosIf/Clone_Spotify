document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    evento(); // Chama a função de validação
});

function evento() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim(); 
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim(); 

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'O campo de e-mail não pode estar vazio.';
        emailError.style.display = 'block';
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Insira um endereço de e-mail válido.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\S).{6,}$/;
    if (password === '') {
        passwordError.textContent = 'O campo de senha não pode estar vazio.';
        passwordError.style.display = 'block';
        valid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Senha não atende aos requisitos';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (valid) {
        window.location.href = 'inicio.html';
    }
}
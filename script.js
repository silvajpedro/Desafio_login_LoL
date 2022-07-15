let firstInput = document.querySelector('input')
let secondInput = document.getElementsByTagName('input')[1]
let botao = document.querySelector('[alt~=seta]')
let passwordBar = document.querySelector('.passwordBar')
let passwordText = document.querySelector('p')

firstInput.addEventListener('input', glow)
secondInput.addEventListener('input', glow)

function glow() {
    if (firstInput.value.length >= 3 && secondInput.value.length <= 4 && secondInput.value.length >= 1) {
        botao.classList.add('grown')
        passwordText.innerText = "Fraca"
        passwordBar.classList.remove('passwordMedium')
        passwordBar.classList.remove('passwordStrong')
        passwordBar.classList.add('passwordWeak')
    } else if (firstInput.value.length >= 3 && secondInput.value.length <= 7 && secondInput.value.length >= 5) {
        botao.classList.add('grown')
        passwordBar.classList.remove('passwordWeak')
        passwordBar.classList.remove('passwordStrong')
        passwordBar.classList.add('passwordMedium')
        passwordText.innerText = "Média"
    } else if ((firstInput.value.length >= 3 && secondInput.value.length <= 10 && secondInput.value.length >= 8)) {
        botao.classList.add('grown')
        passwordBar.classList.remove('passwordMedium')
        passwordBar.classList.remove('passwordMedium')
        passwordBar.classList.add('passwordStrong')
        passwordText.innerText = "Forte"
    } else if (firstInput.value.length >= 3 && secondInput.value.length >= 11 ) {
        passwordBar.classList.remove('passwordMedium')
        passwordBar.classList.add('passwordStrong')
        passwordText.innerText = "Forte"
    } else {
        botao.classList.remove('grown')
        passwordBar.classList.remove('passwordWeak')
        passwordBar.classList.remove('passwordMedium')
        passwordBar.classList.remove('passwordStrong')
        passwordText.innerText = "Senha"
    }
}
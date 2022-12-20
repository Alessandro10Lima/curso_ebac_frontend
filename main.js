const form = document.getElementById('form-number');
const primeiroNumero = document.getElementById('numero-um');
let formValido = false;

function validaNumero(numero) {
    const segundoNumero = numero;
    return segundoNumero.value > primeiroNumero.value;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const segundoNumero = document.getElementById("numero-dois");
    const mensagemSucesso = `Parabéns! O segundo número: <b>${segundoNumero.value}</b> é maior que: <b>${primeiroNumero.value}</b>`;
    formValido = validaNumero(segundoNumero.value)

    if (formValido) {
        const containerMensagemSucesso = document.querySelector(".sucess-msn");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        
        primeiroNumero.value = '';
        segundoNumero.value = '';
    } else {
        segundoNumero.style.border = '1px solid red'
        document.querySelector('.error-msn').style.display = 'block';
    }
})
segundoNumero.addEventListener('keyup', function(e){
console.log(e.target.value);
formValido = validaNumero(e.target.value);

if (!formValido) {
    segundoNumero.classList.add('error');
    // segundoNumero.style.border = '1px solid red';
    document.querySelector('.error-msn').style.display = 'block';
} else {
    segundoNumero.classList.remove('error');
    document.querySelector('.error-msn').style.display = 'none';
}
})
const form = document.getElementById('formNumero');
let formEValido = false;

function validaNumero (campoA, campoB){
    const numeroMaior = campoB > campoA;
    return numeroMaior;
}

form.addEventListener( 'submit', function(e){
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemSucesso = `Os números <b>${campoA}</b> e <b>${campoB}</b> foram aprovados!`;
    const mensagemErro = `O primeiro valor:<b>${campoA}</b> deve ser menor que o segundo valor:<b>${campoB}</b>!`


    formEValido = validaNumero(campoA, campoB)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementById('campoA').value = '';
        document.getElementById('campoB').value = '';

        setTimeout(() => {
        containerMensagemSucesso.style.display = 'none';
        }, 3000);
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        setTimeout(() => {
            containerMensagemErro.style.display = 'none';
        }, 3000);
    }
});

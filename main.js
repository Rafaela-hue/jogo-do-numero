
const palpites = document.querySelector('palpites');
const ultimoResultado = document.querySelector('ultimoResultado');
const baixoOuAlto = document.querySelector('baixoOuAlto');
const envioPalpite = document.querySelector('envioPalpite');
const campoPalpite = document.querySelector('campoPalpite');


function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpite === 1) {
      palpites.textContent = "Palpites anteriores: ";
    }

palpites.textContent += palpiteUsuario + " ";

if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "Parabéns! Você Acertou!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    finalizarJogo();
} else {
    ultimoResultado.textContent = "Errado";
    ultimoResultado.style.backgroundColor = "red";
    if (palpiteUsuario < numeroAleatiorio) {
        baixoOuAlto.textContent = "O último palpite foi muito baixo";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "O último palpite foi muito baixo;
    }
}

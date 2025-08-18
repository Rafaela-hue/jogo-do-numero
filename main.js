let numeroAleatorio = Math.floor(Math.random() *100) +1;
const palpites = document.querySelector('palpites');
const ultimoResultado = document.querySelector('ultimoResultado');
const baixoOuAlto = document.querySelector('baixoOuAlto');
const envioPalpite = document.querySelector('envioPalpite');
const campoPalpite = document.querySelector('campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

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
}  else if (contagemPalpites === 10) {
  ultimoResultado.textcontent = "FIM DE JOGO!!";
  baixoOuAlto.textcontent = "";
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

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
   }

    envioPalpite.addEventListener('click', verificarPalpite);

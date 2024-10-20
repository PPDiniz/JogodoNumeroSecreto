let numerosSecretos = [];
let tentativas = 0;
let numMax = 3;
let numeroSecreto = gerarNumRand();
console.log(numeroSecreto);
mensagemInicial();

function alterarHTML (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector("input").value;
    tentativas++;
    if (chute == numeroSecreto) {
        let textTentativa = tentativas > 1 ? "Você acertou em " + tentativas + " tentativas" : "Você acertou em uma tentativa";
        alterarHTML("p", textTentativa);
        alterarHTML("H1", "ACERTOU !!!");
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chute").setAttribute("disabled", true);
    } else {
        if (chute < numeroSecreto) {
            alterarHTML("p", "O número secreto é maior que " + chute);
        } else {
            alterarHTML("p", "O número secreto é menor que " + chute);
        }
        limparCampo();
    }
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumRand();
    tentativas = 0;
    console.log(numeroSecreto);
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chute").removeAttribute("disabled");
}

function gerarNumRand() {
    let numEscolhido = parseInt(Math.random() * numMax + 1 ); 
    let quantidadeDeElementosNaLista = numerosSecretos.length;

    if (quantidadeDeElementosNaLista == numMax) {
        numerosSecretos = [];
    }

    if (numerosSecretos.includes(numEscolhido)) {
        return gerarNumRand();
    }else {
        numerosSecretos.push(numEscolhido);
        console.log(numerosSecretos);
        return numEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function mensagemInicial() {
    alterarHTML("p", "Escolha um número de 1 a " + numMax);
    alterarHTML("H1", "Secret Number Game");
}
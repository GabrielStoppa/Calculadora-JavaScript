// Executa a função de Soma
function somar() {
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    let soma = n1 + n2;
    exibirResultado('#resultado', soma);
}

// Executa a função de Subtração
function subtrair() {
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    let subtracao = n1 - n2;
    exibirResultado('#resultado', subtracao);
}

// Executa a função de Divisão
function dividir() {
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    let divisao = n1 / n2;
    exibirResultado('#resultado', divisao);
}

// Executa a função de Multiplicação
function multiplicar() {
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    let multiplicacao = n1 * n2;
    exibirResultado('#resultado', multiplicacao);
}

// Executa a função de Raiz Quadrada
function raizQuadrada() {
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    let raizQua1 = Math.sqrt(n1);
    let raizQua2 = Math.sqrt(n2);
    exibirResultado('#resultado', 'N1: ' + raizQua1 + ' N2: ' + raizQua2);
}

// Executa a função de Exponenciação
function exponenciacao(){
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    let expoente = n1 ** n2;
    exibirResultado('#resultado', expoente);
}

// Executa a função de Porcentagem
function porcentagem() {
    let n1 = parseFloat(document.querySelector('#i1').value);
    let n2 = parseFloat(document.querySelector('#i2').value);
    if (isNaN(n1) || isNaN(n2)) {
        exibirResultado('#resultado', 'Por favor, insira valores válidos');
        return;
    }
    let resultado = (n1 / 100) * n2;
    exibirResultado('#resultado', resultado.toFixed(2)); 
}

// Exibe os valores no HTML
function exibirResultado(tag, value) {
    let campo = document.querySelector(tag);
    campo.innerText = value;
}

// Limpa a Calculadora
function limparCampo() {
    n1 = document.querySelector('#resultado');  
    n2 = document.querySelector('#resultado');
    n1.value = '';
    n2.value = '';
    limpar = '';
    exibirResultado('#resultado', limpar);
}

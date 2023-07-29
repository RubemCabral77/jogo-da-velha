const jogadasPossiveis = ['X', 'O'];
let jogadaAtual = 'X';
const colunas = Array.from(document.getElementsByClassName('coluna'));

const mudarJogada = (jogadaAtual) => {
    jogadaAtual = jogadaAtual === 'X' ? 'O' : 'X';
    return jogadaAtual;
}

// const jogo = () => {
colunas.forEach(coluna => {
    coluna.addEventListener('click', function () {
        
        if (!coluna.classList.contains('jogado')) {
            coluna.classList.add('jogado', jogadaAtual);
            coluna.innerText = jogadaAtual;        
            jogadaAtual = mudarJogada(jogadaAtual);
        }
    })
});
// }

// document.getElementById('tabuleiro');

const verificarSeFezPonto = (jogada) => {
    const colunas = Array.from(document.getElementsByClassName('jogado'));
    const primeiraLinha = [1, 2, 3];


}
/**
 * @param {Array} listaDeNumeros - rer
 */
const teste = (listaDeNumeros) => {
    const lista = [];
    listaDeNumeros.forEach(numero => {
        const coluna = document.getElementById(String(numero));
        const texto = coluna.innerText;
        if (texto != '') {
            lista.push(texto);
        }
    })
    const verificacao = lista[0] === lista[1] && lista[1] === lista[2];
    return verificacao;
}

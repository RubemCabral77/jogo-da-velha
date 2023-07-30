let playerTurn = 'X';
let winner = null;

const collumns = Array.from(document.getElementsByClassName('collumn'));
/**
 * Troca de turno
 * @param {String} playerTurn 
 * @returns {String}
 */
const switchTurn = (playerTurn) => {
    playerTurn = playerTurn === 'X' ? 'O' : 'X';
    return playerTurn;
}
/**
 * Verifica se algum dos jogadores venceu
 * @returns {Boolean}
 */
const checkWin = () => {
    const columnsThatWin = '123,456,789,159,357,147,258,369'.split(',');
    const result = validateColumns(columnsThatWin);
    return (result);
}
/**
 * Verifica se todos os elementos de um array são iguais
 * @param {Array} array
 * @returns {Boolean}
 */
const checkElementsEquals = (array) => {
    if (array.length === 3) {
        const firstElement = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] !== firstElement) {
                return false;
            }
        }
        return true;
    }
    return false;
}
/**
 * Reseta todas as colunas que estavam preenchidas
 */
const resetGame = () => {
    winner = null;
    const columnsFilled = Array.from(document.getElementsByClassName('filled'));
    columnsFilled.forEach(columnFilled => {
        columnFilled.classList.remove('filled');
        columnFilled.innerText = '';
    });

}
/**
 * Valida uma lista de jogadas para saber se há uma combinação que venceu
 * @param {Array<String>} columnsThatWin 
 * @returns {Boolean}
 */
const validateColumns = (columnsThatWin) => {
    for (let index = 0; index < columnsThatWin.length; index++) {
        const positionColumns = columnsThatWin[index];
        const checker = [];
        const listPositionColumns = positionColumns.split('');

        listPositionColumns.forEach(positionColumn => {
            const collumn = document.getElementById(`c${positionColumn}`);
            if (collumn != null) {
                if (collumn.classList.contains('filled')) {
                    checker.push(collumn.innerText);
                }
            }
        });
        const itWon = checkElementsEquals(checker);
        if (itWon) {
            winner = checker[0];
            return itWon;
        }
    }
    return false;
}
/**
 * Preenche as colunas
 * @param {Element} collumn
 */
const fillColumn = (collumn) => {
    if (collumn.classList.contains('filled')) {
        return;
    }

    collumn.classList.add('filled', playerTurn);
    collumn.innerText = playerTurn;

    playerTurn = switchTurn(playerTurn);

    analyzeTurn();

}
/**
 * Analisa cada turno
 */
const analyzeTurn = () => {
    const haveWinner = checkWin();
    const quantityColumnsFilled = Array.from(document.getElementsByClassName('filled')).length

    if (haveWinner) {
        setTimeout(() => { alert(`The player (${winner}) won`) }, 0);
        setTimeout(resetGame, 700);
    } else if (quantityColumnsFilled === 9) {
        setTimeout(() => { alert('GameOver'); }, 700);
        setTimeout(resetGame, 700);
    }
}
/**
 * Torna o tabuleiro responsível
 */
const resizeBoard = () => {
    const widthWindow = window.innerWidth;
    const heithWindow = window.innerHeight;

    const sizeUnit = widthWindow < heithWindow ? 'vw' : 'vh';

    collumns.forEach(collumn => {
        collumn.style.width = `25${sizeUnit}`;
        collumn.style.height = `25${sizeUnit}`;
        collumn.style.fontSize = `15${sizeUnit}`;
    });

}

// Chama a função quando a página for carregada
window.addEventListener('load', resizeBoard);

// Chama a função novamente quando a janela for redimensionada
window.addEventListener('resize', resizeBoard);

// Adiciona o evento de click em cada coluna
collumns.forEach(collumn => {
    collumn.addEventListener('click', () => { fillColumn(collumn) });
});

const choiceUser = prompt("scegli pari o dispari");

const userNumber = parseInt(prompt("Dimmi un numero"));
console.log(userNumber);


const computerNumber = generateRndNumber(1, 6);
console.log(computerNumber);

// Definire chi ha vinto
const resultMessage = defineWinner(userNumber, computerNumber);

console.log(resultMessage);

// FUNCTIONS
/**
 * Description: La funzione che genera un numero random in un rage di numeri min e max (tutti i due inclusi)
 * @param {number} min -> minimo numero che si possa generare
 * @param {number} max -> massimo numero che si possa generare
 * @returns {number} numero random generato
 */
function generateRndNumber(min, max) {
    const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return generatedNumber;
}


/**
 * Description: la funzione che compara i due numeri di giocatori e forma il messaggio del risultato
 * @param {number} userNum il numero dell'utente
 * @param {number} compNum il numero casuale del computer
 * @returns {string} messaggio che definisce il vincitore 
 */
function defineWinner(userNum, compNum) {
    let message = "";
    if ((userNum + compNum) % 2 === 0 && choiceUser === "pari") {
        message = "Congratulazione! Hai vinto";
    } else if ((userNum + compNum) % 2 !== 0 && choiceUser === "dispari") {
        message = "Congratulazione! Hai vinto";
    } else {
        message = "Mi dispiace, ha vinto il computer"
    }

    console.log(userNum, compNum, message);

    return message;
}
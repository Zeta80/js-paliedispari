// program to check if the string is palindrome or not

//take input
const string = prompt('Metti una parola: ');

checkPalindrome(string);





/**
 * Description trasformo la parola in array e poi inverto l'ordine per poi effettuare un confronto
 * 
 */
function checkPalindrome(string) {

    // converto la stringa in un array
    const arrayValues = string.split('');

    // inverto l'ordine dell array
    const reverseArrayValues = arrayValues.reverse();

    // riconverto l'array in stringa
    const reverseString = reverseArrayValues.join('');

    if (string == reverseString) {
        console.log('si, è palindroma');
    }
    else {
        console.log('nope non è palindroma');
    }
}


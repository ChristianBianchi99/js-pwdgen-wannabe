// PROMPT INSERIMENTO NOME
let nome = prompt ("Qual è il tuo nome?");

// PROMPT INSERIMENTO COGNOME
let cognome = prompt ("Qual è il tuo cognome?");

// PROMPT INSERIMENTO COLORE PREFERITO
let colore = prompt ("Qual è il tuo colore preferito?");

// CALCOLO PASSWORD DA GENERARE
let password = nome + cognome + colore + 21;
console.log(password)

// VISUALIZZAZIONE PASSWORD GENERATA
document.getElementById("password").innerHTML += password
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in javascript sono i seguenti:
1)Stringa, ovvero una serie di caratteri racchiusi da virgolette o apici
2)Un numero 
3)Un booleano, un valore che restituisce 'true' or 'false' ad un'espressione
4)null, una intenzionale assenza di valore 
5)udefined, una variabile a cui il valore non è stato assegnato */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Nicolò'
console.log(myName)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1=12
let number2=20
let sumOfTwoNumbers= number1+number2
console.log('sumOfTwoNumbers', sumOfTwoNumbers)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log('Ho impostato la variabile x pari a 12 come da richiesta',x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName= 'Di Giacinto'
console.log(myName)
const NotModifiableVariableTest= 100
console.log('Ho provato come da richiesta a modificare la variabile costante, ma chiaramente non è stato possibile farlo come da previsione', NotModifiableVariableTest)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numberTest = 4
let subctractionOfTwoNumbers= numberTest - x
console.log('subctractionOfTwoNumbers', subctractionOfTwoNumbers)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1='john'
let name2='John'
console.log(name1 === name2)
let newName2= name2.toLowerCase()
console.log(name1===newName2)
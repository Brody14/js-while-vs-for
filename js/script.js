//console.log('Giancarlo Ferrero')

const oddNumbers = []
let number
//console.log(oddNumbers)

//Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. 
// do {
//     number = parseInt(prompt('Inserisci un numero'));
//     //console.log(number);

//     let resto = number % 2;
    
//     if(resto === 1) {
//         //Se il numero è dispari,lo salviamo in una lista. 
//         oddNumbers.push(number);
//         //console.log(oddNumbers)
        
//     }
//     //Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).

//     //Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari.

// }while (oddNumbers.length < 10);


// //Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.

// for(let i = 0; i < oddNumbers.length; i++) {
//     console.log(oddNumbers[i]);
// }

while(oddNumbers.length < 10) {
    number = parseInt(prompt('Inserisci un numero'));
    let resto = number % 2;
    
    if(resto === 1) {
        //Se il numero è dispari,lo salviamo in una lista. 
        oddNumbers.push(number);
        //console.log(oddNumbers)
        
    }
}

for(let i = 0; i < oddNumbers.length; i++) {
    console.log(oddNumbers[i]);
}
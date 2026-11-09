'use strict';

let bill = Number(prompt('Please insert the bill amount '))
let partySize = Number(prompt("Please insert the party size "))
let method = prompt("Please insert Method: type telebirr or cbe ")

let tip = bill > 300 ? bill * 1/10 : bill * 1/20;

let per_person = bill + tip;
let total = per_person * partySize;


switch (method) {
    case "telebirr":
        total += total * 0.05
        break
    case "cbe":
        total += total * 0.04
        console.log(`Total: ${total}`)
        break
    default:
        total += total * 0.01
}


console.log(`The bill per person is ${per_person}, The total amount is ${total}`)
    

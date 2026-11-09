'use strict'

function addVat(amount){
    console.log(amount * 1.15);
}

for(var i=1; i<=3; i++){
    setTimeout(() => console.log(i), 0)
}


//addVat(100)

function totalSum(... prices){
    let sum = 0
    for (const p of prices) sum += p
    return sum
}

console.log(totalSum(10, 18, 78, 22, 19,900))

// closure function
const namePrint = (city) => {
    
    const resident = (firstName) => {
        return `Hello ${firstName}, Welcome to ${city}. Thank you for Visiting!`
    }
    return resident
}

const newResident = namePrint("Addis Ababa")
console.log(newResident('Samson'))

function salary(amount){
    let finalSalary = amount - (amount * 0.15) - (amount * 0.35)
    return finalSalary;
}

const fsalary = (amount) => {
    let finalSalary1 = amount - amount * 0.15 - amount * 0.35;
    return finalSalary1;
}

const closureSalary = (amount) => {
    let vat = amount * 0.15
    let tax = amount * 0.35

    const final_salary = () => {
        return (amount - (vat + tax));
    }

    return final_salary
}

console.log(`normal function: ${salary(10000)}`)
console.log(`literal function: ${fsalary(20000)}`)
const cSalary = closureSalary(30000)
console.log(`closure Salary: ${cSalary()}`)

// call back function

const counter = (n, backCount) => {
   return backCount(n)
}

const counterFinal = (n) => {
    for(let i=n; i>=0; i--){
        console.log(i)
    }
}

counter(7, counterFinal)


// reciet generator

const subTotal = (...prices) => {
    let total = 0
    for(const p of prices) total += p
    console.log(`Total: ${total}`)
    return total
}

const discountBy = (rate) => (n) => n = n - (n * (rate));
const vat = (n) => n * 0.15
const toETB = (n) => `${n.toFixed(2)} ETB`;

function makeReciept() {
    let countOrder = 0
    let memberOff = discountBy(0.1)

    return function (...items){
        countOrder++
        const gross = subTotal(...items)
        let discount = memberOff(gross)
        const net = discount + vat(discount)
        return `${countOrder}: ${toETB(net)}`
    }
}

const reciept = makeReciept()
console.log(reciept(220, 180, 120));
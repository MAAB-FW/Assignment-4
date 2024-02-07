// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));

function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number"
    }
    const allTicketAmount = ticketSale * 120
    const daroan = 500
    const staff = 8 * 50
    const spend = daroan + staff
    return allTicketAmount - spend;
}

//-------------------------------------

// console.log(checkName('Salman'));
// console.log(checkName('RAFEE'));
// console.log(checkName('Jhankar'));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid'
    }
    const lastAlph = 'A,y,i,e,o,u,w'
    const lowLastAlph = lastAlph.toLowerCase()
    const lowName = name.toLowerCase()
    if (lowLastAlph.includes(lowName[lowName.length - 1])) {
        return 'Good Name'
    } else {
        return 'Bad Name'
    }
}

// ---------------------------

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

function deleteInvalids(array) {
    if (Array.isArray(array) !== true) {
        return "Invalid Array"
    }
    const newArray = []
    for (const element of array) {
        if (typeof element === "number" && !isNaN(element)) {
            newArray.push(element)
        }
    }
    return newArray
}
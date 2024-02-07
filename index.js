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
    const lastAlph = 'ayieouw'
    const lowName = name.toLowerCase()
    if (lastAlph.includes(lowName[lowName.length - 1])) {
        return 'Good Name'
    } else {
        return 'Bad Name'
    }
}
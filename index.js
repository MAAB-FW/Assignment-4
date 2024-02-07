console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

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


function checkName(name) {
    
    }
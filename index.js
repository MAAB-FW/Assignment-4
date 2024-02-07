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
    const lastAlph = 'a,y,i,e,o,u,w'
    const lowName = name.toLowerCase()
    if (lastAlph.includes(lowName[lowName.length - 1])) {
        return 'Good Name'
    } else {
        return 'Bad Name'
    }
}

// ---------------------------

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1", { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));

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

// ----------------------------

// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "maisha", birthYear: 2002 }));

function password(obj) {
    if (Object.keys(obj).length !== 3 || Object.values(obj)[1] > 9999 || Object.values(obj)[1] < 1000) {
        return 'invalid'
    }

    const webName = obj.siteName[0].toUpperCase() + obj.siteName.substring(1)
    const name = obj.name
    const birthDate = obj.birthYear
    return webName + '#' + name + '@' + birthDate
}



// Homework Function


// 1)

const familycharacters = ['Konstantin', 'Daria', 'Natsu', 'Swen']

function checkForCopyItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `Hello ${item}`
        }
    }
    return 'Not Hello'
}

console.log(checkForCopyItem(familycharacters, 'Natsu'))

// 2)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function checkForCopyNumber(array, item) {
    for (let i = 9; i < array.length; i++) {
        if (array[i] < item) {
            return `Got ${item}`
        }
    }
    return 'Nothing'
}


console.log(checkForCopyNumber(numbers, 11))

// 3)

const result = finalAnswer()

function finalAnswer(firstNumber, secondNumber, operation) {
    if (operation == 'plus') {
        return firstNumber + secondNumber
    }
    if (operation == 'minus') {
        return firstNumber - secondNumber
    }
    if (operation == 'multiply') {
        return firstNumber * secondNumber
    }
    if (operation == 'division') {
        return firstNumber * secondNumber
    }
}

console.log(finalAnswer(100, 100, 'multiply'))

// Homework Objects

// 1) / 2) / 3)

const civilian = {
    konstantin: {
        age: 29,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    },
    natsu: {
        age: 1,
        isAdmin: false
    },
    sven: {
        age: 5,
        isAdmin: false
    },
}

console.log(civilian)
civilian.konstantin.sayHello('Konstantin')

const users = [
    { name: 'Konstantin', isAdmin: true },
    { name: 'Natsu', isAdmin: false },
    { name: 'Swen', isAdmin: false },
];

let regularUsersCount = 0;

for (let user of users) {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
}

console.log('Количество обычных пользователей:', regularUsersCount);






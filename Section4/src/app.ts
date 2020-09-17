// const  userName = 'Alejandro';
// userName = 'Ale';

// let age = 30;

// age = 29;
// let result;

// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: string | number) => void = output  => console.log(output);

// const button = document.querySelector('button');

// if(button) {
//     button.addEventListener('click', event => console.log(event));
// }

// console.log(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: 'Ale',
    age: 22,
};

const copiedPerson = {...person};
console.log(copiedPerson);


const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
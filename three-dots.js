// https://medium.com/@oprearocks/what-do-the-three-dots-mean-in-javascript-bc5749439c9a

// three dots in objects - spread operator

const adrian = {
    fullName: 'Adrian Oprea',
    occupation: 'Software developer',
    age: 31,
    website: 'https://oprea.rocks'
};

console.log(adrian);

const adrianCopy = {
    ...adrian,
}

console.log(adrianCopy);

const bill = {
    ...adrian,
    fullName: 'Bill Gates',
    website: 'https://microsoft.com'
};

console.log(bill);

// three dots in array object - spread operator

const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);

const numbers2 = [ ...numbers1, 1, 2, 6,7,8]; // this will be [1, 2, 3, 4, 5, 1, 2, 6, 7, 8]
console.log(numbers2);

// three dots in a method argument of a function
function sum(...numbers) {
    return numbers.reduce((accumulator, current) => {
        return accumulator += current
    });
};

result = sum(1,2);
console.log(result);  // should be 3

result = sum(1,2,3,4,5,6);
console.log(result);   // should be 21
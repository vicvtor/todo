// rest оператор
function t1(a,b,...c) {
    console.log(c);
}
t1(1,2,3,4,5);

// spread оператор
const arr = [1,2,3,4,5]
console.log(Math.max(...arr));

// object destructuring
const person = {
    firstName : 'Ivan',
    lastName : 'Ivanovo',
    age: 40
}
const { firstName, lastName } = person;
console.log(firstName, lastName);
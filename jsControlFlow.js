// JavaSCript Control Flow Exercises


// Lecture 3 p13 ==> berhasil dg console.log
function alertMessage() {
    alert("Hello! This is an alert message.");
}
alertMessage();


// Lecture 3 p17
function showMessage(name, greeting) {
    console.log(`${greeting}, ${name}!`);
}
const greeting = "Hello"

const person = {
    name: "Alice"
}
showMessage(person.name, greeting);
// Output: Hello, Alice!


// Lecture 3 p19
function showMessage(name = "Anonymous", greeting = "Hi") {
    console.log(`${greeting}, ${name}!`)
}   
showMessage()
// Output: Hi, Anonymous!


// Lecture 3 p20
function sumNumbers(numberA, numberB) {
    return numberA + numberB;
}
sumNumbers(1, 1)
console.log(sumNumbers(1, 1))
// Output: 2


// Lecture 3 p37
let text = " "
// let number
for (number = 0; number < 5; number++) {
    if (number === 3) {
        break
    }
}
text = "The number is " + number
console.log(text)
// Output: The number is 3


// Lecture 3 p39
// let number = 0;
while (number < 3) {
    console.log(number);
    number++;
}
// Output: 0 1 2

// Lecture 3 p41 ==> while (i < 3) changed while (number < 3)
// let number = 0;
do {
    console.log(number);
    number++;
} while (number < 3);
// Output: 0 1 2

// Lecture 3 p42
function cookAnoodle () {
    console.log("Phase 1: Preparing ingredients");
    let waterTemp = 0;
    const boilingPoint = 100;

    do {
        waterTemp += 20;
        // console.log(`Heating water: ${waterTemp}°C`);
    } while (waterTemp < boilingPoint);

    console.log("Phase 2: Cooking noodles");
    // for (let cookTime = 1; cookTime <= 5; cookTime++) {
    //      console.log(`Cooking noodles: ${cookTime} minute(s)`);
    // }   
    console.log("Cooking finished!");
}
cookAnoodle();
// 

// FizzBuzz Function - write fizzBUzz(n) that return "Fizz" if  divisible by 3
// "Buzz" if by 5, "FizzBuzz" if by both numbers 
var number = 5;
function fizzBuzz(number) {
  if (number % 15 === 0) return "FizzBuzz";
   if (number % 5 === 0) return "Buzz";
    if (number % 3 === 0) return "Fizz";
    return number;
}

console.log(fizzBuzz(number));
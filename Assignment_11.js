// Explanation of Hoisting:
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase before the code execution.
// This means that regardless of where variables and functions are declared, they are moved to the top of their scope before the code is executed.

// Example of Variable Hoisting:
console.log(myVar); // Output: undefined
var myVar = 5; // Declaration is hoisted to the top

// Explanation:
// Even though the variable is used before it's declared, JavaScript hoists the variable declaration to the top of its scope during the compilation phase, so it does not throw an error. However, the value assignment does not get hoisted, so the variable is undefined at the point of logging.
console.log(name);
let name="pavel";
// Hoisting are not working for let and const that way this code show an erro.
// Example of Function Hoisting:
myFunction(); // Output: "Hello, World!"
function myFunction() {
  console.log("Hello, World!");
}

// Explanation:
// Function declarations are also hoisted to the top of their scope. So, the function can be called before it's declared without throwing an error.

// Explanation of Function Hoisting Differences:
// Function declarations are fully hoisted, meaning they are moved to the top of their scope and can be called before their declaration.
// Function expressions, however, are not hoisted in the same way. Only the variable declaration is hoisted, not the function assignment.

// Example of Function Expression Hoisting:
// This will throw an error: 
// myFuncExpression(); // TypeError: myFuncExpression is not a function
var myFuncExpression = function() {
  console.log("I am a function expression");
};

// Explanation:
// Function expressions are not fully hoisted. Only the variable declaration is hoisted, not the function assignment. Therefore, trying to call the function before its declaration results in an error.

// Hoisting behavior with var, let, and const:

// var:
console.log(x); // Output: undefined
var x = 10;

// let and const:
// This will throw a ReferenceError because variables declared with let and const are hoisted, but not initialized.
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;

// Explanation:
// Variables declared with var are hoisted to the top of their scope and are initialized with undefined. However, variables declared with let and const are hoisted to the top of their scope, but they are not initialized. Therefore, accessing them before initialization results in a ReferenceError.

// Note: To prevent issues with hoisting, it's a good practice to declare variables at the top of their scope and initialize them before use.

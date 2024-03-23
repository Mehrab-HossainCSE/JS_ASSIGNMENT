
function counter() {
    let count = 0; 

   
    function increment() {
        count++;
        return count;
    }

    return increment; 
}


function makePassword(password) {
  
    function checkPassword(guess) {
        return guess === password;
    }

    return checkPassword; 
}


function counterWithStep(step = 1) {
    let count = 0; 

    
    function increment() {
        count += step;
        return count;
    }

    return increment; 
}


const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

const checkPassword = makePassword("mySecretPassword");
console.log(checkPassword("password123")); // Output: false
console.log(checkPassword("mySecretPassword")); // Output: true

const incrementByTwo = counterWithStep(2);
console.log(incrementByTwo()); // Output: 2
console.log(incrementByTwo()); // Output: 4

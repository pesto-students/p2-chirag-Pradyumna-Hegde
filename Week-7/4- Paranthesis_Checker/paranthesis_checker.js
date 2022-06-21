import Stack from "./Stack.js";

const LIB = [ ['{', '}'], ['[', ']'], ['(', ')'] ];

function isBalanced(expression) {
    const stack = new Stack();
    for (let character of expression.split("")) {
        if(isOpenTerm(character)) 
            stack.push(character);
        else if (stack.isEmpty() || !matches(stack.pop(), character)) {
            return false;
        }
    }
    return stack.isEmpty();
}

// checks whether the character argument is strictly equal to the Open brackets of LIB.  
function isOpenTerm(character) {
    for (let eachArray of LIB) {
        if (eachArray[0] === character)
            return true;
    }
    return false;
}

// check whether the openTerm & closeTerm are strictly equal to the open Bracket & close Bracket of LIB.
function matches(openTerm, closedTerm) {
    for(let eachArray of LIB) {
        if(eachArray[0] === openTerm) {
            if(eachArray[1] === closedTerm) {
                return true;
            }
        }
    }
    return false;
}


// const expression = "[()]{}{()()}";
// console.log(isBalanced(expression)); //should return true.
// console.log(isBalanced(expression2)); //should return false.
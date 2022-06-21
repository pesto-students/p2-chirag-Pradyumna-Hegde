function pair_with_given_difference(array, target) {
   let result = 0; 
    for(let i=0; i<array.length; i++) {
        for(let j=0; j<array.length; j++) {
            if(compare_and_subtract(array[i], array[j]) === target) {
                result = 1;
            }
        }
    }
    return result;
}

function compare_and_subtract(a, b) {
    if(a > b) return a-b;
    else return b-a;
}


const array =  [5, 10, 3, 2, 50, 80];
const result = pair_with_given_difference(array, 78);
console.log(result);

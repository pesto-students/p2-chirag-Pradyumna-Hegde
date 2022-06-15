const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function max_sum_subArray(array) {
    let current_sum = final_sum = array[0]; //initializing current value and final value with the first value in input array.
    
    for(let i=1; i<array.length; i++) { //from array[index=1] to array[index=array-length]
        current_sum = Math.max(array[i], array[i]+current_sum); //finding out max between current number according to loop and sum of previous numbers.

        if(current_sum > final_sum) final_sum = current_sum; //if current value is greater than final value --> update current value as final-value
    }
    return final_sum;
} //This algorithm is Known as Kadane's Algorithm.

console.log(max_sum_subArray(input));
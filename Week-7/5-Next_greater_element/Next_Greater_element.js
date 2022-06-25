function print_next_greater_element(array) {
    let next = 0; 
    const n = array.length;

    for(let i=0; i<n; i++) {
        next = -1;
        for(let j=i+1; j<n; j++) {
            if(array[i] < array[j]) {
                next= array[j];
                break;
            }
        }
        console.log(`${array[i]} --> ${next}`);
    }
}
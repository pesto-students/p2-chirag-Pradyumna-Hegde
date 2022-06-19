function spiral_value_array(array) { //array is 2-Dimnesional
  const resultant_array = [];

  let rowBegin = 0;
  let rowEnd = array.length-1;
  let columnBegin = 0;
  let columnEnd = array[0].length-1;

  if(array.length == 0) return resultant_array;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    
    for(let i=columnBegin; i<=columnEnd; i++) {
      resultant_array.push(array[rowBegin][i]);
    }
    rowBegin++;

    for(let i=rowBegin; i<=rowEnd; i++) {
      resultant_array.push(array[i][columnEnd]);
    }
    columnEnd--;

    if(rowBegin <= rowEnd) {
      for(let i=columnEnd; i>=columnBegin; i--) {
        resultant_array.push(array[rowEnd][i]);
      }
    }
    rowEnd--;

    if(columnBegin <= columnEnd) {
      for(let i=rowEnd; i>=rowBegin; i--) {
        resultant_array.push(array[i][columnBegin]);
      }
    }
    columnBegin++;
  }

  return resultant_array;
}

const array = [ [1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9], ];

                
console.log(spiral_value_array(array));
const array = [0, 1, 0, 0, 1, 2, 0];

function sort_array(array) { //input is an array

    let start=0, middle=0, end=array.length-1;
    let myArray = array;

    /*
        start/mid              end
      array[0, 1, 0, 0, 1, 2, 0]       

          start  mid              end
       array[0,  1,  0, 0, 1, 2,  0]            Here, array[mid] equals to 1, then mid should go next.

          start     mid          end
       array[0,  1,  0, 0, 1, 2,  0]            Here, array[mid] equals to 0, then swap array[mid] and array[start] values
                                                and that becomes array = [0,  1,  0, 0, 1, 2,  0] and start++, mid++.


               start   mid       end
       array[0,  1,  0, 0, 1, 2,  0]            Here, array[mid] equals to 0, then swap array[mid] and array[start] values
                                                and that becomes array = [0,  0,  0, 1, 1, 2,  0] and start++, mid++.

    
                   start    mid    end
       array[0,  0,  0,  1,  1, 2,  0]          Here, array[mid] equals to 1, then mid++.


                    start       mid    end
       array[0,  0,  0,  1,  1,  2,     0]      Here, array[mid] equals to 2, then swap array[mid] and array[end] values
                                                and array becomes array = [0,  0,  0, 1, 1, 0,  2] and end--.

    */

    while (middle <= end) {
        if(array[middle] == 1) middle++;

        if(array[middle] == 0) {
            myArray = swap(myArray, start, middle);
            start++;
            middle++;
        } else { // if(array[middle] == 2)
            myArray = swap(myArray, middle, end);
            end--;
        }
    }
    return myArray;
}

function swap(array, pointer1, pointer2) {
    let temp = array[pointer1];
    array[pointer1] = array[pointer2];
    array[pointer2] = temp;
    return array;
}


console.log(sort_array(array));
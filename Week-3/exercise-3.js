function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    let message = `count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

//calling the function.
const [increment, log] = createIncrement();
/* 1.variable count is created and initialized with a value: 0,
    2. function increment() is created but not called,
    3. String message is created (at this stage, since function increment() is  not yet called, the body part of that increment() function is not executed) as message = "count is 0";,
    4. function log() is created but not called,
    5. returns both increment() and log() functions.
*/

increment(); // value of the count is incremented to count: 1.
increment(); // value of the count is incremented to count: 2.
increment(); // value of the count is incremented to count: 3.
log();
/*
according to the instructions written in the body part of the log()
function, it should display the value of the message in the console and if you see the line-21, the value of the message is "count is 0" and is displayed as 'count is 0'.
*/


// Answer:  count is 0

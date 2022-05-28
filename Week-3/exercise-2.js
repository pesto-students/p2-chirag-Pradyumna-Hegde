// Using Bind.
function sum(a, b) {
    return this.a + this.b;
}

const sumB = sum.bind({ a:10, b:25});

console.log(sumB()); // ==>35

/****************************************/

// Using Call
function elevate() { 
    var offer = [   //this == object
        this.name, 
        'have been elevated to Manager position'
    ].join(' ');

    console.log(offer);
}

var Arun = {
    name: 'arun'
};

var Dhanush = {
    name: 'dhanush'
};

elevate.call(Arun);
elevate.call(Dhanush);

/*******************************************/

// Using apply.
let numbers = [88, 64, 212, 416, 432];

let max = Math.max.apply(null, numbers);
console.log(max);
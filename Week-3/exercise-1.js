/* creating the memoise function */

function memoise(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = args.toString();
        
        cache.has(key) ? cache.get(key) : cache.set(key, fn(args));
        return cache.get(key);
    };
}


function add(a,b){
    return a+b;
}

const memoiseAdd = memoise(add);

console.time();
memoiseAdd(100,100);
console.timeEnd();

memoiseAdd(100);
memoiseAdd(100, 200);

console.time();
memoiseAdd(100,100);
console.timeEnd();
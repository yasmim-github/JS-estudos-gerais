//make the internal function return a value due to proper function closure

let createCounter = function(n) {
    let count = n;
    return function counter() {
    return count++
    };
};

createCounter(10);

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
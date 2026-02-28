// Array Rest

let arr = [100, 200, 300, 400];

let [first, ...others] = arr;

console.log(first); 
console.log(others);

// Object Rest

let obj = { a: 1, b: 2, c: 3 };

let { a, ...rest } = obj;

console.log(rest);
/**
 * Shallow copy vs deep copy
 */

let obj1 = { name:'hello', arr:['a','b'] };
let obj2 = { ...obj1 }; // shallow copy
let obj3 = JSON.parse(JSON.stringify(obj1)); // deep copy
obj2.name = 'hi'
obj2.arr.push('c');
console.log(obj1);
console.log(obj2);
import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log("Entries ", test.entries());
console.log("Keys ", test.keys());
console.log("Values ", test.values());
console.log("Length ", test.length());
console.log("Capacity ", test.capacity);

test.set('jacket', 'violet');
test.set('grape', 'green');
// test.set("moon", "silver");

console.log('Jacket', test.get('jacket'));
console.log('Grape', test.get('grape'));
console.log("Length ", test.length());

console.log('Test - Has: ', test.has('carrot'));
console.log('Test - Get: ', test.get('Unknown'));
test.remove('frog');
console.log("Length ", test.length());
test.clear();
console.log("Length ", test.length());
console.log("Entries ", test.entries());
console.log("Keys ", test.keys());
console.log("Values ", test.values());
//objects
//object = { key : value };
const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

//can add properties later

ellie.hasJob = true;
console.log(ellie.hasJob);

//2. Computed properties
console.log(ellie.name);
console.log(ellie['name']);
//배열로도 접근이가능하다 스트링타입으로만

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = makePerson('ellie', 30);
function Person(name, age) {
  return {
    name,
    age,
  };
}

console.log('name' in ellie);
console.log('age' in ellie);

console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

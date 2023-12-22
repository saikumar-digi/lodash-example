const _ = require('lodash');

const num = [1, 2, 3, 4, 5];
const words = ['apple', 'banana', 'orange'];


// Reverse a array
console.log(_.reverse(num));
//num[ 5, 4, 3, 2, 1 ]

// remove nested array
const nestedArray = [1, [2, [3, [4]]]];
console.log(_.flattenDeep(nestedArray));
// [ 1, 2, 3, 4 ]


console.log(_.chunk(num, 2));
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

//concat array
console.log(_.concat(num, 6, [7, 8], [9, 10]));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// unique number
console.log(_.uniq([...num, 3, 4, 5, 6]));
// [ 1, 2, 3, 4, 5, 6 ]

// Count occurrences
console.log(_.countBy(words, 'length'));
// { '5': 1, '6': 2 }

// max number
console.log(_.max(num));
// 5

//sum of number
console.log(_.sum(num));
// num15

// adds two num
const add = _.add;
console.log(add(3, 4));
// 7

// Capital first letter
console.log(_.map(words, _.capitalize));
// [ 'Apple', 'Banana', 'Orange' ]

// Shuffle
console.log(_.shuffle(num));
// [ 3, 2, 1, 5, 4 ]

// range of num
console.log(_.range(1, 10, 2));
// [ 1, 3, 5, 7, 9 ]

// Pick from object random
const person = { name: 'John', age: 30, city: 'New York' };
console.log(_.pick(person, ['name', 'age']));
// { name: 'John', age: 30 }

// Sort
const users = [
    { name: 'sai', age: 20 },
    { name: 'abu', age: 25 },
    { name: 'vivek', age: 30 },
  ];
  console.log(_.sortBy(users, 'age'));
  //  [ { name: 'abu', age: 25 }, { name: 'sai', age: 20 }, { name: 'vivek', age: 30 } ]

//   _.reverse(_.sortBy(users, 'age'));

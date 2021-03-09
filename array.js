'use strict';

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length); //2개
console.log(fruits[0]); //사과
console.log(fruits[1]); //바나나
console.log(fruits[2]); //undefiend
console.log(fruits[fruits.length - 1]); //제일 마지막의 인덱스를 받아올수잇다

//3. Looping over an array
//print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 중요함! 배열안에들어있는 함수들을 전달하는 api
fruits.forEach = (fruit) => console.log(fruit);

// 배열에 push
fruits.push('딸기', '복숭아');
console.log(fruits);

// 배열을 빼기 pop 배열의 맨뒤를 빼준다
fruits.pop();
console.log(fruits);

//배열 앞에서부터 데이터를 더하려면
fruits.unshift();

//배열 앞에서부터 데이터를 빼려면
fruits.shift();

//지정된 곳에서 데이터를 지우려면 splice

fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1); //이렇게하게되면 우리가 지정한인덱스부터 시작해서 모든걸 지워버린다
fruits.splice(1, 1); //이렇게하게되면 시작하는 인덱스에서 한개만 지울수있게된다
console.log(fruits);
fruits.splice(1, 1, '사과', '수박'); //지운자리에 사과와 수박을 대입할수있다

const fruits2 = ['배', '키위'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과')); //몇번째인지알려주는것
console.log(fruits.includes('배')); //배가 프루츠 어레이에 있는지없는지 트루펄스로 알려준다




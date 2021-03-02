//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 1);
console.log(`string literals: 1+2 = ${1 + 2}`);

//2. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;
//counter = counter +1;
//preIncrement = counter;

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter +1;

x += y;
x = x + y;
x -= y;
x = x - y;
x *= y;
x = x * y;

//------------------------------------------------------------------------------------------------------------------------------------------
//Logical operators: || (or), && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value 셋중에 하나라도 트루가되는애가있으면 트루
console.log(`or: ${value1 || value2 || check()}`);
// 연산자를 사용할때 무거운 함수들은 맨마지막에 사용하는것이 좋다

// && (and), finds the first falsy value 셋이 다 트루가 되야 트루
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('ox10');
  }
  return true;
}

// !(not)
console.log(!value1);

//-------------------------------------------------------------------------------------------------------------------------------------------

// 7. Equality

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

//-------------------------------------------------------------------------------------------------------------------------------------------

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('you are amazing coder');
} else {
  console.log('unkwnon');
}
// if 만약 엘리니 하면 맞으면 출력 const에 coder 이면 else if넘어가 출력 둘다아니면 else로 출력

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
//삼항연산자 만약 네임이 엘리면 예스를 출력하고 아니면 no를 출력하라는뜻

//10. Switch statement

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
    defalut: console.log('same all!');
    break;
}

//11. Loops 조건문이 맞을때만 블럭을 실행하고싶을땐 while

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//12. do while 블럭을 먼저실행시키고 싶다면 do while

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

//13. for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// 0부터 10까지 짝수인아이들만 프린팅
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1.${i}`);
  }
}

// 0부터 10까지 숫자 8을만나면 브레이크
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    console.log(`q2.${i}`);
  }
}

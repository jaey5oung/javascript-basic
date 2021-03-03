// 1.Function declaration
// function name(param1,param2) { body... return }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint

function printHello() {
  console.log('hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('하이');

// 2.Parameters
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//오브젝트는 ref로 저장되기떄문에 변경된 사항이 메모리에 저장되기떄문에 추후에 사용이 가능하다

//3.Defalut parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4.Rest parameters (added in ES6) ... <-배열형태로 전달되게된다
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll('dream', 'coding', 'ellie');

//5.Local scope
//밖에서는 안이 보이지않고 안에서만 밖을 볼수 있다
let globalMessage = 'global'; //global variable
function printMessage() {
  let message = 'hello';
  console.log(message); //local variable
  console.log(globalMessage);
}
printMessage();

//6.Return a value
function sun(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//7. Early return , early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

//anonymous function 호이스팅이 가능하다
const print = function () {
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

//anonymous function
const printYes = function () {
  console.log('yes');
};

//named function
const printNo = function print() {
  console.log('no');
};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  return a * b;
};
//블록스코프를 쓸땐 리턴을 써줘야한다

//IIFE : immediately invoked function expression
(function hello() {
  console.log('IIFE');
})();

//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3));

//정해진 데이터를 처리하는것은 스위치문이 더 좋다
//function 다시반복
//whole-script strict mode syntax
//java script is very flexible

'use strict';

//입력 , 연산 , 출력

//Variable = 변수
//let (added in ES6)

let globalName = 'global name'; //이렇게 글로벌한 변수는 어느곳에서나 사용이가능하다
{
let name = 'jang'
console.log(name);

// let name = '1'
console.log(globalName);

}
console.log(name); //스코프 블럭밖에서 name 변수를 콘솔을찍으면 값이 나오지않는다

//var don't ever use this
//var hoisiting 변수를 어디에 선언했냐에 상관없이 항사 맨위에끌어올리는것을 의미한다
age = 4;
var age;

//const 한번할당하면 값이 절대 바뀌지않음

const a = 12
// const a = 11  (xxx)

//variable types 데이터 타입
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//연산할때 항상 타입을 확인해야댄다


//string 

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;

//null 내가 명확하게 넌 아무것도아니야
//undefinde 선언은 되엇지만 값이 비어잇는상태

//고유한 식별자가를 필요로할때 symbol

const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2); //true

// Dynamic typing : dynamically typed language
let text = 'hello';

//object , real-life
const ellie = {name:'ellie' ,age:'24'}


//Variable, rw(read/write)
//let 메모리에 읽고쓰기가 가능하다

//Constant, r(read only)
//const 메모리에 읽기만 가능하다 
//--------------------------------------------------------------------------------------------------------

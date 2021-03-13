
function add(num1,num2){
    return num1+num2    
}
const result = add(2,3)
console.log(result);

function divide(num1,num2){
    return num1/num2
}
const result2 = divide(2,3)
console.log(result2);

function suprise(op){
    const result3 = op(2,3)
    console.log(result3);
    }
suprise(divide)

//다시시작
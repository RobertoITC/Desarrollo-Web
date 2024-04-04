
let fullOperation = '';
let prevCalculation='';
let prevOperation = '';
let totalPrevOp='';
let saved ='';


function pressButton(number) {
  console.log('hello world' + number);
  fullOperation = fullOperation + number;
  showNumber();
}

function eraseScreen(){
  fullOperation='';
  document.getElementById('operand1Display').innerHTML = fullOperation;

}

function pressOperation(op) {
  console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\^|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\^|\/)/);

  console.log(number1);
  console.log(number2);
  console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  prevOperation=fullOperation;

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '+':fullOperation=addition(number1,number2)
      break;
    case '-':fullOperation=substraction(number1,number2);
      break;
    case '^':fullOperation=paw(number1,number2);
    break;
    case '/':fullOperation=division(number1,number2);
    break;
    default:
      break;
  }

  showNumber();
  prevCalculation=fullOperation;
  totalPrevOp=prevOperation+' = '+prevCalculation
  prevResult(totalPrevOp);

}

function multiplication(number1, number2) {
  return number1 * number2;
}

function addition(number1, number2) {
  return number1 + number2;
}

function substraction(number1, number2) {
  return number1 - number2;
}

function paw(number1, number2) {
  return Math.pow(number1,number2);
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

function division(number1,number2){
  return number1/number2;
}

function prevResult(string){



  saved = saved +'<br />'+string;
  document.getElementById('prevRes').innerHTML = saved;






}
showNumber();

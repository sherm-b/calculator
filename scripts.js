function add (a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function operate(operator, num1, num2){
    let value = operator(num1, num2)
    return value
}

const display = document.getElementById('display');
const inputButtons = document.getElementsByClassName('input');

for (let i = 0; i < inputButtons.length; i++){
    inputButtons[i].addEventListener('click', function (e) {
    number = e.target.getAttribute('id')
    if (display.textContent.includes('.') && number == '.'){
        return
    } else {
    display.textContent += `${number}`
    }
})
}

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('times');

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearDisplay)

function clearDisplay(){
    display.textContent = '';
}

const operatorButtons = document.getElementsByClassName('operator')
const equalsButton = document.getElementById('equals')

operatorButtons.addEventListener('click', )
let operator
let firstOperand

function storeFirst(event){
    switch (event.target){
        case plusButton:
            operator = add;
            break;
        case minusButton:
            operator = subtract;
            break;
        case divideButton:
            operator = divide;
            break;
        case multiplyButton:
            operator = multiply;
            break;
    }

    firstOperand = display.textContent;
    clearDisplay()
}
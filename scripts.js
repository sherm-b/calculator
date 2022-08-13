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


const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearDispAndVals())

function clearDispAndVals(){
    clearDisplay()
    firstOperand = undefined;
    secondOperand = undefined;
}

const operatorButtons = document.getElementsByClassName('operator')
const equalsButton = document.getElementById('equals')


let operator
let firstOperand
let secondOperand

function clearDisplay(){
    display.textContent = '';
}

for (let i = 0; i < operatorButtons.length; i++){
    switch(operatorButtons[i].id){
        case 'plus':
            operatorButtons[i].addEventListener('click', () => {
                operator = add;
                firstOperand = display.textContent
                clearDisplay()
            })
            break;
        case 'minus':
            operatorButtons[i].addEventListener('click', () => {
                operator = subtract;
                firstOperand = display.textContent;
                clearDisplay()
            })
            break;
        case 'divide':
            operatorButtons[i].addEventListener('click', () => {
                operator = divide;
                firstOperand = display.textContent;
                clearDisplay()
            })
            break;
        case 'times':
            operatorButtons[i].addEventListener('click', () => {
                operator = multiply;
                firstOperand = display.textContent;
                clearDisplay();
            })
            }
    }
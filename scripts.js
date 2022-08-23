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


const operatorButtons = document.getElementsByClassName('operator')
const equalsButton = document.getElementById('equals')

let operator
let firstOperand
let secondOperand
let result
let displayVal
let equals = false

clearButton.addEventListener('click', clearDispAndVals)

function clearDispAndVals(){
    clearDisplay()
    firstOperand = undefined;
    secondOperand = undefined;
    operator = undefined;
    result = undefined;
}

function clearResult(){
    result = undefined;
}


function clearDisplay(){
    display.textContent = '';
}

for (let i = 0; i < operatorButtons.length; i++){
    switch(operatorButtons[i].id){
        case 'plus':
            operatorButtons[i].addEventListener('click', () => {
                operator = add;
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                clearDisplay()
            })
            break;
        case 'minus':
            operatorButtons[i].addEventListener('click', () => {
                operator = subtract;
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                clearDisplay()
            })
            break;
        case 'divide':
            operatorButtons[i].addEventListener('click', () => {
                operator = divide;
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                clearDisplay()
            })
            break;
        case 'times':
            operatorButtons[i].addEventListener('click', () => {
                operator = multiply
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                clearDisplay()
            })
            break;
        case 'equals':
            operatorButtons[i].addEventListener('click', () => {
                    displayVal = parseFloat(display.textContent)
                    equals = true
                    eval(displayVal)
            })
        }
}

function eval(num){
    if (equals == false){
        if (firstOperand == undefined){
            firstOperand = num
        } else if (result == undefined){
            firstOperand = operate(operator, firstOperand, num)
        } else if (num !== result){
            firstOperand = operate(operator, firstOperand, num)
        } else {
            return
        }
    } else {
        if (secondOperand == undefined){
            secondOperand = num
        }

        result = operate(operator, firstOperand, secondOperand)
        

        display.textContent = result
        firstOperand = result
        equals = false
    }
}



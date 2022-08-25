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
    } else if (display.textContent.length < 9){
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
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                operator = add
                clearDisplay()
            })
            break;
        case 'minus':
            operatorButtons[i].addEventListener('click', () => {
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                operator = subtract;
                clearDisplay()
            })
            break;
        case 'divide':
            operatorButtons[i].addEventListener('click', () => {
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                operator = divide;
                clearDisplay()
            })
            break;
        case 'times':
            operatorButtons[i].addEventListener('click', () => {
                secondOperand = undefined
                displayVal = parseFloat(display.textContent)
                eval(displayVal)
                operator = multiply
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
        } else if (secondOperand !== undefined){
            firstOperand = operate(operator, firstOperand, num)
        }
    } else {
        if (secondOperand == undefined){
            secondOperand = num
        }

        if (secondOperand == 0 && operator == divide){
            clearDispAndVals()
            display.textContent = 'ERR: lol'
            equals = false
            return
        }

        result = operate(operator, firstOperand, secondOperand)
        
        display.textContent = result
        if (display.textContent.includes('Infinity') || display.textContent.includes('NaN')){
            clearDispAndVals()
            display.textContent = 'ERR: C\'mon'
            equals = false
            return
        } else if (display.textContent.length > 9 && display.textContent.includes('.')){
            display.textContent = parseFloat(display.textContent).toFixed(8)
        } else if (display.textContent.length > 9){
            clearDispAndVals()
            display.textContent = 'ERR'
            equals = false
            return
        }


        firstOperand = result
        equals = false
    }
}


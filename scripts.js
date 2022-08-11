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

let display = document.getElementById('display')
let inputButtons = document.getElementsByClassName('input')

for (let i = 0; i < inputButtons.length; i++){
    inputButtons[i].addEventListener('click', function (e) {
    number = e.target.getAttribute('id')
    display.textContent += `${number}`
})
}


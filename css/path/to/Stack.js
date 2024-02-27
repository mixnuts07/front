const num1 = document.querySelector('[name=num1]')
const num2 = document.querySelector('[name=num2]')
const result = document.querySelector('.result')
const calcButton = document.querySelector('button')
console.log(num1)
calcButton.addEventListener('click', ()=> {
    const sumNum = sum(num1.value, num2.value)
    result.textContent = sumNum
    console.log(11)
})

function sum(num1, num2) {
    return num1 + num2
}
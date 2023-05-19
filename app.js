const inputField = document.querySelector('.number-field');
const resultField = document.querySelector('.results-field');
const countBtn = document.querySelector('.count-btn');
const randBtn = document.querySelector('.rand-btn');
const selectMenu = document.querySelector('.select-menu');


function countNum() {
    let selectedOption = selectMenu.value;
    let inpNum = inputField.value;
    const numbersArray = inpNum.split(" ");
    const numbers = numbersArray.map(num => parseInt(num));
    if (inpNum !== '' && selectedOption !== '') {
        if (selectedOption == 'sum') {
            let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            resultField.innerHTML = sum;
        } else if (selectedOption == 'prod') {
            let prod = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
            resultField.innerHTML = prod;
        } else if (selectedOption == 'min') {
            let min = Math.min(...numbers);
            resultField.innerHTML = min;
        } else if (selectedOption == 'max') {
            let max = Math.max(...numbers);
            resultField.innerHTML = max;
        }
    } else {
        resultField.innerHTML = "Enter a valid number and operand";
    }


    inputField.value = '';
}

function randNum() {
    let randomNumber = Math.random() * 11;
    inputField.value = Math.floor(randomNumber);
    // console.log('random button');
}
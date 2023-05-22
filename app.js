const inputField = document.querySelector('.number-field');
const resultField = document.querySelector('.results-field');
const countBtn = document.querySelector('.count-btn');
const randBtn = document.querySelector('.rand-btn');
const selectMenu = document.querySelector('.select-menu');
const downloadBlock = document.querySelector('.download-block');
const downloadInput = document.querySelector('.download-name-input');
const donwloadBtn = document.querySelector('.download-btn');
const colorToggler = document.querySelector('.color-toggler');


function countNum() {
    let selectedOption = selectMenu.value;
    let inpNum = inputField.value;
    const numbersArray = inpNum.split(" ");
    const numbers = numbersArray.map(num => parseInt(num));
    if (inputField.value === '' && selectMenu.value === '') {
        resultField.value = "Enter a valid number and operand";
    } else {
        downloadBlock.style.display = 'flex';
        if (selectedOption == 'sum') {
            let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            resultField.value = sum;
        } else if (selectedOption == 'prod') {
            let prod = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
            resultField.value = prod;
        } else if (selectedOption == 'min') {
            let min = Math.min(...numbers);
            resultField.value = min;
        } else if (selectedOption == 'max') {
            let max = Math.max(...numbers);
            resultField.value = max;
        }
    }
}

function randNum() {
    let randArray = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.random() * 999;
        randArray.push(Math.floor(randomNumber));
    }
    inputField.value = randArray.join(' ');
}

function downloadData() {
    var dataToDownload = "Operation: " + selectMenu.value + "\n" +
        "Input Value: " + inputField.value + "\n" +
        "Result: " + resultField.value;
    var blob = new Blob([dataToDownload], { type: "text/plain" });
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    if (downloadInput.value !== '') {
        downloadLink.download = downloadInput.value + '.txt';
    } else {
        downloadLink.download = 'results.txt'
    }
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function changeBackgroundColor() {
    var bgColorInput = document.querySelector(".bg-color-input");
    var numberField = document.querySelector(".number-field");
    var resultsField = document.querySelector(".results-field");
    var bgColor = bgColorInput.value;

    numberField.style.backgroundColor = bgColor;
    resultsField.style.backgroundColor = bgColor;
}

function changeFontColor() {
    var fontColorInput = document.querySelector(".font-color-input");
    var numberField = document.querySelector(".number-field");
    var resultsField = document.querySelector(".results-field");
    var fontColor = fontColorInput.value;

    numberField.style.color = fontColor;
    resultsField.style.color = fontColor;
}

function resetButton() {
    inputField.value = '';
    resultField.value = '';
    downloadBlock.style.display = 'none';
}
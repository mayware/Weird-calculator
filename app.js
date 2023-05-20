const inputField = document.querySelector('.number-field');
const resultField = document.querySelector('.results-field');
const countBtn = document.querySelector('.count-btn');
const randBtn = document.querySelector('.rand-btn');
const selectMenu = document.querySelector('.select-menu');
const donwloadBtn = document.querySelector('.download-btn');
const colorToggler = document.querySelector('.color-toggler');


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
    donwloadBtn.style.display = 'flex';
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
    downloadLink.download = "data.txt";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
colorToggler.addEventListener('click', function () {
    if (!colorToggler.checked) {
        inputField.style.backgroundColor = '#cad2c5';
        inputField.style.color = '#101010';
        resultField.style.backgroundColor = '#cad2c5';
        resultField.style.color = '#101010';
    } else {
        inputField.style.backgroundColor = '';
        inputField.style.color = '';
        resultField.style.backgroundColor = '';
        resultField.style.color = '';
    }
})
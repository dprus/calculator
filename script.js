let result = document.querySelector('.result');
let resultTwo;
let previousNumber = document.querySelector('.previousNumber');
let mathSign = document.querySelector('.mathSign');
let slicedResult;
//Buttons
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const calcScreen = document.querySelector('.calcScreen');



window.onload = function () {
    result.innerHTML = "0";
    previousNumber.innerHTML = "0";
    mathSign.innerHTML = "";
    calcScreen.classList.remove("active");
}

//Clear button
clearBtn.addEventListener('click', () => {
    location.reload();
})


//Delete button
deleteBtn.addEventListener('click', () => {
    result.innerHTML = result.innerHTML.toString().slice(0, -1);
    resultZero();
})

//Display 0 if all numbers are removed by delete button
function resultZero() {
    if (result.textContent == '') {
        result.innerHTML = "0";
    }

    if (previousNumber.textContent == '') {
        previousNumber.innerHTML = "0";
    }
}

function displayNumbers() {
    if (this.textContent === '.' && result.innerHTML.includes('.')) return;
    if (this.textContent === '.' && result.innerHTML === '0') {
        return result.innerHTML = '0.';
    }
    if (result.innerHTML === '0') {
        result.innerHTML = result.innerHTML.toString().slice(0, -1) + this.textContent;
        return result.innerHTML;
    }
    functionLenght();
    result.innerHTML += this.textContent;
}

function functionLenght() {
    if (result.innerHTML.length >= 12) {
        location.reload();
    }
}


function operate() {
    if (result.innerHTML === '0' && this.textContent === '-') {
        result.innerHTML = '-';
        return;
    } else if (result.innerHTML === '0') {
        return;
    }

    if (mathSign.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = result.innerHTML;
    mathSign.innerHTML = this.textContent;
    result.innerHTML = '';
}



function showResult() {
    if (previousNumber.innerHTML === '0' || result.innerHTML === '0') return;
    if (previousNumber.innerHTML === '' || result.innerHTML === '') return;

    let a = Number(result.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            resultTwo = a + b;
            console.log(resultTwo);
            break;
        case '-':
            resultTwo = b - a;
            console.log(resultTwo);
            break;
        case '×':
            resultTwo = a * b;
            console.log(resultTwo);
            break;
        case '÷':
            resultTwo = b / a;
            console.log(resultTwo);
            break;
    }


    result.innerHTML = resultTwo;
    previousNumber.innerHTML = '0';
    mathSign.innerHTML = '';

}




operationButtons.forEach((button) => button.addEventListener('click', operate))
equalBtn.addEventListener('click', showResult);
numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

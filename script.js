let result = document.querySelector('.result');
let input = document.querySelector('.input');
let slicedResult;
//Buttons
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');



window.onload = function () {
    result.innerHTML = "0";
    input.innerHTML = "0";
}

//Clear button
clearBtn.addEventListener('click', () => {
    result.innerHTML = "0";
    input.innerHTML = "0";
})

//Delete button
deleteBtn.addEventListener('click', () => {
    result.innerHTML = result.innerHTML.toString().slice(0, -1);
    resultText = result.textContent;
    resultZero();
})

//Display 0 if all numbers are removed by delete button
function resultZero() {
    if (result.textContent == '') {
        result.innerHTML = 0;
    }
}

function displayNumbers() {
    if (this.textContent === '.' && result.innerHTML.includes('.')) return;
    if (this.textContent === '.' && result.innerHTML === '.') return result.innerHTML = '.0';
    if (this.textContent === '.' && result.innerHTML === '0') {
        return result.innerHTML = '0.';
    }
    if (result.innerHTML === '0') {
        result.innerHTML = result.innerHTML.toString().slice(0, -1) + this.textContent;
        return result.textContent;
    }

    // if (result.innerHTML === '0') return result.innerHTML = this.textContent;
    result.innerHTML += this.textContent;
}


function operate() {

}

function showResult() {

}



operationButtons.forEach((button) => button.addEventListener('click', operate))
equalBtn.addEventListener('click', showResult);
// clearBtn.addEventListener('click', clearScreen);
numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})
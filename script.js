let result = document.querySelector('.result');
let clearBtn = document.querySelector('.clearBtn');
let deleteBtn = document.querySelector('.deleteBtn');
let slicedResult;


window.onload = function () {
    result.innerHTML = 0;
}

//Clear button
clearBtn.addEventListener('click', () => {
    result.innerHTML = 0;
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


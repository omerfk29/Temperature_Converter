const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");
const clearButton = document.getElementById("clear");
const changeFrom = document.getElementById("unit-from");
const changeTo = document.getElementById("unit-to");


function noInput() {
    if(input.value === "") {
        alert("You gotta enter a number!")
        result.innerText = "";
        result.style.display = "none";
    } else {
        result.innerText = `${input.value} is ${calculateNumber()} celsius`;
        result.style.display = "block";
    }
}

function calculateNumber() {
    let fahrenheit = parseFloat(input.value)
    return Math.floor((fahrenheit - 32) * (5/9));
}

function hideResult() {
    if(input.value === "") {  
        result.style.display = "none";  
    }
}

function clearInput() {
    input.value = "";
    return result.style.display = "none";
}

clearButton.addEventListener("click", clearInput);
input.addEventListener("input", hideResult);
button.addEventListener("click", noInput);
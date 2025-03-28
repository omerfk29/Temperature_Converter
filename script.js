const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");


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

button.addEventListener("click", noInput);

function calculateNumber() {
    let fahrenheit = parseFloat(input.value)
    return Math.floor((fahrenheit - 32) * (5/9));
}

function hideResult() {
    if(input.value === "") {  
        result.style.display = "none";  
    }
}

input.addEventListener("input", hideResult);
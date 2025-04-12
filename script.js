const input = document.getElementById("input");
const convertButton = document.getElementById("button");
const result = document.getElementById("result");
const clearButton = document.getElementById("clear");
const changeFrom = document.getElementById("unit-from");
const changeTo = document.getElementById("unit-to");
const body = document.querySelector("body");


function convertCalculator() {
    const conversions = {
        "FtoC": convertFtoC,
        "CtoF": convertCtoF,
        "FtoK": convertFtoK,
        "KtoF": convertKtoF,
        "CtoK": convertCtoK,
        "KtoC": convertKtoC,
    }

   const conversionKey = `${changeFrom.value}to${changeTo.value}`;
   
   if (conversions[conversionKey] && input.value > 0) {
    const resultValue = conversions[conversionKey](parseFloat(input.value));
    result.style.display = "block";
    result.innerText = `The converted temp is: ${resultValue} ${changeTo.options[changeTo.selectedIndex].text}.`;
   } else {
    result.style.display = "none";
   }
}

function convertFtoC(F) {
    return Math.floor((F - 32) * 5 / 9);
}

function convertCtoF(C) {
    return Math.floor((C * 9 / 5) + 32);
}

function convertFtoK(F) {
    return Math.floor((5 / 9 * (F - 32) + 273.15));
}

function convertKtoF(K) {
    return Math.floor((9 / 5 * (K - 273.15) + 32));   
}

function convertCtoK(C) {
    return Math.floor((C + 273.15));
}

function convertKtoC(K) {
    return Math.floor((K - 273.15));
}

function noInput() {
        if(input.value === "") {
            alert("You gotta enter a number!")
            result.innerText = "";
            result.style.display = "none";
        }
    }

function hideResult() {
    if(input.value > "0") {  
        result.style.display = "block";
    }
}

function clearInput() {
    if(input.value > "0") {
         result.style.display = "none";
         input.value = " ";
    }
}

clearButton.addEventListener("click", clearInput);
input.addEventListener("keydown", hideResult);
convertButton.addEventListener("click", function() {
    noInput();            
    convertCalculator();  
});
input.addEventListener("keyup", convertCalculator);
let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (!isNaN(lastChar) || lastChar === '.') {
        display.value += operator;
    }
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function appendValue(value) {
    if (value === '+/-') {
        display.value = display.value ? -parseFloat(display.value) : "";
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

("keydown", function(event) {
    let key = event.key;
    if (/^[0-9.+\-*/%]/.test(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

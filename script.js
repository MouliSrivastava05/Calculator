function calc(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calcResult() {
    try {
        document.getElementById("display").value = new Function("return " + document.getElementById("display").value)();
    } catch {
        document.getElementById("display").value = "Error";
    }
}
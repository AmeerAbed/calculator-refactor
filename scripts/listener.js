function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = (document.querySelector("#options").value);
    var calculate;
    if (op == "add") {
        calculate = a + b;
    }
    else if (op == "min") {
        calculate = a - b;
    }
    else if (op == "div") {
        calculate = a / b;
    }
    else if (op == "mul") {
        calculate = a * b;
    }
    function clear(event) {
        document.getElementById("value1").value = "";
        document.getElementById("value2").value = "";
    }
    
    document.querySelector("#result").innerHTML = calculate;

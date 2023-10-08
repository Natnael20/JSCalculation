function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");


    if(num1 == "" || num2 == "") {
        result.innerHTML = "Please enter both numbers.";
        return;
    }
    
    let multiply = parseInt(num1) * parseInt(num2);

    result.innerText = multiply;
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let divide;

    if (num1 === "" || num2 === "") {
        result.innerHTML = "Please enter both numbers.";
        return;
    }

    if(num2 == 0) {
        result.innerHTML = "Cannot Divide By Zero";
    } 

    else {
        divide = parseFloat(num1) / parseFloat(num2);
        result.innerHTML = divide;
    }



}
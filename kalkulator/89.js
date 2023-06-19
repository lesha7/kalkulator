function add() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").value = result;
}
 
function sub() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").value = result;
}
 
function mul() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").value = result;
}
 
function div() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").value = result;
}
 
function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}
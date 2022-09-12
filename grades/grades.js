let calculateButton = document.getElementById("calculateButton");
let calculateValues = document.getElementById("gradeslabel");
let gpaDisp = document.getElementById("gpa");
let gpa;

window.onload = function loading() {
    window.alert("0.01");
}

function checkGrades() {
    let value = calculateValues.value();
    window.alert(value);
    if (value == "A") {
        gpa = 4;
    }

    gpaDisp.innerHTML = gpa;

}
let calculateButton = document.getElementById("calculateButton");
let calculateValues = document.getElementById("gradeslabel");
let gpaDisp = document.getElementById("gpa");
let gpa;

window.onload = function loading() {
    window.alert("0.03");
}

function checkGrades() {
    window.alert("In checkGrades function")
    let value = calculateValues.options[calculateValues.selectedIndex].text;
    window.alert(value);
    if (value == "A") {
        gpa = 4;
    }

    gpaDisp.innerHTML = gpa;

}
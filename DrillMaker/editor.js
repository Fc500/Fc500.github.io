/* VARIABLES */
//DOM Elements

const drillTitleDisp = document.getElementById("title");


//Other

let drillTitle;

window.onload = function loading() {
    window.alert("0.01");
    drillTitle = window.prompt("What is the title of your drill?", "My Awesome Drill");
    drillTitleDisp.innerHTML = drillTitle;
}
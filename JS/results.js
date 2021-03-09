var customTitle = sessionStorage.getItem("title");

function setTitle() {
  document.getElementById("head").innerHTML = customTitle;
}

var x = document.getElementById("get").innerHTML;
function myFunction() {
  document.getElementById("testy").innerHTML = x;
}

function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

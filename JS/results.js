var customTitle = sessionStorage.getItem("title");

function setTitle() {
  document.getElementById("head").innerHTML = customTitle;
}

var x = document.getElementById("get").innerHTML;
function myFunction() {
  document.getElementById("testy").innerHTML = x;
}

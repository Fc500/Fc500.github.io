var customTitle = sessionStorage.getItem("title");

function setTitle() {
  document.getElementById("head").innerHTML = customTitle;
}

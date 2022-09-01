// Player

window.onload = function loading() {
  window.alert("v0.03");
}


function navbarFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function switchFunction(chosenSection) {
    let sections = document.getElementsByClassName("section");
    let sidenavSections = document.getElementsByClassName("navChild");

    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        sidenavSections[i].style.fontWeight = "normal";   
        sections[i].classList.remove("active");
   
    } 
    sections[chosenSection].classList.add("active");
    sections[chosenSection].style.display = "block";
    sidenavSections[chosenSection].style.fontWeight = "bold";
}
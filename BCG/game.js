// Player

window.onload = function loading() {
  window.alert("v0.10");
}

// Variables

let scoutResults = document.getElementById("scoutResults");

let playerTitle = "";
let playerCardInfo = "<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='img_avatar.png' alt='Avatar' style='width:300px;height:300px;'></div><div class='flip-card-back'><h1></h1> <p>Architect & Engineer</p> <p>We love that guy</p></div></div></div>";

function scoutPlayers() {
  window.alert("Starting Test");
  const cardBox = document.createElement("div"); 
  createPlayerCard.innerHTML = playerCardInfo;
  scoutResults.appendChild(cardBox);
  window.alert("Test Complete");
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
        sidenavSections[i].classList.remove("active");
   
    } 
    sidenavSections[chosenSection].classList.add("active");
    sections[chosenSection].style.display = "block";
    sidenavSections[chosenSection].style.fontWeight = "bold";
}
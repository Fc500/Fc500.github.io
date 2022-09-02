// Player

window.onload = function loading() {
  window.alert("v0.15");
}

// Variables

let scoutResults = document.getElementById("scoutResults");

let playerTitle = "";
//functions 

function generateCard() {
  var firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "David", "Elizabeth"];
  var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis"];
  let fnr = Math.floor(Math.random() * firstNames.length);
  let lnr = Math.floor(Math.random() * lastNames.length);
  let chosenName = firstNames[fnr] + " " + lastNames[lnr];
  return chosenName;

}

function scoutPlayers() {
  const cardBox = document.createElement("div"); 
  let cardName = generateCard();
  window.alert(cardName);
  cardBox.innerHTML = `<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='http://www.conn-selmer.com/application/files/3615/3307/6834/baritone-band-instruments.jpg' alt='Avatar' style='width:200px;height:240px;'></div><div class='flip-card-back'><h1>${cardName.toString()}</h1> <p>Architect & Engineer</p> <p>We love that guy</p></div></div></div>`;
  scoutResults.appendChild(cardBox);
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
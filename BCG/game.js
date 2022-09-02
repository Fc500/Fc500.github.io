// Player

window.onload = function loading() {
  window.alert("v0.16");
}

// Variables

let scoutResults = document.getElementById("scoutResults");

//functions 

function generateCardName() {
  var firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "David", "Elizabeth"];
  var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis"];
  let fnr = Math.floor(Math.random() * firstNames.length);
  let lnr = Math.floor(Math.random() * lastNames.length);
  chosenName = firstNames[fnr] + " " + lastNames[lnr];
  return chosenName;

}

function generateRandom(min, max) {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}

function generateCardValues(name) {
  let seed = generateRandom(100, 1000);
  let seedPrice = 0;
  let splitSeed = String(seed).split("").map((seed)=>{
    return Number(seed);
  })

  if (splitSeed[0] >= 0 && splitSeed[0] < 5) {
    seedPrice = 100;
  } else {
    seedPrice = 200;
  }

  let seedOdds = splitSeed[1];

  let seedSkill = splitSeed[2];

  return [seedPrice, seedOdds, seedSkill];
}

function scoutPlayers() {
  const cardBox = document.createElement("div"); 
  let cardName = generateCardName();
  let generatedValues = generateCardValues(cardName);
  
  let cardPrice = generatedValues[0];
  let cardOdds = generatedValues[1];
  let cardSkill = generatedValues[2];

  window.alert(cardName);
  cardBox.innerHTML = `<div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='http://www.conn-selmer.com/application/files/3615/3307/6834/baritone-band-instruments.jpg' alt='Avatar' style='width:200px;height:240px;'></div><div class='flip-card-back'><h1>$ ${cardName.toString()}</h1> <p>${cardPrice.toString()}</p> <p>Rarity: ${cardOdds.toString()}</p><p>Skill: ${cardSkill.toString()}</p></div></div></div>`;
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
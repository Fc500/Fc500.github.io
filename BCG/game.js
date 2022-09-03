// Player Variables

let money = 10000;
let influence = 100;

const moneyDisp = document.getElementById("money");
const influenceDisp = document.getElementById("influence");
const bandDisp = document.getElementById("bandMembers");

// Player

let playerBand = [];
let playerBandIndex = 0;

window.onload = function loading() {
  window.alert("v0.22");
  moneyDisp.innerHTML = money;
  influenceDisp.innerHTML = influence;

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
  let splitSeed = String(seed).split("").map((seed)=>{
    return Number(seed);
  })

  let seedPrice = splitSeed[0] * 250;

  let seedOdds = splitSeed[1] * 11;

  let seedSkill = splitSeed[2] * 11;

  return [seedPrice, seedOdds, seedSkill, seed];

}

function scoutNewPlayer(cardArray) {

  //let name = cardArray[0];
  let price = cardArray;
  //let odds = cardArray[2];
  //let skill = cardArray[3];
  //let seed = cardArray[4];

  if (money >= price) {
    window.alert("success");
    let cardToRemove = document.getElementById(seed);
    cardToRemove.remove();
    money -= price;
    moneyDisp.innerHTML = money;

    playerBand.push(seed = {
      instName: name,
      instPrice: price,
      instOdds: odds,
      instSkill: skill
    });

    bandDisp.innerHTML += " " + playerBandIndex;
    playerBandIndex++;
  } else {
    window.alert("Not enough money!");
  }

}

function scoutPlayers(amount) {
  let multiplier = amount * 10;
  window.alert(multiplier);
  if (influence >= multiplier) {
    window.alert("Inside Function 1");

    for (let i = 0; i < amount; i++) {
      window.alert("Amount: " + amount);
      const cardBox = document.createElement("div"); 
      let cardName = generateCardName();
      let generatedValues = generateCardValues(cardName);
  
      let cardPrice = generatedValues[0];
      let cardOdds = generatedValues[1];
      let cardSkill = generatedValues[2];
      let cardSeed = generatedValues[3];

      //let cardValues = [cardName, cardPrice, cardOdds, cardSkill, cardSeed];

      window.alert(cardName);
      cardBox.innerHTML = `<div class='flip-card' id='${cardSeed.toString()}'><div class='flip-card-inner'><div class='flip-card-front'><img src='http://www.conn-selmer.com/application/files/3615/3307/6834/baritone-band-instruments.jpg' alt='Avatar' style='width:200px;height:240px;'></div><div class='flip-card-back'><h1>${cardName.toString()}</h1> <p>$${cardPrice.toString()}</p> <p>Rarity: ${cardOdds.toString()}%</p><p>Skill Level: ${cardSkill.toString()}/99</p><button onclick='scoutNewPlayer(${cardPrice})'>Scout</button></div></div></div>`;
      scoutResults.appendChild(cardBox);
    }
    influence -= multiplier;
    influenceDisp.innerHTML = influence;
  }
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
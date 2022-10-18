// Variables

let money = 100000;
let influence = 100;

const moneyDisp = document.getElementById("money");
const influenceDisp = document.getElementById("influence");
const bandDisp = document.getElementById("bandMembers");
const scoutResults = document.getElementById("scoutResults");

// Player

let playerBand = [];
let instrumentsAvalible = ["Recorder", "Bells"];
var firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "David", "Elizabeth", "John", "Adam"];
var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Gardner", "Trench"];

window.onload = function loading() {
    window.alert("v0.40");
    moneyDisp.innerHTML = numFormatter(money);
    influenceDisp.innerHTML = influence;

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
  
  function generateCardValues() {
    let seed = generateRandom(1000, 10000);
    console.log(seed);
    let splitSeed = String(seed).split("").map((seed)=>{
      return Number(seed);
    })
    
    let fnr = Math.floor(Math.random() * firstNames.length);
    let lnr = Math.floor(Math.random() * lastNames.length);
    let seedName = firstNames[fnr] + " " + lastNames[lnr];
  
  
    let seedPotential = splitSeed[0];
    let seedPotentialDisp;
    let seedSkill = splitSeed[1];
    let seedOdds = splitSeed[2];
    let seedPrice = splitSeed[3];
    let seedInstInt = Math.floor(Math.random() * instrumentsAvalible.length);
    let seedInst = instrumentsAvalible[seedInstInt];
  
    const seedTotal = seedPotential + seedSkill + seedOdds + seedPrice;
  
  
    if (seedTotal >= 0 && seedTotal <= 16) {
      seedPotential = 1;
      seedPotentialDisp = "&#9733; &#9734; &#9734; &#9734;";
      seedSkill *= 4;
      seedOdds = "Common";
      seedPrice *= 1400;
    } else if (seedTotal >= 17 && seedTotal <= 28) {
      seedPotential = 2;
      seedPotentialDisp = "&#9733; &#9733; &#9734; &#9734;";
      seedSkill *= 7;
      seedOdds = "Uncommon";
      seedPrice *= 2500;
  
    }  else if (seedTotal >= 29 && seedTotal <= 34) {
      seedPotential = 3;
      seedPotentialDisp = "&#9733; &#9733; &#9733; &#9734;";
      seedSkill *= 9;
      seedOdds = "Rare";
      seedPrice *= 3700;
    } else if (seedTotal <= 36) {
      seedPotential = 4;
      seedPotentialDisp = "&#9733; &#9733; &#9733; &#9733;";
      seedSkill *= 10;
      seedOdds = "Legendary";
      seedPrice *= 4200;
    }
  
    console.log("split Seed (0): " + splitSeed[0]);
    console.log("split Seed (1): " + splitSeed[1]);
    console.log("split Seed (2): " + splitSeed[2]);
    console.log("split Seed (3): " + splitSeed[3]);
    console.log("seed price: " + seedPrice);
    console.log("seed skill: " + seedSkill);
    console.log("seed potential: " + seedPotential);
    console.log("seed Odds: " + seedOdds);
  
  
  
    return [seedName, seedPrice, seedOdds, seedSkill, seedPotential, seedPotentialDisp, seedInst, seed];
  
  }
  
  
  
  
  function scoutNewPlayer(name, price, seed, skill, odds, potential, potentialDisp, inst) {
    console.log(name);
  
    if (money >= price) {
    
      window.alert("success!")
      var cardToRemove = document.getElementById(seed);
      cardToRemove.remove();
      money -= price;
      moneyDisp.innerHTML = numFormatter(money);
      bandDisp.innerHTML += `<tr><td id="${seed}">${name}</td><td>${skill}</td><td>${odds}</td><td>${potentialDisp}</td><td>${inst}</td></tr>`;
  
      playerBand.push({
        "name": name,
        "skill": skill,
        "odds": odds,
        "potential": potential,
        "inst": inst,
      });
  
      console.log(playerBand);
  
  
    } else {
      window.alert("Not enough money!");
    } 
  
  }
  
  function scoutPlayers(amount) {
    scoutResults.innerHTML = "";
      for (let i = 0; i < amount; i++) {
        const cardBox = document.createElement("div"); 
        let generatedValues = generateCardValues();
  
  
        const cardName = generatedValues[0]
        const cardPrice = generatedValues[1];
        const cardOdds = generatedValues[2];
        const cardSkill = generatedValues[3];
        const cardPotential = generatedValues[4];
        const cardPotentialDisp = generatedValues[5];
        const cardInst = generatedValues[6];
        const cardSeed = generatedValues[7];
  
        cardBox.innerHTML = `<div id="${cardSeed.toString()}">
        <div class="card-body">
          <div>
            <h1>${cardName.toString()}</h1>
            <h3>$${numFormatter(cardPrice.toString())}</h3>
                <div style="width: 75%;">
                    <p class="card-stats">Rarity: ${cardOdds.toString()}</p>
                    <p class="card-stats">Level: ${cardSkill.toString()} / 99</p>
                    <p class="card-stats">Potential: ${cardPotentialDisp}</p>
                    <p class="card-stats">Instrument: ${cardInst}</p>
                </div>
            <button onclick="scoutNewPlayer('${cardName}', ${cardPrice}, ${cardSeed}, ${cardSkill}, '${cardOdds}', ${cardPotential}, '${cardPotentialDisp}', '${cardInst}')" class="card-button poppins">Scout</button>
          </div>
        </div>`
        scoutResults.appendChild(cardBox);
      }
  }

function loadingResults(amount) {
    let multiplier = amount * 10;
    if (influence >= multiplier) {
      scoutResults.innerHTML = "<div class='spinner'></div><br><p>Scouting...</p>";
      influence -= multiplier;
      influenceDisp.innerHTML = influence;
      setTimeout(function() {
        scoutPlayers(amount);
      }, 1500);
    }
  }


function switchFunction(chosenSection) {
    let sections = document.getElementsByTagName("section");
  
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";     
    } 
    sections[chosenSection].style.display = "block";
  }

  function numFormatter(num) {
    if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if(num > 1000000 && num < 1000000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if(num > 999999999){
      return (num/1000000000).toFixed(1) + 'B'; // convert to M for number from > 1 billion 
    } else if(num < 900){
      return num; // if value < 1000, nothing to do
    }
  }
  

  const navItems = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        for(let j = 0; j < navItems.length; j++) 
            navItems[j].classList.remove('active');
        
        navItems[i].classList.add('active');
    });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
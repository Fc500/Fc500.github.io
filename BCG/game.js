// Player Variables

// https://codepen.io/rachsmith/embed/PWxoLN?height=316&theme-id=0&default-tab=result

// https://codepen.io/CTC/embed/RObOPd?height=316&theme-id=0&default-tab=result

// https://codepen.io/mburakerman/embed/roJmaZ?height=316&theme-id=0&default-tab=result

let money = 10000;
let influence = 100;

const moneyDisp = document.getElementById("money");
const influenceDisp = document.getElementById("influence");
const bandDisp = document.getElementById("bandMembers");

// Player

let playerBand = [];
let playerBandIndex = 0;

window.onload = function loading() {
  window.alert("v0.27");
  moneyDisp.innerHTML = numFormatter(money);
  influenceDisp.innerHTML = influence;

}

// Variables

let scoutResults = document.getElementById("scoutResults");

//functions 


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
  let seed = generateRandom(100, 1000);
  let splitSeed = String(seed).split("").map((seed)=>{
    return Number(seed);
  })
  
  var firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "David", "Elizabeth", "John", "Adam"];
  var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Gardner", "Trench"];
  let fnr = Math.floor(Math.random() * firstNames.length);
  let lnr = Math.floor(Math.random() * lastNames.length);
  let seedName = firstNames[fnr] + " " + lastNames[lnr];


  let seedPrice = splitSeed[0] * 250;

  let seedOdds = Math.floor(splitSeed[1] * 9.25);

  let seedSkill = Math.floor(splitSeed[2] * 9.25);


  return [seedName, seedPrice, seedOdds, seedSkill, seed];

}

function scoutNewPlayer(name, price, seed, skill, odds) {
  console.log(name);

  if (money >= price) {
    window.alert("success");
    var cardToRemove = document.getElementById(seed);
    cardToRemove.remove();
    money -= price;
    moneyDisp.innerHTML = numFormatter(money);
    bandDisp.innerHTML += `<tr><td></td><td>${name}</td><td>${skill}</td><td>${odds}</td></tr>`;

    playerBand.push({
      "name": name,
      "seed": seed,
      "skill": skill,
      "odds": odds,
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


      let cardName = generatedValues[0]
      let cardPrice = generatedValues[1];
      let cardOdds = generatedValues[2];
      let cardSkill = generatedValues[3];
      let cardSeed = generatedValues[4];

      console.log(typeof cardName);

      cardBox.innerHTML = `<div class="player-card" id="${cardSeed.toString()}">
      <div class="player-card-inner">
        <div class="player-card-front">
          <img src="band.PNG" width="200" height="240"/>
        </div>
        <div class="player-card-back">
          <h1>${cardName.toString()}</h1>
          <h2>$${cardPrice.toString()}</h2>
            <p>Rarity: ${cardOdds.toString()}%</p>
            <p>Skill Level: ${cardSkill.toString()}/99</p>
            <p>Potential: </p>
          <button onclick="scoutNewPlayer('${cardName}', ${cardPrice}, ${cardSeed}, ${cardSkill}, ${cardOdds})">Scout</button>
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
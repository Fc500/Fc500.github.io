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
  window.alert("v0.23.4s");
  moneyDisp.innerHTML = money;
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
    moneyDisp.innerHTML = money;

    bandDisp.innerHTML += `<tr><td>${name}</td><td>${skill}</td><td>${odds}</td></tr>`;


  } else {
    window.alert("Not enough money!");
  } 

}


function scoutPlayers(amount) {
  let multiplier = amount * 10;
  window.alert(multiplier);
  if (influence >= multiplier) {
    for (let i = 0; i < amount; i++) {
      const cardBox = document.createElement("div"); 
      let generatedValues = generateCardValues();


      let cardName = generatedValues[0]
      let cardPrice = generatedValues[1];
      let cardOdds = generatedValues[2];
      let cardSkill = generatedValues[3];
      let cardSeed = generatedValues[4];

      console.log(typeof cardName);

      cardBox.innerHTML = `<div class='flip-card' id='${cardSeed.toString()}'><div class='flip-card-inner'><div class='flip-card-front'><img src='http://www.conn-selmer.com/application/files/3615/3307/6834/baritone-band-instruments.jpg' alt='Avatar' style='width:200px;height:240px;'></div><div class='flip-card-back'><h1>${cardName.toString()}</h1> <p>$${cardPrice.toString()}</p> <p>Rarity: ${cardOdds.toString()}%</p><p>Skill Level: ${cardSkill.toString()}/99</p><button onclick="scoutNewPlayer('${cardName}', ${cardPrice}, ${cardSeed}, ${cardSkill}, ${cardOdds})">Scout</button></div></div></div>`;
      scoutResults.appendChild(cardBox);
    }
    influence -= multiplier;
    influenceDisp.innerHTML = influence;
  }
}


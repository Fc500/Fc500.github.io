// Player Variables

// https://codepen.io/rachsmith/embed/PWxoLN?height=316&theme-id=0&default-tab=result

// https://codepen.io/CTC/embed/RObOPd?height=316&theme-id=0&default-tab=result

// https://codepen.io/mburakerman/embed/roJmaZ?height=316&theme-id=0&default-tab=result

let money = 100000;
let influence = 100;

const moneyDisp = document.getElementById("money");
const influenceDisp = document.getElementById("influence");
const bandDisp = document.getElementById("bandMembers");

// Player

let playerBand = [];
const lockedVenues = document.getElementsByClassName("locked-place");
let instrumentsAvalible = ["Recorder", "Bells"];
let venuesAvalible = ["Field"];
var firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "David", "Elizabeth", "John", "Adam"];
var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Gardner", "Trench"];


let playerBandIndex = 0;

window.onload = function loading() {
  window.alert("v0.31");
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
    makeAlert('Player Scouted!','success');
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

      cardBox.innerHTML = `<div class="player-card" id="${cardSeed.toString()}">
      <div class="player-card-inner">
        <div class="player-card-front">
          <img src="band.PNG" width="200" height="240"/>
        </div>
        <div class="player-card-back">
          <h1>${cardName.toString()}</h1>
          <h2>$${numFormatter(cardPrice.toString())}</h2>
            <p>Rarity: ${cardOdds.toString()}</p>
            <p>Level: ${cardSkill.toString()} / 99</p>
            <p>Potential: ${cardPotentialDisp}</p>
            <p>Instrument: ${cardInst}</p>
          <button onclick="scoutNewPlayer('${cardName}', ${cardPrice}, ${cardSeed}, ${cardSkill}, '${cardOdds}', ${cardPotential}, '${cardPotentialDisp}', '${cardInst}')">Scout</button>
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

var close = document.getElementsByClassName("alert_closebtn");

function makeAlert(message, type) {
	const add = document.getElementById("alerts");
  let id = generateRandom(1, 100000);
  const messageDisp = `<div class="alert ${type}" id="${id}">
  <span class="alert_closebtn" onclick="closeAlert(${id})">&times;</span>  
  <strong>${message}</strong>
</div>`;

add.innerHTML += messageDisp;

console.log("type of DIV: " + typeof id);

setTimeout(function() {
  let alert = document.getElementById(id);
  alert.style.opacity = "0";
  setTimeout(function() {
    alert.style.display = "none";
    alert.remove();
  }, 600);
  
}, 7500);

}

function closeAlert(id) {
  let alert = document.getElementById(id);
  alert.style.opacity = "0";
  setTimeout(function(){ 
    alert.style.display = "none"; 
    alert.remove();
    console.log(id);
  }, 600);
}




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function concertSelection(step) {

  switch (step) {
    case 0:
      if (venuesAvalible[slideIndex - 1]) {
        let chosenVenue = venuesAvalible[slideIndex - 1];
      }
      break;
  
    default:
      break;
  }

  
    
}
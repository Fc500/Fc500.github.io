window.alert("v3 - 0.20");
document.getElementsByClassName("researchBox")[0].style.display = "block";
    
    
/* MODAL */

// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//variables
let money = 100000;
let temp = 60;
let year = 2022;
let researchPoints = 50;
let mps = 1000;
let sectionOfText = 0;
let modalText = document.getElementById("modal-text");

//DOM elements
let rpDisplay = document.getElementById("rpDisplay");
let moneyDisplay = document.getElementById("moneyDisplay");
let yearDisplay = document.getElementById("yearDisplay");
let tempDisplay = document.getElementById("tempDisplay");

// MAIN OBJECTS

let researcher = {
  owned: 2,
  cost: 1000,
  output: 0.1,
  amount: document.getElementById("researcherOwned"),
  figure: document.getElementById("researcherPrice"),
};

let windmill = {
  owned: 0,
  cost: 1500,
  output: 50,
  amount: document.getElementById("windmillOwned"),
  figure: document.getElementById("windmillPrice"),
}

let solarFarm = {
  owned: 0,
  cost: 5000,
  output: 100,
  amount: document.getElementById("solarOwned"),
  figure: document.getElementById("solarPrice"),
}

let hydroPlant = {
  owned: 0,
  cost: 25000,
  output: 1000,
  amount: document.getElementById("hydroOwned"),
  figure: document.getElementById("hydroPrice"),
}
// UPGRADES

var findings = {
    windmill: {
        cost: 100,
        research: 5,
        bought: false,
        button: document.getElementsByClassName("findingsButton"[0]),
    },
    solar: {
      cost: 1500,
      research: 25,
      bought: false,
      button: document.getElementsByClassName("findingsButton"[1]),
    },
    hydro: {
      cost: 12500,
      research: 50,
      bought: false,
      button: document.getElementsByClassName("findingsButton"[2]),
  },
}

// Number converter function
function numFormatter(num) {
    if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if(num > 1000000 && num < 1000000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if(num > 999999999){
      return (num/1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion 
    } else if(num < 900){
      return num; // if value < 1000, nothing to do
    }
  }

// buy functions

function buyThing(thing) {
  if (thing.cost < money) {
    money -= thing.cost;
    thing.owned += 1;
    moneyDisplay.innerHTML = numFormatter(money);
    thing.cost *= 1.2;
    thing.amount.innerHTML = numFormatter(thing.owned);
    thing.figure.innerHTML = numFormatter(thing.cost);
  };
} 


function buyDiscovery(thing) {
    if (thing.cost < money && thing.research < researchPoints) {
      money -= thing.cost;
      researchPoints -= thing.research;
      rpDisplay.innerHTML = researchPoints;
      moneyDisplay.innerHTML = money;
      thing.bought = true;
      thing.button.innerHTML = "BOUGHT";
      thing.button.onclick = "";
    };
  } 
// Checking function

function checkForUpgrades() {
  // Updating UI
    if (findings.windmill.bought == true) {

        document.getElementById('windmills').style.display = 'block';
    }

    if (findings.solar.bought == true) {
        document.getElementById('solars').style.display = 'block';
    }

    if (findings.hydro.bought == true) {
      document.getElementById('hydros').style.display = 'block';
  }

  // Updating discoveries
    if (researchPoints >= 5) {
          document.getElementById('windmillUpgrade').style.display = 'block';
    }  
    if (researchPoints >= 25) {
          document.getElementById('solarUpgrade').style.display = 'block';
    }

    if (researchPoints >= 50) {
      document.getElementById('hydroUpgrade').style.display = 'block';
}

}
//gain functions
function raiseItemsSecond() {
  researchPoints += researcher.output * researcher.owned;
  year += 1;
  yearDisplay.innerHTML = year;
  temp += 0.067;
  tempDisplay.innerHTML = temp.toFixed(2);
  money += windmill.output * windmill.owned;
  rpDisplay.innerHTML = researchPoints.toFixed(2);
  moneyDisplay.innerHTML = numFormatter(money);
  checkForUpgrades();
}

function changeText() {
  let nextButton = document.getElementById("nextButton");
  switch (sectionOfText) {
    case 0:
      modalText.innerHTML = "You have been put in charge of a new company! What shall it be called?<br><input id='name' type='text' value='Climate' name='playerName'required ><b><label for='playerName'> + INC</label></b> ";
      sectionOfText++;
      break;
    case 1:
      let playerName = document.getElementById("name").value;
      modalText.innerHTML = "Hello <b>" + playerName + " INC</b>! You have been tasked by the government to help fix the issue of climate change!";
      sectionOfText++;
      break;
    case 2:
      modalText.innerHTML = "You have several researchers and 10,000 dollars in funds to aid you. Good Luck! <br>- The Government.";
      nextButton.addEventListener("click", function() {
        modal.style.display = 'none';
        var updateGameSecond = setInterval(raiseItemsSecond, 1000);
      });
      nextButton.innerHTML = "CLOSE";
  }
} 

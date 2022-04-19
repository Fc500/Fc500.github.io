window.alert("v3 - 0.32");
document.getElementsByClassName("researchBox")[0].style.display = "block";


// import { achievementUnlocked } from "./achievements";
  

// CODE COURTESY OF SOMEONE ON CODEPEN

function achievementUnlocked(achievement){
  var hasClass = $('.ach').hasClass('achieved');
  if (hasClass) return;
  $('.title').html("Achievement Unlocked!");
  $('.detail').html(achievement.title);
  $('.ach').addClass("achieved");
  setTimeout(function(){
    $('.ach').removeClass("achieved");
  },5000)
  addAchievement(achievement);
  achievement.got = true;
}

    
/* MODAL */

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
window.onload = function() {
  modal.style.display = "block";
}


function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} */

//variables
let money = 100000;
let temp = 60;
let tempIncrease = 0.067;
let year = 2010;
let researchPoints = 50;
let mps = 0;
let sectionOfText = 0;
let month = 0;
let windmillps = 0;
let solarps = 0;
let hydrops = 0;
let modalText = document.getElementById("modal-text");
var root = document.querySelector(':root');

//DOM elements
var rpDisplay = document.getElementById("rpDisplay");
var moneyDisplay = document.getElementById("moneyDisplay");
var yearDisplay = document.getElementById("yearDisplay");
var tempDisplay = document.getElementById("tempDisplay");
var findingsArray = document.getElementsByClassName("findings");
var monthDisplay = document.getElementById("monthDisplay");
var mpsDisplay = document.getElementById("mpsDisplay");
var tpsDisplay = document.getElementById("tpsDisplay");

var researchSection = document.getElementById("researchObj");
var findingsSection = document.getElementById("findingsObj");
var buildingsSection = document.getElementById("buildingsObj");
var achievementsSection = document.getElementById("achievementsObj");

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
        button: findingsArray[0],
        discovery: { 
          title: "Wind technology",
          flavorText: "The power of the air",
        },
    },
    solar: {
      cost: 1500,
      research: 25,
      bought: false,
      button: findingsArray[1],
      discovery: { 
        title: "Solar technology",
        flavorText: "The power of the sun",
      },
    },
    hydro: {
      cost: 12500,
      research: 50,
      bought: false,
      button: findingsArray[2],
      discovery: { 
        title: "Hydroelectric technology",
        flavorText: "The power of the seas",
      },
  },
}

// ACHIEVEMENTS 

var achievementsList = {
  temp1: {
    title: "A warming Earth",
    flavorText: "It's getting quite warm out there...",
    got: false,
  },

  temp2: {
    title: "A globe on fire",
    flavorText: "Things aren't looking so good...",
    got: false,
  },

  temp3: {
    title: "Humanity's failure",
    flavorText: "Despite our best efforts, we have failed...",
    got: false,
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




function addAchievement(achievement) {
  // Create element:
  window.alert("Testing");
  const achBox = document.createElement("div");
  achBox.innerHTML = "<h3>" + achievement.title + "</h3><br><h6><i>" + achievement.flavorText + "</i></h6>";
  achBox.classList.add("achievements");
  // Append to another element:
  achievementsSection.appendChild(achBox);
}

// SIDENAV FUNCTION

function sidenavSwitch(chosenSection) {
  switch (chosenSection) {
    case 1:
      researchSection.style.display = 'block';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      break;
    case 2:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'block';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      break;
    case 3:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'block';
      achievementsSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      break;
    case 4:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'block';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "bold";
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
  } else if (thing.cost > money) {
    window.alert("Not enough money!");
  }
} 


function buyDiscovery(thing) {
    if (thing.cost < money && thing.research < researchPoints) {
      money -= thing.cost;
      researchPoints -= thing.research;
      rpDisplay.innerHTML = researchPoints;
      moneyDisplay.innerHTML = money;
      thing.bought = true;
      thing.button.style.display = "none";
      achievementUnlocked(thing.discovery);
    } else if (thing.cost > money) {
      window.alert("Not enough money!");
    } else if (thing.research > researchPoints) {
      window.alert("Not enough research has taken place!");
    }
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
    if (researchPoints >= 5 && findings.windmill.bought == false) {
      document.getElementById('windmillUpgrade').style.display = 'block';
    } 
    if (researchPoints >= 25 && findings.solar.bought == false) {
      document.getElementById('solarUpgrade').style.display = 'block';
    }

    if (researchPoints >= 50 && findings.hydro.bought == false) {
      document.getElementById('hydroUpgrade').style.display = 'block';
  }

}

function checkForEmpty() {
  if (findings.hydro.bought && findings.solar.bought && findings.windmill.bought) {
    document.getElementsByName('researchNotif')[0].style.display = 'block';
  } else {
    document.getElementsByName('researchNotif')[0].style.display = 'none';
  }
}

//gain functions

function raiseMoney() { 
  if (windmill.owned > 0) {
    windmillps = windmill.owned * windmill.output;
  }

  if (solarFarm.owned > 0) {
    solarps = solarFarm.owned * solarFarm.output;
  }

  if (hydroPlant.owned > 0) {
    hydrops = hydroPlant.owned * hydroPlant.output;
  }

  mps = windmillps + solarps + hydrops;
  money += mps;

}

function raiseItemsSecond() {
  researchPoints += researcher.output * researcher.owned;
  checkForUpgrades();
  rpDisplay.innerHTML = researchPoints.toFixed(2);
  moneyDisplay.innerHTML = numFormatter(money);
  mpsDisplay.innerHTML = "$ " + numFormatter(mps) + " per month";
  checkForEmpty();
}

function raiseYear() {
  year += 1;
  yearDisplay.innerHTML = year;
  temp += tempIncrease;
  tempDisplay.innerHTML = temp.toFixed(2);
  tpsDisplay.innerHTML = tempIncrease.toFixed(2) + "&#176; per year";

}

function raiseTemperature () {
  tempIncrease *= 1.2;
}

function checkForWin() {
  if (temp > 65 && temp < 75) {
    root.style.setProperty('--phthalo-blue', '#CC6300');
    root.style.setProperty('--blue-pigment', '#E36F26');
    root.style.setProperty('--box-shadows', '#E36F2674');
    if (achievementsList.temp1.got == false) {
      achievementUnlocked(achievementsList.temp1);
    }
  } else if (temp > 75) {
    root.style.setProperty('--phthalo-blue', '#BF2237');
    root.style.setProperty('--blue-pigment', '#FF1F2E');
    root.style.setProperty('--box-shadows', '#FF1F2E74');
    if (achievementsList.temp2.got == false) {
      achievementUnlocked(achievementsList.temp2);
    }
  }
}

function raiseMonth() {
  switch (month) {
    case 0: 
      monthDisplay.innerHTML = "January";
      raiseYear();
      month++;
      break;
    case 1:
      monthDisplay.innerHTML = "February";
      month++;
      break;
    case 2:
      monthDisplay.innerHTML = "March";
      month++;
      break;
    case 3:
      monthDisplay.innerHTML = "April";
      month++;
      break;
    case 4:
      monthDisplay.innerHTML = "May";
      month++;
      break;
    case 5:
      monthDisplay.innerHTML = "June";
      month++;
      break;
    case 6:
      monthDisplay.innerHTML = "July";
      month++;
      break;
    case 7:
      monthDisplay.innerHTML = "August";
      month++;
      break;
    case 8:
      monthDisplay.innerHTML = "September";
      month++;
      break;
    case 9:
      monthDisplay.innerHTML = "October";
      month++;
      break;
    case 10:
      monthDisplay.innerHTML = "November";
      month++;
      break;
    case 11:
      monthDisplay.innerHTML = "December";
      month = 0;
      break;
  }
}

function setGameValues() {
  var updateGameSecond = setInterval(raiseItemsSecond, 1000);
  var monthlyUpdates = setInterval(raiseMonth, 500);
  var pentyearlyUpdates = setInterval(raiseTemperature, 30000);
  var endGame = setInterval(checkForWin, 1000);
  var updatePlayerValues = setInterval(raiseMoney, 100);
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
      document.getElementById("playerName").innerHTML = playerName + " INC";
      sectionOfText++;
      break;
    case 2:
      modalText.innerHTML = "You have several researchers and 10,000 dollars in funds to aid you. Good Luck! <br>- The Government.";
      nextButton.addEventListener("click", function() {
        modal.style.display = 'none';
        setGameValues();
      });
      nextButton.innerHTML = "CLOSE";
  }
} 

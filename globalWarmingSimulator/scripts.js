window.alert("v0.92");


// import { achievementUnlocked } from "./achievements";
  

// CODE COURTESY OF SOMEONE ON CODEPEN

function achievementUnlocked(achievement){
  if (achievement.got != true) {
    addAchievement(achievement);
    achievement.got = true;
    var hasClass = $('.ach').hasClass('achieved');
    if (hasClass) return;
      $('.title').html("Achievement Unlocked!");

    $('.detail').html(achievement.title);
    $('.ach').addClass("achieved");
    setTimeout(function(){
      $('.ach').removeClass("achieved");
    },5000)    
  }
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
let money = 3000;
let temp = 57.85;
let tempIncrease = 0.017;
let year = 2010;
let researchPoints = 150;
let popularity = 50;
let influence = 100;
let rps = 0;
let mps = 0;
let mpsTotal = 0;
let mpsNR = 0;
let sectionOfText = 0;
let month = 0;


let windmillps = 0;
let solarps = 0;
let hydrops = 0;
let biomassps = 0;
let geothermalps = 0;

let coalps = 0;
let oilps = 0;
let gasps = 0;
let nukeps = 0;


let achievementsGot = 0;
var modalHeader = document.getElementById("modal-title");
var modalText = document.getElementById("modal-text");
var root = document.querySelector(':root');
let gameStart = false;

//DOM elements
var rpDisplay = document.getElementById("rpDisplay");
var moneyDisplay = document.getElementById("moneyDisplay");
var yearDisplay = document.getElementById("yearDisplay");
var tempDisplay = document.getElementById("tempDisplay");
var findingsArray = document.getElementsByClassName("findings");
var monthDisplay = document.getElementById("monthDisplay");
var mpsDisplay = document.getElementById("mpsDisplay");
var tpsDisplay = document.getElementById("tpsDisplay");
var rpsDisplay = document.getElementById("rpsDisplay");
var popularityDisplay = document.getElementById("popDisplay");
var influenceDisplay = document.getElementById("infDisplay");
let nextButton = document.getElementById("nextButton");
let playerName = "";
var researchItems = document.getElementsByClassName("researchBox");

var researchSection = document.getElementById("researchObj");
var findingsSection = document.getElementById("findingsObj");
var buildingsSection = document.getElementById("buildingsObj");
var achievementsSection = document.getElementById("achievementsObj");
var policiesSection = document.getElementById("polObj");
var changelogSection = document.getElementById("changelogObj");
var upgradesSection = document.getElementsByName("buildingUpgrades")[0];


// INTERVALS 
let updateGameSecond = 0;
let monthlyUpdates = 0;
let pentyearlyUpdates = 0;
let checkForEndGame = 0;
let updatePlayerValues = 0;
let updateNonRenewables = 0;
let updatePlayerPopularity = 0;




// NONRENEWABLE BUILDINGS

let coalPlant = {
  owned: 75,
  cost: 1500,
  output: 10,
  amount: document.getElementById("coalOwned"),
  figure: document.getElementById("coalPrice"),
  popDebuff: 5,
  head: document.getElementById("coal"),
}

let oilPlatform = {
  owned: 45,
  cost: 2000,
  output: 30,
  amount: document.getElementById("oilOwned"),
  figure: document.getElementById("oilPrice"),
  popDebuff: 7,
  head: document.getElementById("oil"),
}


let gasFacility = {
  owned: 40,
  cost: 3000,
  output: 40,
  amount: document.getElementById("gasOwned"),
  figure: document.getElementById("gasPrice"),
  popDebuff: 10,
  head: document.getElementById("naturalGas"),
}

let nuclearPlant = {
  owned: 30,
  cost: 4000,
  output: 75,
  amount: document.getElementById("nukeOwned"),
  figure: document.getElementById("nukePrice"),
  popDebuff: 2,
  head: document.getElementById("nuclearPlant"),
}

// MAIN OBJECTS


let researcher = {
  owned: 2,
  cost: 1000,
  output: 0.1,
  amount: document.getElementById("researcherOwned"),
  figure: document.getElementById("researcherPrice"),
};

let laboratory = {
  owned: 0,
  cost: 50000,
  output: 1,
  amount: document.getElementById("labOwned"),
  figure: document.getElementById("labPrice"),
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

let biomassFarm = {
  owned: 0,
  cost: 100000,
  output: 20000,
  amount: document.getElementById("biomassOwned"),
  figure: document.getElementById("biomassPrice"),
}

let geothermalPlant = {
  owned: 0,
  cost: 1000000,
  output: 50000,
  amount: document.getElementById("geothermalOwned"),
  figure: document.getElementById("geothermalPrice"),
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
  biomass: {
      cost: 75000,
      research: 150,
      bought: false,
      button: findingsArray[3],
      discovery: { 
        title: "Biomass Plants",
        flavorText: "The power of compost",
      },
  },
  
  geothermal: {
      cost: 500000,
      research: 200,
      bought: false,
      button: findingsArray[4],
      discovery: { 
        title: "Geothermal Energy",
        flavorText: "The power of the Earth",
      },
  },
}

var upgrades = {

  windmill1: {
    cost: 10000,
    research: 100,
    bought: false,
    discovery: {
      title: "Steel Blades",
      flavorText: "Stronger blades for more efficient energy collection! (Windmill production x1.5%)",
      buffType: 1,
      buffBuilding: windmill,
      buff: 1.5,
    }
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
  
  temp4: {
    title: "The End of the World",
    flavorText: "The final months of humanity begins in a ruined, scorching world.",
    got: false,
  },
  
  pop1: {
    title: "Against the Public",
    flavorText: "The public seems to be turning against you... might want to watch out!",
    got: false,
  },
  
  pop2: {
    title: "Personal Protection",
    flavorText: "The public seems quite mad with you!",
    got: false,
  },
  
  pop3: {
    title: "A Failing Company",
    flavorText: "Stocks are falling and investors are pulling out!",
    got: false,
  },
  
  pop4: {
    title: "The end of a Company",
    flavorText: "Good one! " + playerName + " INC has caused the public to riot and overthrow you!",
    got: false,
  },
}


// Number converter function
function numFormatter(num) {
    if(num > 999 && num < 1000000){
      return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if(num > 999999 && num < 1000000000){
      return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if(num > 999999999){
      return (num/1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion 
    } else if(num < 900){
      return num.toFixed(2); // if value < 1000, nothing to do
    }
  }




function addAchievement(achievement) {
  // Create element
  const achBox = document.createElement("div");
  achBox.innerHTML = "<h4>" + achievement.title + "</h4><h6><i>" + achievement.flavorText + "</i></h6>";
  achBox.classList.add("achievements");
  // Append to another element:
  achievementsSection.appendChild(achBox);
  achievementsGot++;
  document.getElementById("achievementsDisplay").innerHTML = achievementsGot;
}

function addUpgrade(upgrade) {
  if (upgrade.bought == false) {
    upgrade.bought = true;
    // Create element
    const upgradeBox = document.createElement("div");
    const upgradeButton = document.createElement("button");
    upgradeButton.innerHTML = "BUY";
    upgradeButton.onclick = function () {
      buyUpgrade(upgrade);
    };
    upgradeBox.innerHTML = "<p>" + upgrade.discovery.title + "<br>$ " + numFormatter(upgrade.cost) + " | " + upgrade.research + " RP</p><h6><i>" + upgrade.discovery.flavorText + "</i></h6>";
    upgradeBox.appendChild(upgradeButton);
    upgradeBox.classList.add("buildingBox");
    // Append to another element:
    upgradesSection.appendChild(upgradeBox);
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

function sellThing(thing) {
  if (thing.owned > 0) {
    money += thing.cost/2;
    thing.owned -= 1;
    moneyDisplay.innerHTML = numFormatter(money);
    thing.amount.innerHTML = numFormatter(thing.owned);
  } else if (thing.owned <= 0) {
    window.alert("Not enough buildings to sell!");
  }
} 

function sellNR(thing) {
  if (thing.owned > 0) {
    money += thing.cost/4;
    thing.owned -= 1;
    moneyDisplay.innerHTML = numFormatter(money);
    thing.amount.innerHTML = numFormatter(thing.owned);
    popularity -= thing.popDebuff; 
  } else if (thing.owned <= 0) {
    thing.head.style.display = "none";
  }
}



function buyUpgrade(upgrade) {
  if (upgrade.cost <= money && upgrade.research <= researchPoints) {
    achievementUnlocked(upgrade.discovery);

    switch (upgrade.discovery.buffType) {
      case 1:
          let buildingToBuff = upgrade.discovery.buffBuilding;
          buildingToBuff.output *= upgrade.discovery.buff;
          window.alert("test");
          window.alert(windmill.output);

    }
  }

}

function buyDiscovery(thing) {
    if (thing.cost < money && thing.research < researchPoints) {
      money -= thing.cost;
      researchPoints -= thing.research;
      rpDisplay.innerHTML = researchPoints.toFixed(2);
      moneyDisplay.innerHTML = numFormatter(money);
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
  
    if (findings.biomass.bought == true) {
      document.getElementById('biomasses').style.display = 'block';
  }
  
    if (findings.geothermal.bought == true) {
      document.getElementById('geothermals').style.display = 'block';
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
  
    if (researchPoints >= 150 && findings.biomass.bought == false) {
      document.getElementById('biomassUpgrade').style.display = 'block';
  }
  
    if (researchPoints >= 200 && findings.geothermal.bought == false) {
      document.getElementById('geothermalUpgrade').style.display = 'block';
  }

  if (researchPoints >= 100) {
    researchItems[1].style.display = 'block';
}

  if (researchPoints >= 25) {
    addUpgrade(upgrades.windmill1);
  }

}

function checkForEmpty() {
  if (findings.hydro.bought && findings.solar.bought && findings.windmill.bought && findings.geothermal.bought) {
    document.getElementsByName('researchNotif')[0].style.display = 'block';
  } else {
    document.getElementsByName('researchNotif')[0].style.display = 'none';
  }
}

//gain functions

function raiseMoney() { 
  if (windmill.owned > 0) {
    windmillps = windmill.owned * windmill.output;
    document.getElementById("windmillOutputPS").innerHTML = windmillps;
  }

  if (solarFarm.owned > 0) {
    solarps = solarFarm.owned * solarFarm.output;
  }

  if (hydroPlant.owned > 0) {
    hydrops = hydroPlant.owned * hydroPlant.output;
  }
  
  if (biomassFarm.owned > 0) {
    biomassps = biomassFarm.owned * biomassFarm.output;
  }
  
  if (geothermalPlant.owned > 0) {
    geothermalps = geothermalPlant.owned * geothermalPlant.output;
  }

  mps = windmillps + solarps + hydrops + biomassps + geothermalps;
  money += mps/10;

}

function raiseNR() {
    if (coalPlant.owned > 0) {
      coalps = coalPlant.owned * coalPlant.output;
    }

    if (oilPlatform.owned > 0) {
      oilps = oilPlatform.owned * oilPlatform.output;
    }

    if (gasFacility.owned > 0) {
      gasps = gasFacility.owned * gasFacility.output;
    }

    if (nuclearPlant.owned > 0) {
      nukeps = nuclearPlant.owned * nuclearPlant.output;
    }

    mpsNR = coalps + oilps + gasps + nukeps;
    money += mpsNR/10;
    
}

function updateItemsSecond() {

  mpsTotal = mps + mpsNR;

  influence++;
  influenceDisplay.innerHTML = influence;
  rps = researcher.output * researcher.owned;

  researchPoints += rps;
  rpsDisplay.innerHTML = rps.toFixed(2) + " per month";
  checkForUpgrades();
  rpDisplay.innerHTML = researchPoints.toFixed(2);
  moneyDisplay.innerHTML = numFormatter(money);
  mpsDisplay.innerHTML = "$ " + numFormatter(mpsTotal) + " per month";
  checkForEmpty();
}

function raiseYear() {
  year += 1;
  yearDisplay.innerHTML = year;
  temp += tempIncrease;
  tempDisplay.innerHTML = temp.toFixed(2);
  tpsDisplay.innerHTML = tempIncrease.toFixed(2) + "&#176; per year";
  popularity += 0.25;
  popularityDisplay.innerHTML = popularity.toFixed(2) + "%";
}

function raiseTemperature () {
    tempIncrease *= 1.1;
}

function endGame() {
  window.alert("GAME OVER");
  clearInterval(updateGameSecond);
  clearInterval(monthlyUpdates);
  clearInterval(pentyearlyUpdates);
  clearInterval(checkForEndGame);
  clearInterval(updatePlayerValues);
  clearInterval(updatePlayerPopularity);
  rpsDisplay.innerHTML = "THERE";
  mpsDisplay.innerHTML = "IS";
  monthDisplay.innerHTML = "NOTHING";
  tpsDisplay.innerHTML = "LEFT";

}

function popCheck() {
  
  if (popularity < 40 && popularity > 30) {
    achievementUnlocked(achievementsList.pop1);
  } else if (popularity < 30 && popularity > 20) {
    achievementUnlocked(achievementsList.pop2);
  } else if (popularity < 20 && popularity > 10) {
    achievementUnlocked(achievementsList.pop3);
  } else if (popularity < 10 && popularity > 0) {
    achievementUnlocked(achievementsList.pop4);
  } else if (popularity <= 0) {
    endGame();
  }
  
}

function checkForWin() {
  if (temp < 95) {
    if (temp > 65 && temp < 75) {
      root.style.setProperty('--phthalo-blue', '#CC6300');
      root.style.setProperty('--blue-pigment', '#E36F26');
      root.style.setProperty('--box-shadows', '#E36F2674');
      if (achievementsList.temp1.got == false) {
        achievementUnlocked(achievementsList.temp1);
      }
    } else if (temp > 75 && temp < 90) {
      root.style.setProperty('--phthalo-blue', '#BF2237');
      root.style.setProperty('--blue-pigment', '#FF1F2E');
      root.style.setProperty('--box-shadows', '#FF1F2E');
      if (achievementsList.temp2.got == false) {
        achievementUnlocked(achievementsList.temp2);
      }
    } else if (temp > 90 && temp < 95) {
      root.style.setProperty('--phthalo-blue', '#0a0100');
      root.style.setProperty('--blue-pigment', 'black');
      root.style.setProperty('--box-shadows', '#0a0100');
      if (achievementsList.temp3.got == false) {
        achievementUnlocked(achievementsList.temp3);
      }
    } 
    
  } else if (temp > 95) {
    if (achievementsList.temp4.got == false) {
      achievementUnlocked(achievementsList.temp4);
    }
    modalHeader.innerHTML = "";
    modalText.innerHTML = "Despite humanity's best efforts, <b>" + playerName.toString() + " INC </b> has failed. The Earth has warmed to unlivable temperatures. The few survivors know they're watching the end of the world.";
    modal.style.display = "block";
    
    endGame();
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
  updateGameSecond = setInterval(updateItemsSecond, 1000);
  monthlyUpdates = setInterval(raiseMonth, 250);
  pentyearlyUpdates = setInterval(raiseTemperature, 15000);
  checkForEndGame = setInterval(checkForWin, 1000);
  updatePlayerValues = setInterval(raiseMoney, 100);
  updateNonRenewables = setInterval(raiseNR, 100);
  updatePlayerPopularity = setInterval(popCheck, 1000);
}

function changeText() {
  switch (sectionOfText) {
    case 0:
      modalText.innerHTML = "You have been put in charge of a new company! What shall it be called?<br><input id='name' type='text' value='Climate' name='playerName'required ><b><label for='playerName'> + INC</label></b> ";
      sectionOfText++;
      break;
    case 1:
      playerName = document.getElementById("name").value;
      modalText.innerHTML = "Hello <b>" + playerName + " INC</b>! You have been tasked by the government to help fix the issue of climate change!";
      document.getElementById("playerName").innerHTML = playerName + " INC";
      sectionOfText++;
      break;
    case 2:
      modalText.innerHTML = "You have several researchers and 10,000 dollars in funds to aid you. Good Luck! <br>- The Government.";
      nextButton.addEventListener("click", function() {
        modal.style.display = 'none';
        if (gameStart == false) {
          setGameValues();
          gameStart = true;
        }
      });
      nextButton.onclick="";
      nextButton.innerHTML = "CLOSE";
  }
} 









































// SIDENAV FUNCTION

function sidenavSwitch(chosenSection) {
  switch (chosenSection) {
    case 1:
      researchSection.style.display = 'block';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'none';
      policiesSection.style.display = 'none';
      changelogSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[4].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[5].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[6].style.fontWeight = "normal";
      break;
    case 2:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'block';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'none';
      policiesSection.style.display = 'none';
      changelogSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[4].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[5].style.fontWeight = "normal";
      break;
    case 3:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'block';
      achievementsSection.style.display = 'none';
      policiesSection.style.display = 'none';
      changelogSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[4].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[5].style.fontWeight = "normal";
      break;
    case 4:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'block';
      policiesSection.style.display = 'none';
      changelogSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[4].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[5].style.fontWeight = "normal";
      break;
    case 5:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'none';
      policiesSection.style.display = 'block';
      changelogSection.style.display = 'none';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[4].style.fontWeight = "bold";
      document.getElementsByClassName("sidenavButton")[5].style.fontWeight = "normal";
      break;
    case 6:
      researchSection.style.display = 'none';
      findingsSection.style.display = 'none';
      buildingsSection.style.display = 'none';
      achievementsSection.style.display = 'none';
      policiesSection.style.display = 'none';
      changelogSection.style.display = 'block';
      document.getElementsByClassName("sidenavButton")[0].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[1].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[2].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[3].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[4].style.fontWeight = "normal";
      document.getElementsByClassName("sidenavButton")[5].style.fontWeight = "bold";
  
} }

window.alert("v0.19.9q");

// Modal 
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Stats
let moneyDisplay = document.getElementById("moneyDisp");
let greenDisplay = document.getElementById("greenDisp");
let tempDisplay = document.getElementsById("tempDisp");
//let yearDisplay = document.getElementById("yearDisp");
let mpsDisplay = document.getElementById("MPS");
let upgrades = document.getElementsByClassName("upgrades");
let buildings = document.getElementsByClassName("buildings");
let globalTempature = 67.7;
let money = 10000000;
let mps = 0;
let buySellToggle = true;
let greenPoints = 0;
let rateOfChange = 0.013;
let currentYear = 2021;      

// Boxes
let solarBox = document.getElementById("solarpanels");
let windmillBox = document.getElementById("windmills");
let hydroBox = document.getElementById("hydroplant");
let geoBox = document.getElementById("geothermal");

// Bars
var bar1 = new ldBar(".myBar", {
   "stroke": '#f00',
   "stroke-width": 10,
   "preset": "fan",
   "value": 65
});
	
var bar2 = new ldBar(".myBar2", {
   "stroke": '#f00',
   "stroke-width": 10,
   "preset": "fan",
   "value": 20
});
	    
// Buildings
let solarpanels = {
  price: 100000,
  production: 120000,
  solarOwned: 0,
  researched: false,
  solarDisplay: document.getElementById("solarPrice"),
};

let windmills = {
  price: 1200000,
  production: 1000000,
  windmillOwned: 0,
  researched: false,
  windmillDisplay: document.getElementById("windmillPrice"),
};

let hydroplant = {
  price: 120000000,
  production: 2000000,
  hydroOwned: 0,
  researched: false,
  hydroDisplay: document.getElementById("hydroPrice"),
};

let geothermal = {
  price: 500000000,
  production: 25000000,
  geoOwned: 0,
  researched: false,
  geoDisplay: document.getElementById("geoPrice"),
};


// Upgrades

let researcher = {
  price: 2800000,
  reseOwned: 0,
  production: 0.1,
  reseDisplay: document.getElementById("resePrice"),
};

// Building production

let pos = 20;
let imgRel = "";

/*
window.onload = function loadingCode() { 
	checkState();
	for (let i = 0; i <= upgrades.length; i++) {
	  upgrades[i].style.display = "none";
	}
	bar1.set(
    	  globalTempature,     // target value
    	  false);
        bar2.set(
        currentYear,     // target value
        false); 
}
  */

function setObjectTrue(building, price) {
  building.researched = true;
  window.alert(building.researched);
  money -= price;
}

// Building functions

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

function calculateBuildings() {
        
  if (windmills.windOwned >= 0) {
    mps += windmills.windOwned * windmills.production;
  }

  if (solarpanels.solarOwned >= 0) {
    mps += solarpanels.solarOwned * solarpanels.production;
  }

  if (hydroplant.hydroOwned >= 0) {
    mps += hydroplant.hydroOwned * hydroplant.production;
  }

  if (researcher.reseOwned >= 0) {
    greenPoints += researcher.reseOwned * researcher.production;
  }
  money += mps;
  moneyDisplay.innerHTML = numFormatter(money);
  mpsDisplay.innerHTML = numFormatter(mps);
  greenDisplay.innerHTML = greenPoints.toFixed(2);

}

function buyBuildings(building, buildingOwned, buildingPrice, image, display) {
  if (money >= building[buildingPrice] && buySellToggle == true && building["researched"] == true) { // Main buying function
    building[buildingOwned]++;
    money -= building[buildingPrice];
    document.getElementById(buildingOwned).innerHTML = building[buildingOwned];
    moneyDisplay.innerHTML = numFormatter(money);
    building[buildingPrice] *= 1.2;
    building[display].innerHTML = numFormatter(building[buildingPrice]);
    dispImage(false, image);

  } else if (money < building[buildingPrice] && buySellToggle == true) { // Not enough money function
    window.alert("Not enough money!");

  } else if (building["researched"] == false && money >= building[buildingPrice]) {
    window.alert("Not researched yet!");

  } else if (buySellToggle == false && building[buildingOwned] > 0) { // Selling building function
    money += building[buildingPrice];
    building[buildingOwned] -= 1;
    window.alert("Building sold!");
    document.getElementById(buildingOwned).innerHTML = building[buildingOwned];

  } else if (buySellToggle == false && building[buildingOwned] == 0) { // Not enough buildings to sell function
    window.alert("Not enough buildings to sell!"); 
  }
}

 function checkUpgrades() {

  currentYear += 1;
  bar1.set(
    currentYear,     //target value. 
    false   // enable animation. default is true 
  ); 
  if (greenPoints > 2.5) {
    upgrades[0].classList.add("upgradeButton");
    upgrades[0].style.display = "block";
  }
  if (greenPoints > 5) {
    upgrades[1].classList.add("upgradeButton");
    upgrades[1].style.display = "block";
  }
  if (greenPoints > 15) {
    upgrades[2].classList.add("upgradeButton");
    upgrades[2].style.display = "block";
  } 
  if (greenPoints > 30) {
    upgrades[3].classList.add("upgradeButton");
    upgrades[3].style.display = "block";
  }
}    

function raiseTempature() {
  globalTempature += rateOfChange;
	//tempDisplay.innerHTML = globalTempature.toFixed(2);
	bar2.set(
    globalTempature.toFixed(2),     // target value
    false   // enable animation. default is true 
  ); 
}    
	    
function raiseTempHigh() {
  rateOfChange *= 1.3;
  return rateOfChange;
}

function checkBuildings() {
if (solarpanels.price * 1.5 < money) {
    solarBox.style.display = "block"; 
    solarBox.classList.add("blur");
  }  
  if (solarpanels.price * 1.5 < money && solarpanels.researched == true) {
    solarBox.classList.remove("blur");
  }
	
  if (windmills.price * 1.5 < money) {
    windmillBox.style.display = "block"; 
    windmillBox.classList.add("blur");
  }  
  if (windmills.price * 1.5 < money && windmills.researched == true) {
    windmillBox.classList.remove("blur");
  }
	
  if (hydroplant.price * 1.5 < money) {
    hydroBox.style.display = "block"; 
    hydroBox.classList.add("blur");
  }  
  if (hydroplant.price * 1.5 < money && hydroplant.researched == true) {
    hydroBox.classList.remove("blur");
  }
	
  if (geothermal.price * 1.5 < money) {
    geoBox.style.display = "block"; 
    geoBox.classList.add("blur");
  }  
  if (geothermal.price * 1.5 < money && geothermal.researched == true) {
    geoBox.classList.remove("blur");
  }
}    


function buyUpgrades(object, owned, price, display) {
	  if (object[price] < money) {
	    money -= object[price];
	    object[owned]++;
	    object[price] *= 1.5;
            document.getElementById(owned).innerHTML = object[owned];
            document.getElementById(display).innerHTML = numFormatter(object[price]);
            moneyDisplay.innerHTML = numFormatter(money);
	  } else {
	     window.alert("Not enough money!");
	  }
	}
 
function dispImage(destory, imageSelection) {

  let img = document.createElement("img");
  //let imageSelection = document.getElementById("images").value;
  let div = 0;  
  if (imageSelection == 0) {
    img.src = 'WindmillSpread.png';        
    div = document.getElementById("x");
  } else if (imageSelection == 1) {
    img.src = "solarPanelSpread.png";
    div = document.getElementById("y");
  }  
  if (destory == false) {
    imgRel = pos + "px";
    img.setAttribute("width", "50px");
    img.setAttribute("position", "absolute");
    img.setAttribute("left", "10px");
    pos += 20;
    div.appendChild(img);
  } else if (destroy == true) {
    div.removeChild(img);
  }
} 

/*
function checkState() {
  let slider = document.getElementById("slider");
  window.alert(slider.checked);
  if (slider.checked == true) {
  buySellToggle = false;
  document.getElementById("state").innerHTML = "SELLING";
  } else if (slider.checked == false) {
  buySellToggle = true;
  document.getElementById("state").innerHTML = "BUYING";
  }

}


// Flavor Text
function flavorText(button) {
  let flavor = document.getElementById("flavorText");
  if (button == 0) {
    flavor.innerHTML = "Works best on Neptune";
  } else if (button == 1) {
    flavor.innerHTML = "Good for tans!";
  }
  modal.style.display = "block";
}

function switchSections() {
  var x = document.getElementsByClassName("tabs");
  if (x[0].style.display === "none") {
    x[0].style.display = "block";
    x[1].style.display = "none";
  } else {
    x[0].style.display = "none";
    x[1].style.display = "block";
  }
}
	    
	    

// Timers
setInterval(calculateBuildings, 1000);
setInterval(checkBuildings, 1000);
setInterval(checkUpgrades, 5000);
setInterval(raiseTempature, 2000);
setInterval(raiseTempHigh, 10000); 
*/
window.alert("kill me");

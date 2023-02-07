let money = 500;

const moneyDisp = document.getElementById("moneyDisp");

const berrySelector = document.getElementById("berry-selector");

const notifDisp = document.getElementById("notification-box");
const notifCounter = document.getElementById("notification-counter");
let notifsActive = 0;
let ntf;

let gardenRows;
let gardenPlots = [];
let gardenPlotsIndex = [];
let garden = {
	// Technical stuff
    object: document.getElementById("garden"),
    objectId: "garden",
    
    // Variables
    size: 2,
}

const berries = {
    "bulb": {
        ageOneSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bulb_1.png')",
        ageTwoSprite: 
"url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bulb_2.png')",
        ageThreeSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bulb_3.png')",
        ageFourSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bulb_4.png')",
        ageFiveSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bulb_5.png')",
        
        price: 10,
amount: 0,
        seedAmount: 0,
        saDisp: document.getElementById("bulb-berr-seed"),
        amountDisp: document.getElementById("bulb-berr-disp"),
    	
    },
    
    "bliss": {
    	ageOneSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bliss_1.png')",
        ageTwoSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bliss_2.png')",
        ageThreeSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bliss_3.png')",
        ageFourSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bliss_4.png')",
        ageFiveSprite: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/bliss_5.png')",
        price: 50,
        amount: 0,
seedAmount: 0,
        saDisp: document.getElementById("bliss-berr-seed"),
        amountDisp: document.getElementById("bliss-berr-disp"),
    
    },
    
    "crin": {
    	price: 100,
amount: 0,
        seedAmount: 0,
    	amountDisp: document.getElementById("crin-berr-disp"),
    
    },
    
    "rack": {
    	price: 500,
        amount: 0,
        seedAmount: 0,
    	amountDisp: document.getElementById("rack-berr-disp"),
    
    },
}

// Currency formatter

let moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
});

window.onload = function loading() {
    makePlots(garden.size);
    
    var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
}

function switchFunction(chosenSection) {
    let sections = document.getElementsByTagName("section");
    let sectVis = document.getElementsByClassName("navChild");
for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        sectVis[i].classList.remove("chosen");
    } 
    sections[chosenSection].style.display = "block";
    sectVis[chosenSection].classList.add("chosen");
  } 

function generateNotif(header, text) {
notifsActive++;
notifDisp.innerHTML += `<div class="notif" onclick="this.remove(); removeNotif();">
    	<h3>${header}</h3>
    	<p>${text}</p>
    	</div>`;
    
    
    
    if (notifsActive < 3) {
    
    ntf = notifsActive * 100;
    
    notifDisp.style.height = `${ntf}px`;
    
    } else {
    
    notifCounter.innerHTML =  `${notifsActive} notifs`;
    
    }

}

function selectBerry(berry, id) {
	berrySelector.innerHTML = berry; 
    let berryId = document.getElementsByClassName('seedTile');
    
    for (let i = 0; i < berryId.length; i++) {
    	    
    berryId[i].style.border = 'none'; 
    }
    
    
    berryId[id].style.border = '2px solid white'; 
}

function openNav(nav, nav2) {

  let navbars = document.getElementsByClassName("sidenavs");
  
  navbars[nav].style.width = `${nav2}%`;
  
  //document.html.style.backgroundColor = "rgba(0,0,0,0.4)";
  
}

function closeNav(nav) {
  let navbars = document.getElementsByClassName("sidenavs");
  navbars[nav].style.width = "0";
  
  //document.html.style.backgroundColor = "white";
}


function removeNotif() {
	let shortHand = notifDisp.offsetHeight;
    notifsActive -= 1;
    
  	if (notifsActive < 3) {
    	shortHand -= 100;
notifDisp.style.height = shortHand + 'px';
    }
 
    if (notifDisp.style.height == undefined) {
    	notifDisp.style.height = "0px";
    }
}

function setUpGarden() {
	switch (garden.size) {
		case 1: 
			garden.object.style.width = "250px";
    		garden.object.style.height = "250px";
    		break;
        case 2:
garden.object.style.width = "500px";
    		garden.object.style.height = "500px";
        	break;
        case 3:
        	garden.object.style.width = "750px";
    		garden.object.style.height = "750px";
        	break;
       case 4:
        	garden.object.style.width = "1000px";
    		garden.object.style.height = "1000px";
        	break;
	}
}
function makePlots(size) {
let arrayIndex = 0;
	for (let i = 0; i < size * 2; i++) {
    	let gardenPlotRow = document.createElement("tr");
gardenPlotRow.setAttribute("id", i);
        for (let j = 0; j < size * 2; j++) {
            
            let gpId = Math.floor(Math.random() * 9999);
            gardenPlotRow.innerHTML += `<td class='plot' id='${gpId}' onclick='makePlant(${arrayIndex}, this)'></td>`
            //${gpId} | ${arrayIndex}</td>`;
            gardenPlotsIndex.push(arrayIndex);
            
            
            let plant = {
id: gpId,
        		arrayId: arrayIndex,
        		age: -1,
        		type: "none",
                price: 0,
    		} 
    
    		gardenPlots.push(plant);
            
            arrayIndex++;
		}
        garden.object.appendChild(gardenPlotRow);
	}  
    setUpGarden();
gardenRows = document.getElementById("garden").rows;   
}



function makePlant(arrayInd, cell) {

	let plot = gardenPlots[arrayInd];
    
    if (plot.age >= 0) {
        harvestPlants(plot);
    } else {
    let chosenBerry = berrySelector.innerHTML.toLowerCase();
    if (berries[chosenBerry].seedAmount > 0) {
    
    berries[chosenBerry].seedAmount -= 1;
    berries[chosenBerry].saDisp.innerHTML = berries[chosenBerry].seedAmount;
    
		let text = "A " + chosenBerry + " berry was planted in plot " + arrayInd;
    	plot.age = 0;
    	plot.type = chosenBerry;
        
    	cell.style.backgroundSize = "cover";
    //window.alert("Plant Index: " + gardenPlotsIndex);
    //window.alert("Plant Objects: " + gardenPlots);
    
    generateNotif("Berry planted!", text);
    } else {
    	generateNotif("Warning!", "Not enough seeds to plant!");
    }  
    }
}

function harvestPlants(selectedPlot) {

	if (selectedPlot.age >= 5) {
        selectedPlot.age = -1;
        berries[selectedPlot.type].amount++;
        console.log(berries[selectedPlot.type].amount);
document.getElementById(selectedPlot.id).style.backgroundImage = "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/dirt.png')";
        
        berries[selectedPlot.type].amountDisp.innerHTML = berries[selectedPlot.type].amount;
        
    } else {
    	console.log("Berry is not ready to be harvested!");
    }

}

function checkPlants() {
	for (let i = 0; i < gardenPlotsIndex.length; i++) {
    	let plot = gardenPlots[i];
        // Plant logic  
        if (plot.age > -1) {
        plot.age++;
switch (plot.age) {
            	case 1: 
document.getElementById(plot.id).style.background += berries[plot.type].ageOneSprite;
				generateNotif("Plant found!", `Plant found in plot ${plot.arrayId}`);
				break;
                
				case 2:        
                	document.getElementById(plot.id).style.backgroundImage = berries[plot.type].ageTwoSprite;
                break;
                
                case 3:       
document.getElementById(plot.id).style.backgroundImage = berries[plot.type].ageThreeSprite;	
		break;
                
                case 4:      
                	document.getElementById(plot.id).style.backgroundImage += berries[plot.type].ageFourSprite;	
                break;
                
                case 5:      
                	document.getElementById(plot.id).style.backgroundImage = berries[plot.type].ageFiveSprite;
	      break;
				case 6:   
document.getElementById(plot.id).style.backgroundImage = berries[plot.type].ageFourSprite;	
                break;
                
                case 7:    
                	document.getElementById(plot.id).style.backgroundImage = berries[plot.type].ageThreeSprite;
                break;
case 8:
                generateNotif("Warning!", "A plant has died in plot " + plot.arrayId);
                document.getElementById(plot.id).style.backgroundImage = "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/dirt.png')";
                plot.age = -1;
            } 
 		}
        
    }
}

function buySeed(seed) {
	let berry = berries[seed];
	if (money >= berry.price) {
    	money -= berry.price;
        moneyDisp.innerHTML = moneyFormatter.format(money);
        berry.seedAmount++;
        berry.saDisp.innerHTML = berry.seedAmount;
    }	
}

function sellProduct() {

}

function checkMoney() {
moneyDisp.innerHTML = moneyFormatter.format(money);
    
}

function updateNotif() {
    
    let notifsList = notifDisp.children; 
    notifsList[1].remove();
    removeNotif();
    
    
}

let checkPlantTimer = setInterval(checkPlants, 5000);
let checkMoneyTimer = setInterval(checkMoney, 1000);
let fhwyegu = setInterval(updateNotif, 10000);
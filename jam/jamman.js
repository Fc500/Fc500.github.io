let money = 1500;

const moneyDisp = document.getElementById("moneyDisp");

const berrySelector = document.getElementById("berry-selector");

const modals = document.getElementsByClassName("modal-content");
const modalContent = document.getElementById("modal-header");
const modalBody = document.getElementById("modal-body");
const modalFooter = document.getElementById("modal-footer");
const modalContainer = document.getElementById("modalContainer");
const modalClose = document.getElementsByClassName("modal-close");

const notifDisp = document.getElementById("notification-box");
const notifCounter = document.getElementById("notification-counter");
let notifsActive = 0;
let ntf;
let bulkFactor = 1;
let height = screen.height;


let gardenRows;
let jamArray = [];
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
        spritesheet: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/spritesheet_bulb.png')",
        spritesheetPos: 0,
        price: 10,
        amount: 5,
		growthRate: 0,
        seedAmount: 0,
        saDisp: document.getElementById("bulb-berr-seed"),
        amountDisp: document.getElementById("bulb-berr-disp"),
        
        taste: {
            sour: 0,
            sweet: 2,
            bitter: 1,
            savor: 0,
        }
    	
    },
    
    "bliss": {
    	spritesheet: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/spritesheet_bliss.png')",
        spritesheetPos: 1,
        price: 50,
        amount: 5,
        growthRate: 0,
        seedAmount: 0,
        saDisp: document.getElementById("bliss-berr-seed"),
        amountDisp: document.getElementById("bliss-berr-disp"),

        taste: {
            sour: 1,
            sweet: 0,
            bitter: 2,
            savor: 2,
        }

    
    },

    "crin": {
        spritesheet: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/spritesheet_crin.png')",
        spritesheetPos: 2,
    	price: 100,
        amount: 5,
        growthRate: 2,
        seedAmount: 0,
        saDisp: document.getElementById("crin-berr-seed"),
    	amountDisp: document.getElementById("crin-berr-disp"),

        taste: {
            sour: 1,
            sweet: 2,
            bitter: 1,
            savor: 2,
        }

    
    },
    "rack": {
        spritesheet: "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/spritesheet_rack.png')",
        spritesheetPos: 3,
    	price: 500,
        amount: 5,
        growthRate: 1,
        seedAmount: 0,
        saDisp: document.getElementById("rack-berr-seed"),
    	amountDisp: document.getElementById("rack-berr-disp"),

        taste: {
            sour: 3,
            sweet: 3,
            bitter: 0,
            savor: 0,
        }

    
    },
}

class Jam {
    constructor(bulb, bliss, crin, rack, type, bitter, sweet, sour, savor, name) {
        this.bulbUsed = bulb;
        this.blissUsed = bliss;
        this.crinUsed = crin;
        this.rackUsed = rack;

        this.jamType = type;
        this.jamBitterness = bitter;
        this.jamSweetness = sweet;
        this.jamSourness = sour;
        this.jamSavorness = savor;

        this.jamName = name;

    }
}
//Images
const plotHole = "url('https://raw.githubusercontent.com/Fc500/Fc500.github.io/main/jam/berries/background_6.png')";
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

function genRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function switchFunction(chosenClass, chosenSection) {
    window.alert(chosenClass);
    let sections = document.getElementsByClassName(chosenClass);
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    } 
    sections[chosenSection].style.display = "block";
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

function openModal(modal, head, body, foot) {
    modalContainer.style.display = "block";
    for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
    modals[modal].style.display = "block";
    modalContent.innerHTML = head;
    modalBody.innerHTML = body;
    modalFooter.innerHTML = foot;
    //modalCloser[modal].onclick = closeModal(modal);
    modalClose[modal].onclick = function assist() {
      closeModal(modal);
    }

}

function closeModal(x) {
  modals[x].style.display = "none";
  modalContainer.style.display = "none";
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
            gardenPlotRow.innerHTML += `<td class='plot' id='${gpId}' style='color: white' onclick='makePlant(${arrayIndex}, this)'></td>`
            //${gpId} | ${arrayIndex}</td>`;
            gardenPlotsIndex.push(arrayIndex);
let plant = {
id: gpId,
        		arrayId: arrayIndex,
        		age: -1,
                stage: 0,
        		type: "none",
                price: 0,
    		} 
    
    		gardenPlots.push(plant);
            
            arrayIndex++;
		}
        garden.object.appendChild(gardenPlotRow);
setUpGarden();
gardenRows = document.getElementById("garden").rows;   
}
}

function setBulk(factor) {
    bulkFactor = factor;
}
function buySeed(seed) {
	let berry = berries[seed];

    if (bulkFactor == -1) {
        bulkFactor = money / berry.price;
        bulkFactor.toFixed(1);
        window.alert(bulkFactor);
    }

	if (money >= berry.price * bulkFactor) {
    	money -= berry.price * bulkFactor;
        moneyDisp.innerHTML = moneyFormatter.format(money);
        berry.seedAmount += bulkFactor;
        berry.saDisp.innerHTML = berry.seedAmount;
        generateNotif("Purchase Made", `You bought ${bulkFactor} ${seed} seed(s)`);

    }	else {
        generateNotif("Warning!", "Not enough money!")
    }
}


function selectJam(slot) {

	let jamCounter = 0;

	let selection = window.prompt("What berry do you want to use?", "Bulb").toLowerCase();
    
    if (berries[selection].amount > 0) {
    let jamImg = document.getElementsByClassName("create-jam-bg");
    let makeJamButton = document.getElementById("jamMakerButton");
    let berryIcon = document.createElement("div");
    berryIcon.innerHTML = selection;
    berryIcon.style.color = "rgba(0, 0, 0, 0)";
    berryIcon.classList.add("create-jam");
    berryIcon.style.backgroundPosition = `${-64 * berries[selection].spritesheetPos}px 0px`;
    jamImg[slot].appendChild(berryIcon);
    
    
    
    
    for (let n = 0; n < jamImg.length; n++) {
    	if (jamImg[n].childNodes.length > 1) {
    		jamCounter++;
        }
    }
    
    if (jamCounter == 4) {

        for (let i = 0; i < 4; i++) {
    	    jamArray.push(document.getElementsByClassName("create-jam")[i].innerHTML);	 
        }

    	makeJamButton.onclick = makeJam;
    }
window.alert(jamCounter);
    
    
    } else {
    	window.alert(`You don't have enough ${selection} berries!`);
    }
   
    
}


function makeJam() {

    let jam = new Jam(0, 0, 0, 0, "dull", 0, 0, 0, 0, "");
    window.alert(jamArray);
    for (let i = 0; i < jamArray.length; i++) {
        jam.jamBitterness += berries[jamArray[i]].taste.bitter;
        jam.jamSweetness += berries[jamArray[i]].taste.sweet;
        jam.jamSourness += berries[jamArray[i]].taste.sour;
        jam.jamSavorness += berries[jamArray[i]].taste.savor;

        if (jamArray[i] == "bulb") {
            jam.bulbUsed += 1;
        }

        if (jamArray[i] == "bliss") {
            jam.blissUsed += 1;
        }

        if (jamArray[i] == "crin") {
            jam.crinUsed += 1;
        }

        if (jamArray[i] == "rack") {
            jam.rackUsed += 1;
        }
    }

    if (jam.jamBitterness > jam.jamSavorness) {
        jam.jamType = "bittery-";
    } else {
        jam.jamType = "savory-";
    }

    if (jam.jamSourness > jam.jamSweetness) {
        jam.jamType += "sour";
    } else {
        jam.jamType += "sweet";
    }


    if (jam.bulbUsed == 4) {
        jam.jamName += "Bulbful";
    } else if (jam.bulbUsed < 4 && jam.bulbUsed >1 ) {
        jam.jamName += "Bulbin";
    }

    if (jam.jamName != "") {
        jam.jamName += " ";
    }

    if (jam.blissUsed == 4) {
        jam.jamName += "Blissful";
    } else if (jam.blissUsed < 4 && jam.blissUsed > 1) {
        jam.jamName += "Blissin";
    }

    if (jam.jamName != "") {
        jam.jamName += "-";
    }


    if (jam.crinUsed == 4) {
        jam.jamName += "Crinful";
    } else if (jam.crinUsed < 4 && jam.crinUsed > 1) {
        jam.jamName += "Crinin";
    }

    if (jam.jamName != "") {
        jam.jamName += "-";
    }


    if (jam.rackUsed == 4) {
        jam.jamName += "Rachety";
    } else if (jam.rackUsed < 4 && jam.rackUsed > 1) {
        jam.jamName += "Rackin";
    }

    if (jam.jamName != "") {
        jam.jamName += "-";
    }


    if (jam.bulbUsed == 1 && jam.blissUsed == 1 && jam.crinUsed == 1 && jam.rackUsed == 1) {
        jam.jamName = "Melting Jam";
    }






    window.alert("You made one " + jam.jamName + " " + jam.jamType + " jam!");

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
        selectedPlot.stage = 0;
berries[selectedPlot.type].amount++;
        console.log(berries[selectedPlot.type].amount);
document.getElementById(selectedPlot.id).style.backgroundImage = plotHole;
        
        berries[selectedPlot.type].amountDisp.innerHTML = berries[selectedPlot.type].amount;
        
        let chanceForDrop = genRandInt(0, 10);
        if (chanceForDrop < 2) {
        	berries[selectedPlot.type].seedAmount++;
            generateNotif("Seed found!", `You found one ${selectedPlot.type} seed!`);
            berries[selectedPlot.type].saDisp.innerHTML = berries[selectedPlot.type].seedAmount;
        }
        
    } else {
    	console.log("Berry is not ready to be harvested!");
    }

}

function checkPlantsGrowth() {
	for (let i = 0; i < gardenPlotsIndex.length; i++) {
    	let plot = gardenPlots[i];
        // Plant logic  
        if (plot.age > -1) {
        document.getElementById(plot.id).style.backgroundImage = `${berries[plot.type].spritesheet}, ${plotHole}`;
document.getElementById(plot.id).style.backgroundSize = "200%, contain;";

let bgPos = plot.age * 85;
document.getElementById(plot.id).style.backgroundPosition = `-${bgPos}px, 0`;

		let ageState = plot.stage % 2;

		switch (berries[plot.type].growthRate) {
        	case 0:
			plot.age++;
            break;
            
            case 1:
            if (ageState == 0) {
                console.log(ageState + " " + plot.age + " " + plot.stage);
                plot.age++;
            }
            
            break;
            
            case 2:
let randomness = Math.floor(Math.random() * 10);
            if (ageState == 0 && randomness < 6) {
                console.log(ageState + " " + plot.age + " " + plot.stage);
                plot.age++;
            }
            
        }
	
switch (plot.age) {
            	case 1: 
				generateNotif("Plant found!", `Plant found in plot ${plot.arrayId}`);
				break;
               
				case 8:
                generateNotif("Warning!", "A plant has died in plot " + plot.arrayId);
                document.getElementById(plot.id).style.backgroundImage = plotHole;
                plot.age = -1;
            }
            
            plot.stage++;
 		}
        
    }
    
}

function checkPlantsBreed() {
	for (let i = 0; i < gardenPlotsIndex.length; i++) {
    	let plot = gardenPlots[i];
        if (plot.age > -1) {
        
        let plotNeighbors = 0;
        let neighbors = {
        	top: gardenPlots[i - 4],
            bottom: gardenPlots[i + 4],
            right: gardenPlots[i + 1],
            left: gardenPlots[i - 1],
            topRight: gardenPlots[i - 3],
            topLeft: gardenPlots[i - 5],
            bottomRight: gardenPlots[i + 5],
            bottomLeft: gardenPlots[i + 3],
        	}
            
        let breederOptions = [-5, -4, -3, -1, 1, 3, 4, 5];
           
        if (neighbors.top != undefined && neighbors.bottom != undefined && neighbors.left != undefined && neighbors.right != undefined) {
        
        if (neighbors.top.age > 1) {plotNeighbors++;}   
        if (neighbors.bottom.age > 1) {plotNeighbors++;}      
        if (neighbors.right.age > 1) {plotNeighbors++;}
        if (neighbors.left.age > 1) {plotNeighbors++;}
        
if (neighbors.topRight != undefined && neighbors.topLeft != undefined && neighbors.bottomRight != undefined && neighbors.bottomLeft != undefined) {
          if (neighbors.topRight.age > 1) {plotNeighbors++;}   
          if (neighbors.bottomRight.age > 1) {plotNeighbors++;}      
          if (neighbors.topLeft.age > 1) {plotNeighbors++;}
          if (neighbors.bottomLeft.age > 1) {plotNeighbors++;}
        }
        
        let breedingChance = Math.floor(Math.random() * 20);
        let breedingPlotChance = Math.floor(Math.random() * 9);
        let bp = breederOptions[breedingPlotChance];
        console.log("Plot Number: " + plot.arrayId + " Chance for breeding: " + breedingChance + " Neighbors: " + plotNeighbors);
        switch (plotNeighbors) {
        	case 3:
            if (breedingChance < 15) {
        		let newPlot = gardenPlots[i + bp];
                if (newPlot.age == -1) {
                	newPlot.age = 0;
                	newPlot.type = "bulb";
				}
            }
            break;
            
            case 4:
       		if (breedingChance < 10) {
        		let newPlot = gardenPlots[i + bp];
                if (newPlot.age == -1) {
newPlot.age = 0;
                	newPlot.type = "bliss";
				}
            }
            break;
            
            case 8:
       		if (breedingChance < 5) {
        		let newPlot = gardenPlots[i + bp];
                if (newPlot.age == -1) {
                	newPlot.age = 0;
                	newPlot.type = "crin";
				}
            }
            break;
        }
        
        
        }
        
        }
    }
}


function checkMoney() {
moneyDisp.innerHTML = moneyFormatter.format(money);
    
}

function updateNotif() {
    
    let notifsList = notifDisp.children; 
    notifsList[1].remove();
    removeNotif();
    
    
}

let checkPlantGrowthTimer = setInterval(checkPlantsGrowth, 5000);
let checkPlantBreedTimer = setInterval(checkPlantsBreed, 5000);

let checkMoneyTimer = setInterval(checkMoney, 1000);
let notifChecker = setInterval(updateNotif, 10000);

if ("serviceworker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}


let money = 1000;
    let moneyps = 0;
let rp = 0;
    let rps = 0;

let moneyDisplay = document.getElementById("money");
    let moneypsDisplay = document.getElementById("moneyps");
let rpDisplay = document.getElementById("rp");
    let rpsDisplay = document.getElementById("rps");
let stoneDisplay = document.getElementById("stone");
    let stonepsDisplay = document.getElementById("stoneps");
let coalDisplay = document.getElementById("coal");
    let coalpsDisplay = document.getElementById("coalps");
let ironDisplay = document.getElementById("iron");
    let ironpsDisplay = document.getElementById("ironps");

let upgradeMain = {
    container: document.getElementById("upgradeContainer"),
    got: 0,
    counter: document.getElementById("upgradeCounter"),
}

let achievementMain = {
    container: document.getElementById("achContainer"),
    got: 0,
    counter: document.getElementById("achCounter"),
}


let minerals = {
	coal: {
    	amount: 1000,
        worth: 0.5,
        multiplier: 1,
        ps: 1,
    },
    stone: {
    	amount: 1000,
        worth: 0.1,
        multiplier: 1,
        ps: 1,
    },
iron: {
    	amount: 1000,
        worth: 1,
        multiplier: 1,
        ps: 1,
    },
}


let miner = {
    production: 0,
    perSecond: 0.2,
	amount: 0,
    id: 'miners',
    costDisp: 'minerCost',
    productionDisp: 'minerProduction',
    cost: 10,
    resource: 'money',
    multipleCosts: false,
};

let researcher = {
    production: 0,
    perSecond: 0.1,
    amount: 0,
    id: 'researchers',
    costDisp: 'researcherCost',
    productionDisp: 'researcherProduction',
    cost: 100,
    resource: 'money',
    multipleCosts: false,
    unlocked: false,
    visible: true,
}

let coalPlant = {
	amount: 0,
    resource: 'money',
    resource2: 'stone',
    resource3: 'iron',
    cost: 150,
    cost2: 250,
    cost3: 10,
    multipleCosts: true,
    id: 'coalPlant',
    outputId: 'coalPlantOutput',
    amountId: 'coalPlantAmount',
    costDisp: 'coalCost',
    costDisp2: 'coalCost2',
    costDisp3: 'coalCost3',
    sellingAmount: 10,
    buffs: {
        has: true,
        type: 0,
        target: "coal",
        amount: 1,
    },
    unlocked: false,
    visible: false,
    visibleThreshhold: 100,
}

let upgrades = [
    {
        name: 'miner1',
        cost: 100,
        id: 'upgrade1',
        buff: 2,
        buffType: 0,
        unlocked: false,
        visible: false,
        visibleThreshhold: 100,
        title: "Better pickaxes",
        flavorText: "It's getting quite warm out there...",
    },

    {
        name: 'miner2',
        cost: 500,
        id: 'upgrade2',
        buff: 2,
        buffType: 0,
        unlocked: false,
        visible: false,
        visibleThreshhold: 250,
        title: "Ultra pickaxes",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner3',
        cost: 1500,
        id: 'upgrade3',
        buff: 2,
        buffType: 0,
        unlocked: false,
        visible: false,
        visibleThreshhold: 1000,
        title: "Excavators",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner4',
        cost: 2500,
        id: 'upgrade4',
        buff: 2,
        buffType: 0,
        unlocked: false,
        visible: false,
        visibleThreshhold: 2000,
        title: "Graders",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner5',
        cost: 10000,
        id: 'upgrade5',
        buff: 2,
        buffType: 0,
        unlocked: false,
        visible: false,
        visibleThreshhold: 9000,
        title: "Blasthole Drills",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner6_stoneInc1',
        cost: 250,
        id: 'upgrade6',
        buff: 1.5,
        buffType: 1,
        unlocked: false,
        visible: false,
        visibleThreshhold: 150,
        title: "Drills",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner7_stoneInc2',
        cost: 500,
        id: 'upgrade7',
        buff: 2,
        buffType: 1,
        unlocked: false,
        visible: false,
        visibleThreshhold: 450,
        title: "Explosives",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner8_coalInc1',
        cost: 750,
        id: 'upgrade8',
        buff: 1.5,
        buffType: 2,
        unlocked: false,
        visible: false,
        visibleThreshhold: 650,
        title: "Deeper Mines",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner9_coalInc2',
        cost: 1000,
        id: 'upgrade9',
        buff: 2,
        buffType: 2,
        unlocked: false,
        visible: false,
        visibleThreshhold: 650,
        title: "Fracking",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner10_ironInc1',
        cost: 1500,
        id: 'upgrade10',
        buff: 2,
        buffType: 3,
        unlocked: false,
        visible: false,
        visibleThreshhold: 1000,
        title: "Scope Lens",
        flavorText: "It's getting quite warm out there...",

    },

    {
        name: 'miner11_ironInc2',
        cost: 2500,
        id: 'upgrade11',
        buff: 4,
        buffType: 3,
        unlocked: false,
        visible: false,
        visibleThreshhold: 2250,
        title: "Metalloid Fusion",
        flavorText: "It's getting quite warm out there...",

    },
]

var achievementsList = [
    {
        title: "The start of something new",
        flavorText: "A new beginning right? Make $10.",
        unlocked: false,
    },

    {
        title: "Pocket Change",
        flavorText: "The money is rolling in! Make $100.",
        unlocked: false,
    },

    {
        title: "Rollin' in Dough",
        flavorText: "Money bath! Make $1,000.",
        unlocked: false,
    },

    {
        title: "Scridge MacDonald",
        flavorText: "Avoiding copyright is key! Make $10,000.",
        unlocked: false,
    },

    {
        title: "The Businessman",
        flavorText: "Wow, you know your stuff! Make $100,000.",
        unlocked: false,
    },

    {
        title: "Adventure Capitalist",
        flavorText: "Sounds like some video game huh? Make $1,000,000.",
        unlocked: false,
    },

    {
        title: "Jaff Bozos",
        flavorText: "You are now richer than that one dude! Make $100,000,000.",
        unlocked: false,
    },

    {
        title: "The Wolf of Wall Street",
        flavorText: "Not even the US Federal Reserve stands a chance! Make $1,000,000,000.",
        unlocked: false,
    },

    {
        title: "The end of something old",
        flavorText: "The end of a beginning? You have so much wealth, reality itself is collapsing. Make $100,000,000,000.",
        unlocked: false,
    },

    {
        title: "The Engineer",
        flavorText: "Hey, it's the name of the game! Make $1,000,000,000,000.",
        unlocked: false,
    },

]  

let researchItems = [
    {
        name: 'gas',
        cost: 250,
        id: 'research1',
        unlockable: 0,
        unlocked: false,
        visible: false,
        visibleThreshhold: 100,
    },
]


/* FUNCTIONS */


window.onload = function loading() {
    window.alert("v0.38b");
    moneyDisplay.innerHTML = money;
    stoneDisplay.innerHTML = minerals.stone.amount;
    coalDisplay.innerHTML = minerals.coal.amount;
    ironDisplay.innerHTML = minerals.iron.amount;
}


function resourceTick(number, resourceInfluenced) {
	switch (resourceInfluenced) {
    	case 0:
        	money += number;
            moneyps = number;
            moneypsDisplay.innerHTML = moneyps.toFixed(2);
    		moneyDisplay.innerHTML = money.toFixed(2);
        
        break;
        
        case 1:
        	minerals.stone.amount += number * minerals.stone.multiplier;
            minerals.stone.ps = number * minerals.stone.multiplier;
            stonepsDisplay.innerHTML = minerals.stone.ps.toFixed(1);
    		stoneDisplay.innerHTML = minerals.stone.amount.toFixed(1);
            let oreChance = Math.floor(Math.random() * 10);

            if (oreChance > 3) {
            	minerals.coal.amount += number * minerals.coal.multiplier;
                minerals.coal.ps = number * minerals.coal.multiplier;
                coalpsDisplay.innerHTML = minerals.coal.ps.toFixed(1);
                coalDisplay.innerHTML = minerals.coal.amount.toFixed(1);
            }
            if (oreChance > 7) {
            	minerals.iron.amount += number * minerals.iron.multiplier;
                minerals.iron.ps = number * minerals.iron.multiplier;
                ironpsDisplay.innerHTML = minerals.iron.ps.toFixed(1);
                ironDisplay.innerHTML = minerals.iron.amount.toFixed(1);
            }


        break;

        case 2:
            rps = number * researcher.perSecond;
            rp += number;
            rpDisplay.innerHTML = number;
            rpsDisplay.innerHTML = number;
        break;

    }
};

function sellItem(item, resource) {

	switch (resource) {
    	case 0:
            money += minerals.stone.worth * minerals.stone.amount;
            minerals.stone.amount = 0;
            moneyDisplay.innerHTML = money.toFixed(2);
            stoneDisplay.innerHTML = minerals.stone.amount.toFixed(1);
        break;
        
    	case 1:
            money += minerals.coal.worth * minerals.coal.amount;
            minerals.coal.amount = 0;
            moneyDisplay.innerHTML = money.toFixed(2);
            coalDisplay.innerHTML = minerals.coal.amount.toFixed(1);
        break;
        
        case 2:
            money += minerals.iron.worth * minerals.iron.amount;
            minerals.iron.amount = 0;
            moneyDisplay.innerHTML = money.toFixed(2);
            ironDisplay.innerHTML = minerals.iron.amount.toFixed(1);
        break;

        case 3:
            if (minerals.coal.amount >= 20) {
                let coalToBeSold = coalPlant.amount * coalPlant.sellingAmount;
                console.log("Sold " + coalToBeSold + " coal!");
                money += minerals.coal.worth * coalToBeSold;
                minerals.coal.amount -= coalToBeSold;
                moneyDisplay.innerHTML = money.toFixed(2);
                coalDisplay.innerHTML = minerals.coal.amount.toFixed(1);
            } else {
                console.log("Not enough coal to sell!");
            }

    }

}


function move() {
    var elem = document.getElementById("myBar");   
    var width = 20;
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


function researchItem(item) {
    if (money >= researchItems[item].cost) {
        money -= researchItems[item].cost;
        moneyDisplay.innerHTML = money.toFixed(2);
        console.log("Research started!");

    }

}
function buyUpgrade(upgrade) {
    if (money >= upgrades[upgrade].cost) {
        console.log("Upgrade bought");
        money -= upgrades[upgrade].cost;
        moneyDisplay.innerHTML = money.toFixed(2);

        switch (upgrades[upgrade].buffType) {
            case 0:
                miner.perSecond *= 2;
                console.log(miner.perSecond);
                miner.production = miner.perSecond * miner.amount;
                document.getElementById(miner.productionDisp).innerHTML = miner.production.toFixed(1);
                break;

            case 1:
                minerals.stone.multiplier *= upgrades[upgrade].buff;
                console.log(minerals.stone.multiplier + " - stone multipler");
                break;

            case 2:
                minerals.coal.multiplier *= upgrades[upgrade].buff;;
                console.log(minerals.coal.multiplier + " - coal multiplier");
                break;
            case 3:
                minerals.iron.multiplier *= upgrades[upgrade].buff;;
                console.log(minerals.iron.multiplier + " - iron multiplier");
                break;
            default:
                break;
        }

        let removal = document.getElementById(upgrades[upgrade].id);
        removal.remove();

        addThing(upgrades[upgrade], 1);

    }
}

function buyBuilding(thing) {
    

	if (thing.multipleCosts == false) {
    //works out the cost of this cursor
    if(money >= thing.cost){                                   //checks that the player can afford the cursor
        thing.amount += 1;                                   //increases number of cursorslocked"
            
    	money -= thing.cost;
        //removes the cookies spent
        document.getElementById(thing.id).innerHTML = thing.amount;  //updates the number of cursors for the user
        moneyDisplay.innerHTML = money.toFixed(2);  //updates the number of cookies for the user
        
        thing.production = thing.perSecond * thing.amount;

        nextCost = Math.floor(thing.cost * Math.pow(1.1, thing.amount));  
        thing.cost = nextCost;     //works out the cost of the next cursor
        document.getElementById(thing.costDisp).innerHTML = nextCost;  //updates the cursor cost for the user
        document.getElementById(thing.productionDisp).innerHTML = thing.production.toFixed(2);
    
    }
    } else {
    if (money >= thing.cost && minerals.stone.amount >= thing.cost2 && minerals.iron.amount >= thing.cost3) {
    		thing.amount += 1;
    		money -= thing.cost;
            minerals.stone.amount -= thing.cost2;
            minerals.iron.amount -= thing.cost3;
            
            moneyDisplay.innerHTML = money.toFixed(2);
            stoneDisplay.innerHTML = minerals.stone.amount.toFixed(2);
            ironDisplay.innerHTML = minerals.iron.amount.toFixed(2);
            
            document.getElementById(thing.amountId).innerHTML = thing.amount;
            document.getElementById(thing.outputId).innerHTML = thing.amount * thing.sellingAmount;
            
            nextCost = Math.floor(thing.cost * Math.pow(1.1, thing.amount));  
            nextCost2 = Math.floor(thing.cost2 * Math.pow(1.1, thing.amount)); 
            nextCost3 = Math.floor(thing.cost3 * Math.pow(1.3, thing.amount)); 
            document.getElementById(thing.costDisp).innerHTML = nextCost;
            document.getElementById(thing.costDisp2).innerHTML = nextCost2;
            document.getElementById(thing.costDisp3).innerHTML = nextCost3;


            if (thing.buffs.has == true) {
                switch (thing.buffs.type) {
                    case 0:
                            let targetOfBuff = thing.buffs.target;

                            if (targetOfBuff == "coal") {
                                minerals.coal.worth += 1;
                                console.log("Coal Worth: " + minerals.coal.worth);
                                document.getElementById("coalWorth").innerHTML = minerals.coal.worth;
                            }
                        break;
                
                    default:
                        break;
                }
            }
      }
    }
}


/* ACHIVEMENTS AND UPGRADES FUNCTIONS */
function thingUnlocked(thing, check) {
    let type = check;
    thing.unlocked = true;
    var hasClass = $('.ach').hasClass('achieved');
    window.alert("Achievement Section");
    if (hasClass) return;
    //window.alert("Type = " + type);
    
      switch (type) {
        case 0:
          //window.alert(type + " worked");
          $('.title').html("Achievement Unlocked!");
          $('.detail').html(thing.title);
          $('.ach').addClass("achieved");
          setTimeout(function(){
            $('.ach').removeClass("achieved");
          },5000)   
          break; 
        case 1:
          //window.alert(type + " worked");
          $('.title').html("Upgrade Unlocked!");
          $('.detail').html(thing.title);
          $('.ach').addClass("achieved");
          setTimeout(function(){
            $('.ach').removeClass("achieved");
          },5000)   
    }
}

function addThing(thing, check2) {
    if (!thing.unlocked || check2 == 1) {
      thing.unlocked = true;
      // Create element
      //window.alert("In the addAchievement function");
      const achBox = document.createElement("div");
      achBox.innerHTML = "<h4>" + thing.title + "</h4><h6><i>" + thing.flavorText + "</i></h6>";
      achBox.classList.add("achievements");
      // Append to another element:
      switch (check2) {
        case 1:
          upgradeMain.container.appendChild(achBox); 
          upgradeMain.got +=1;
          //window.alert(upgradesGot + " Upgrades unlocked");
          //window.alert(upgradesGot + "Up");
          upgradeMain.counter.innerHTML = upgradeMain.got;
          thingUnlocked(thing, 1);
          break;
        case 0:
          achievementMain.container.appendChild(achBox);
          achievementMain.got += 1;
          achievementMain.counter.innerHTML = achievementMain.got;
          thingUnlocked(thing, 0);
        //window.alert(achievementsGot + " Ach");
  
      }
    }
  }
  

    

function unlockUpgrade(upgradeInQuestion) {
    if (upgrades[upgradeInQuestion].unlocked == false && upgrades[upgradeInQuestion].visible == false) {
        document.getElementById(upgrades[upgradeInQuestion].id).classList.remove("locked");
        document.getElementById(upgrades[upgradeInQuestion].id).classList.add("blur");
        upgrades[upgradeInQuestion].visible = true;
    } else if (upgrades[upgradeInQuestion].unlocked == false && upgrades[upgradeInQuestion].visible == true && money >= upgrades[upgradeInQuestion].visibleThreshhold) {
        document.getElementById(upgrades[upgradeInQuestion].id).classList.remove("blur");
        upgrades[upgradeInQuestion].unlocked = true;
        console.log("Upgrade " + upgradeInQuestion + " is unlocked!");
    }
}

function unlockResearch(riq) {
    if (researchItems[riq].unlocked == false && researchItems[riq].visible == false) {
        document.getElementById(researchItems[riq].id).classList.remove("locked");
        document.getElementById(researchItems[riq].id).classList.add("blur");
        researchItems[riq].visible = true;
    } else if (researchItems[riq].unlocked == false && researchItems[riq].visible == true && money >= researchItems[riq].visibleThreshhold) {
        document.getElementById(researchItems[riq].id).classList.remove("blur");
        researchItems[riq].unlocked = true;
        console.log("Research " + riq + " is unlocked!");
    }
}

function unlockBuilding(biq) {
    if (biq.unlocked == false && biq.visible == false) {
        document.getElementById(biq.id).classList.remove("locked");
        document.getElementById(biq.id).classList.add("blur");
        biq.visible = true;
    } else if (biq.unlocked == false && biq.visible == true && money >= biq.visibleThreshhold) {
        document.getElementById(biq.id).classList.remove("blur");
        biq.unlocked = true;
    }
}

function updateUpgrades() {
    // Buildings at the start of the game
    if (money >= 0) {
        unlockBuilding(researcher);
    }
    
    if (money >= 10) {
        addThing(achievementsList[0], 0);
    }
    if (money >= 25) {

        // upgrade 1
        unlockUpgrade(0);
    }

	if (money >= 50) {

        unlockUpgrade(5);
        // building 1

    }
    
    if (money >= 100) {
        unlockBuilding(coalPlant);
        unlockResearch(0);
        addThing(achievementsList[1], 0);
    }

    if (money >= 250) {
        // upgrade 2
        unlockUpgrade(1);
    }

    if (money >= 500) {

        //Fix later!
        unlockUpgrade(2);
        unlockUpgrade(3);
        unlockUpgrade(4);
        unlockUpgrade(6);
        unlockUpgrade(7);
        unlockUpgrade(8);
        unlockUpgrade(9);
        unlockUpgrade(10);
    }

    if (money >= 1000) {
        addThing(achievementsList[2], 0);
    }

    if (money >= 10000) {
        addThing(achievementsList[3], 0);
    }

    if (money >= 100000) {
        addThing(achievementsList[4], 0);
    }

    if (money >= 1000000) {
        addThing(achievementsList[5], 0);
    }

    if (money >= 100000000) {
        addThing(achievementsList[6], 0);
    }

    if (money >= 1000000000) {
        addThing(achievementsList[7], 0);
    }

    if (money >= 10000000000) {
        addThing(achievementsList[8], 0);
    }

    if (money >= 1000000000000) {
        addThing(achievementsList[9], 0);
    }






}

window.setInterval(function(){
	
	resourceTick(miner.production, 1);
    resourceTick(researcher.production, 2);
	
}, 1000);
        

window.setInterval(function(){
	
	updateUpgrades();
	
}, 5000);
        
window.setInterval(function(){
	
	sellItem(3, 3);
	
}, 10000);
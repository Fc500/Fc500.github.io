// VARIABLES

const buildingSection = document.getElementById("buildingsContainer");
const upgradeSection = document.getElementById("upgradesContainer");


// Resources

let money = {
    amount: 600000,
    amountPerSecond: 1,
    display: document.getElementById("resourceDisplay"),
    displayPerSecond: document.getElementById("resourceDisplayPerSecond")
}


// Buildings


const buildingsArray = [
    trumpet = {
        amount: 0,
        price: 3,
        priceIncrease: 1.1,
        output: 0.5,
        unlockedAt: 0,
        unlocked: false,
        ps: 0,
        html: {
            title: "Trumpet",
            flavorText: "A standard Instrument. Essential for any beginning band!",
            identifierAmount: 'trumpet1',
            identifierPrice: 'trumpet2',
        }
    },

    drums = {
        amount: 0,
        price: 30,
        priceIncrease: 1.2,
        output: 1,
        unlockedAt: 10,
        unlocked: false,
        ps: 0,
        html: {
            title: "Drums",
            flavorText: "Slightly less common, yet still essential. Funny how that works huh?",
            identifierAmount: 'drums1',
            identifierPrice: 'drums2',
        }
    },

    saxophone = {
        amount: 0,
        price: 60,
        priceIncrease: 1.5,
        output: 5,
        unlockedAt: 100,
        unlocked: false,
        ps: 0,
        html: {
            title: "Saxophone",
            flavorText: "More complicated instrument. Leads to more unique sounds!",
            identifierAmount: 'sax1',
            identifierPrice: 'sax2',
        }
    }
    
]


// Upgrades

const upgradesArray = [  
    beginOne = {
        price: 3,
        req: {
            unlockedAt: 0,
            unlocked: false,
            unlockedType: 0,
        },
        html: {
            title: "Orchestra Bands",
            flavorText: "The idea of a group of people playing music. From this, you'll build your empire.",
            index: "upgrade1",
        }
    },

    beginTwo = {
        price: 100000,
        req: {
            unlockedAt: 75000,
            unlocked: false,
            unlockedType: 0,
        },
        html: {
            title: "Marching Bands",
            flavorText: "An extension of the band that allows for even more possibilites!",
            index: "upgrade2",
        }
    },

    trumpetOne = {
        price: 100,
        req: {
            unlockedAt: 50, // What number the upgrade appears at
            unlocked: false,
            unlockedType: 1, // What varient of code runs for the upgrade (In this case, Instrument Upgrade)
            unlockedIndex: 0, // What instrument is affected
            buff: 1.2, // The amount of buff
        },
        html: {
            title: "Piccolo Trumpets",
            flavorText: "Improves the effectiveness of Trumpets by 1.2",
            index: "upgrade3",
        }
    },
    
    
]

// FUNCTIONS


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

function buyThing (index, resource, array, type, resource2, resource3) {
    switch (type) {
        case 0: // Ordinary building
            if (array[index].price <= resource.amount) {
                array[index].amount += 1;
                resource.amount -= array[index].price;
                array[index].price *= array[index].priceIncrease;
                document.getElementById(array[index].html.identifierAmount).innerHTML = array[index].amount + " in band";
                document.getElementById(array[index].html.identifierPrice).innerHTML = "$" + array[index].price.toFixed(1);
            }  
            break;
    
        case 1: // Upgrade
            if (array[index].price <= resource.amount) {
                if (array[index].html.index != 'upgrade1') {
                    let upgradeObj = document.getElementById(array[index].html.index);
                    array[index].amount += 1;
                    resource.amount -= array[index].price;
                    upgradeObj.remove();
                    buildingsArray[array[index].req.unlockedIndex].output *= array[index].req.buff;
                    window.alert("Success 1");
                }
                else {
                    let upgradeObj = document.getElementById(array[index].html.index);
                    array[index].amount += 1;
                    resource.amount -= array[index].price;
                    upgradeObj.remove();
                    document.getElementById("showDisplay").style.display = "block";
                    window.alert("Success 2");
                }
            }  
            break;
    }
}


function updateGame(resource) {
    for (let i = 0; i < buildingsArray.length; i++) {
        buildingsArray[i].ps = buildingsArray[i].amount * buildingsArray[i].output;
    }

    resource.amountPerSecond = buildingsArray[0].ps + buildingsArray[1].ps + buildingsArray[2].ps;
    resource.amount += resource.amountPerSecond;
    resource.display.innerHTML = "$" + numFormatter(resource.amount);
    resource.displayPerSecond.innerHTML = "$" + numFormatter(resource.amountPerSecond) + " per second";
}

function updateBuildingVisibility(array, resource) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].unlockedAt <= resource.amount && array[i].unlocked == false) {
            const buildingBox = document.createElement("div"); 
            buildingBox.innerHTML = "<div style='float: left; word-wrap: break-word; width: 65%; text-align: left;'><h3>" + array[i].html.title + "</h3><h6><i>" + array[i].html.flavorText + "</i></h6></div><div style='float: right; margin-left: 4%; text-align: right;'><h3 id='" + array[i].html.identifierAmount + "'>" + array[i].amount + " owned</h3><h4 id='" + array[i].html.identifierPrice + "'>" + array[i].price + "</h4></div>";
            buildingBox.classList.add("buildingBox");
            buildingSection.appendChild(buildingBox);
            array[i].unlocked = true;
            buildingBox.addEventListener("click", () => {
                buyThing(i, resource, buildingsArray, 0);
            });
        }
    }
}

function updateUpgrades() {
    for (let i = 0; i < upgradesArray.length; i++) {
        if (upgradesArray[i].req.unlocked == false) {
            switch (upgradesArray[i].req.unlockedType) {
                case 0:
                    if (upgradesArray[i].req.unlockedAt <= money.amount) {
                        const upgradeBox = document.createElement("div"); 
                        upgradesArray[i].req.unlocked = true;
                        upgradeBox.innerHTML = "<div style='float: left; word-wrap: break-word; width: 65%; text-align: left;'><h3>" + upgradesArray[i].html.title + "</h3><h6><i>" + upgradesArray[i].html.flavorText + "</i></h6></div><div style='float: right; margin-left: 4%; text-align: right;'><h4>" + upgradesArray[i].price + "</h4></div>";
                        upgradeBox.classList.add("buildingBox");
                        upgradeBox.setAttribute("id", upgradesArray[i].html.index);
                        upgradeSection.appendChild(upgradeBox);
                        upgradeBox.addEventListener("click", () => {
                            buyThing(i, money, upgradesArray, 1);
                        });
                    }
                    break;
            
                case 1:
                    if (upgradesArray[i].req.unlockedAt <= buildingsArray[upgradesArray[i].req.unlockedIndex].amount) {
                        const upgradeBox = document.createElement("div");    
                        upgradeBox.innerHTML = "<div style='float: left; word-wrap: break-word; width: 65%; text-align: left;'><h3>" + upgradesArray[i].html.title + "</h3><h6><i>" + upgradesArray[i].html.flavorText + "</i></h6></div><div style='float: right; margin-left: 4%; text-align: right;'><h4>" + upgradesArray[i].price + "</h4></div>";
                        upgradeBox.classList.add("buildingBox");
                        upgradeBox.setAttribute("id", upgradesArray[i].html.index);
                        upgradeSection.appendChild(upgradeBox);
                        upgradesArray[i].req.unlocked = true;
                        upgradeBox.addEventListener("click", () => {
                            buyThing(i, money, upgradesArray, 1);
                        });
                    }
                    break;
            }
        }
    }
}



function switchFunction(chosenSection) {
    let sections = document.getElementsByClassName("section");
    let sidenavSections = document.getElementsByClassName("switch");

    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        sidenavSections[i].style.fontWeight = "normal";      
    } 
    sections[chosenSection].style.display = "block";
    sidenavSections[chosenSection].style.fontWeight = "bold";
}



setInterval(updateGame, 1000, money);
setInterval(updateBuildingVisibility, 1000, buildingsArray, money);
setInterval(updateUpgrades, 1000);

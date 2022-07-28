class instrument {
    constructor(strength, weakness, atk, def) {
        this.strength = strength;
        this.weakness = weakness;
        this.atk = atk;
        this.def = def;
    }
}

const brass = new instrument('woodwind', 'percussion', 25, 75);
const percussion = new instrument('brass', 'woodwind', 50, 50);
const woodwind = new instrument('percussion', 'brass', 75, 25);


let playerInfo = {
    display: document.getElementById("playerType"),
    choice: ""
}

let playerStats = {
}

let opponentInfo = {
    display: document.getElementById("opponentType"),
    choice: ""
}


function selectType (type, select) {
    playerInfo.choice = type;
    playerInfo.display.innerHTML = type;

    switch (select) {
        case 0:
            playerStats = Object.assign({}, brass);  
            break;
    
        case 1:
            playerStats = Object.assign({}, percussion);
            break;
        
        case 2:
            playerStats = Object.assign({}, woodwind);
            break;
    }

    playerStats.baseXP = 5;

    window.alert(playerStats.strength);
    window.alert(playerStats.baseXP);

}


function battleInfo () {

}

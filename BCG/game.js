// Player

let playersTeam = [

]

class trumpet {
    constructor(skill) {
        this.skill = skill;
        attack = 100;
        defense = 100;
    }

}

function navbarFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function switchFunction(chosenSection) {
    let sections = document.getElementsByClassName("section");
    let sidenavSections = document.getElementsByClassName("navChild");

    for (let i = 0; i < sections.length; i++) {
        //sections[i].style.display = "none";
        sidenavSections[i].style.fontWeight = "normal";      
    } 
    sections[chosenSection].style.display = "block";
    sidenavSections[chosenSection].style.fontWeight = "bold";
}
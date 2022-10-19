// Variables

let money = 100000;
let influence = 100;

const moneyDisp = document.getElementById("money");
const influenceDisp = document.getElementById("influence");
const bandDisp = document.getElementById("bandMembers");
const scoutResults = document.getElementById("scoutResults");
const selectBandMembers = document.getElementById("selectBandMembers");

// Player

let playerBand = [];
let concertParticipants = [];
let instrumentsAvalible = ["Recorder", "Bells"];
let venuesAvalible = ["Field"];
var firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "David", "Elizabeth", "John", "Adam"];
var lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Gardner", "Trench"];

window.onload = function loading() {
    window.alert("v0.49a");
    moneyDisp.innerHTML = numFormatter(money);
    influenceDisp.innerHTML = influence;

}



function generateRandom(min, max) {

    // find diff
    let difference = max - min;
  
    // generate random number 
    let rand = Math.random();
  
    // multiply with difference 
    rand = Math.floor( rand * difference);
  
    // add with min value 
    rand = rand + min;
  
    return rand;
  }
  
  function generateCardValues() {
    let seed = generateRandom(1000, 10000);
    console.log(seed);
    let splitSeed = String(seed).split("").map((seed)=>{
      return Number(seed);
    })
    
    let fnr = Math.floor(Math.random() * firstNames.length);
    let lnr = Math.floor(Math.random() * lastNames.length);
    let seedName = firstNames[fnr] + " " + lastNames[lnr];
  
  
    let seedPotential = splitSeed[0];
    let seedPotentialDisp;
    let seedSkill = splitSeed[1];
    let seedOdds = splitSeed[2];
    let seedPrice = splitSeed[3];
    let seedInstInt = Math.floor(Math.random() * instrumentsAvalible.length);
    let seedInst = instrumentsAvalible[seedInstInt];
  
    const seedTotal = seedPotential + seedSkill + seedOdds + seedPrice;
  
  
    if (seedTotal >= 0 && seedTotal <= 16) {
      seedPotential = 1;
      seedPotentialDisp = "&#9733; &#9734; &#9734; &#9734;";
      seedSkill *= 4;
      seedOdds = "Common";
      seedPrice *= 1400;
    } else if (seedTotal >= 17 && seedTotal <= 28) {
      seedPotential = 2;
      seedPotentialDisp = "&#9733; &#9733; &#9734; &#9734;";
      seedSkill *= 7;
      seedOdds = "Uncommon";
      seedPrice *= 2500;
  
    }  else if (seedTotal >= 29 && seedTotal <= 34) {
      seedPotential = 3;
      seedPotentialDisp = "&#9733; &#9733; &#9733; &#9734;";
      seedSkill *= 9;
      seedOdds = "Rare";
      seedPrice *= 3700;
    } else if (seedTotal <= 36) {
      seedPotential = 4;
      seedPotentialDisp = "&#9733; &#9733; &#9733; &#9733;";
      seedSkill *= 10;
      seedOdds = "Legendary";
      seedPrice *= 4200;
    }

    if (seedPrice == 0) {
      seedPrice = 5000;
    }
  
    console.log("split Seed (0): " + splitSeed[0]);
    console.log("split Seed (1): " + splitSeed[1]);
    console.log("split Seed (2): " + splitSeed[2]);
    console.log("split Seed (3): " + splitSeed[3]);
    console.log("seed price: " + seedPrice);
    console.log("seed skill: " + seedSkill);
    console.log("seed potential: " + seedPotential);
    console.log("seed Odds: " + seedOdds);
  
  
  
    return [seedName, seedPrice, seedOdds, seedSkill, seedPotential, seedPotentialDisp, seedInst, seed];
  
  }
  
  
  
  
  function scoutNewPlayer(name, price, seed, skill, odds, potential, potentialDisp, inst) {
    console.log(name);
  
    if (money >= price) {
    
      window.alert("success!")
      var cardToRemove = document.getElementById(seed);
      cardToRemove.remove();
      money -= price;
      moneyDisp.innerHTML = numFormatter(money);
      bandDisp.innerHTML += `<tr><td id="${seed}">${name}</td><td>${skill}</td><td>${odds}</td><td>${potentialDisp}</td><td>${inst}</td></tr>`;
  
      playerBand.push({
        name: name,
        skill: skill,
        odds: odds,
        potential: potential,
        potentialDisp: potentialDisp,
        inst: inst,
      });
  
      console.log(playerBand);
  
  
    } else {
      window.alert("Not enough money!");
    } 
  
  }
  
  function scoutPlayers(amount) {
    scoutResults.innerHTML = "";
      for (let i = 0; i < amount; i++) {
        const cardBox = document.createElement("div"); 
        let generatedValues = generateCardValues();
  
  
        const cardName = generatedValues[0];
        const cardPrice = generatedValues[1];
        const cardOdds = generatedValues[2];
        const cardSkill = generatedValues[3];
        const cardPotential = generatedValues[4];
        const cardPotentialDisp = generatedValues[5];
        const cardInst = generatedValues[6];
        const cardSeed = generatedValues[7];

        cardBox.innerHTML = `<div class="container" id="${cardSeed.toString()}">
            <button onclick="scoutNewPlayer('${cardName}', ${cardPrice}, ${cardSeed}, ${cardSkill}, '${cardOdds}', ${cardPotential}, '${cardPotentialDisp}', '${cardInst}')" class="card-button poppins" style="width: 90px;">Scout</button>
            <p><span>${cardName.toString()}</span>- ${cardInst} player</p>
            <h4>$${numFormatter(cardPrice)}</h4>
            <div style="text-align: left">
              <p class="container-item">Level: ${cardSkill.toString()}</p>
              <p class="container-item">Potential: ${cardPotentialDisp}</p>
              <p class="container-item">Rarity: ${cardOdds}</p>
            </div>
          </div>`
        scoutResults.appendChild(cardBox);
      }
  }

function loadingResults(amount) {
    let multiplier = amount * 10;
    if (influence >= multiplier) {
      scoutResults.innerHTML = "<div class='spinner'></div><br><p>Scouting...</p>";
      influence -= multiplier;
      influenceDisp.innerHTML = influence;
      setTimeout(function() {
        scoutPlayers(amount);
      }, 1500);
    }
  }


function switchFunction(chosenSection) {
    let sections = document.getElementsByTagName("section");
  
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";     
    } 
    sections[chosenSection].style.display = "block";
  }

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
  

  const navItems = document.getElementsByClassName('nav-item');

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        for(let j = 0; j < navItems.length; j++) 
            navItems[j].classList.remove('active');
        
        navItems[i].classList.add('active');
    });
}



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

let concertVenue, concertTicketPrice, concertSize, concertLength, concertAdvertising;

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  
  // Hide the current tab:
  x[currentTab].style.display = "none";
  let infoFail = false;
  
  switch (currentTab) {
    case 0:
      let venueVal = document.getElementById("venuebar").value;
      if (venueVal == 0) {
        infoFail = true;
      } else {
        concertVenue = venuesAvalible[venueVal - 1];
      }
      break;
    case 1:
      concertTicketPrice = slider[0].value;
      break;
    case 2:
      concertSize = slider[1].value;
      break;
    case 3:
      concertLength = slider[2].value;
      break;
    case 4:
      concertAdvertising = slider[3].value;
      if (playerBand.length == 0) {
        switchFunction(0);
        navItems[2].classList.remove('active');
        navItems[0].classList.add('active');
        infoFail = true;

        window.alert("You do not have enough players!");
      }
      for (let i = 0; i < playerBand.length; i++) {
        const cardBox = document.createElement("div");
        cardBox.innerHTML = `<div class="container" id="${i * 489723}">
          <button onclick="registerForConcert(${i * 489723})" class="card-button poppins" style="width: 90px;">Select</button>
          <p><span>${playerBand[i].name}</span> ${playerBand[i].inst} player</p>
          <div style="text-align: left>
            <p class="container-item">Level: ${playerBand[i].skill}</p>
            <p class="container-item">Potential: ${playerBand[i].potentialDisp}</p>
          </div>
        </div>`;
        selectBandMembers.appendChild(cardBox);
      }
      break;

    case 5:
      if (concertParticipants.length == 0) {
        infoFail = true;
      }
      selectBandMembers.innerHTML = "";
      break;
  }
  if (!infoFail) {
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
      // ... the form gets submitted:
      window.alert("done!");

      currentTab = 0;
      hostConcert();

      document.getElementById("venue").innerHTML = concertVenue;
    
    document.getElementById("price").innerHTML = concertTicketPrice;
    
    document.getElementById("chairs").innerHTML = concertSize;
    
    document.getElementById("length").innerHTML = concertLength;

    document.getElementById("advertising").innerHTML = concertAdvertising;

    document.getElementById("reqForm").style.display = "none";
    }
    
    // Otherwise, display the correct tab:
    showTab(currentTab);
    } else {
    window.alert("Please select a venue!");
    showTab(currentTab);
    }
    
  }

  function hostConcert() {
    console.log("Work in progress!");
  }
  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }


function registerForConcert(arrayNum) {
  concertParticipants.push(playerBand[arrayNum]);
  console.log(concertParticipants);
  var participantToRemove = document.getElementById(arrayNum);
  participantToRemove.remove();
  document.getElementsByClassName("demo")[4].innerHTML = concertParticipants.length + " / " + playerBand.length;
}


  var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



var slider = document.getElementsByClassName("myRange");
var output = document.getElementsByClassName("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider[0].oninput = function() {
  output[0].innerHTML = "$ " + this.value;
}

slider[1].oninput = function() {
  output[1].innerHTML = this.value + " chairs"; 
}

slider[2].oninput = function() {
  output[2].innerHTML = this.value + " songs"; 
}



slider[3].oninput = function() {
  output[3].innerHTML = "$ " + this.value; 
}




if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
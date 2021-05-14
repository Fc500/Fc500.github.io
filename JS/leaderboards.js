
var modal = "";

window.onload = function starting() {
  disclaimer(); 
  setUserInfo();
  setUsernamePosition();
  if (localStorage.getItem("loggedin") != "true") {
    setModal();
  }
 }

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('check');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      window.alert('Checked');
    } else {
      // do that
      window.alert('Not checked');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      window.alert('Checked');
    } else {
      // do that
      window.alert('Not checked');
    }
  });
});

                                         
function setUsernamePosition() {
  if(localStorage.getItem("username") != null) {
    setPosLeaderboardOne();
    setPosLeaderboardTwo();
  }
}

function setPosLeaderboardOne() {
    window.alert("Welcome back " + localStorage.getItem("username") + "!");
    if(localStorage.getItem("username") == "Giginess") {
      document.getElementById("Giginess").style.color = "gold";
     } else if (localStorage.getItem("username") == "Deetusy3letus") {
      document.getElementById("Deetusy3letus").style.color = "gold";
     } else if (localStorage.getItem("username") == "ItzNisha") {
      document.getElementById("ItzNisha").style.color = "gold";
     } else if (localStorage.getItem("username") == "R3alityy") {
      document.getElementById("R3alityy").style.color = "gold";
     } else if (localStorage.getItem("username") == "QwertZer") {
      document.getElementById("QwertZer").style.color = "gold";
     } else if (localStorage.getItem("username") == "MarkTheHeroic") {
      document.getElementById("MarkTheHeroic").style.color = "gold";
     } else if (localStorage.getItem("username") == "Mohdaman") {
      document.getElementById("Mohdaman").style.color = "gold";
     } else if (localStorage.getItem("username") == "Sheepshadow") {
      document.getElementById("Sheepshadow").style.color = "gold";
     } else if (localStorage.getItem("username") == "Fc500") {
      document.getElementById("Fc500").style.color = "gold";
      document.getElementById("CrSb").style.color = "white";
     } else if (localStorage.getItem("username") == "AddisonJudah") {
      document.getElementById("AddisonJudah").style.color = "gold";
      document.getElementById("CrSb").style.color = "white";
     } else if (localStorage.getItem("username") == "zSilveryz") {
      document.getElementById("zSilveryz").style.color = "gold";
      document.getElementById("CrSb").style.color = "white";
     } else if (localStorage.getItem("username") == "Dar1nGD") {
      document.getElementById("Dar1nGD").style.color = "gold";
      document.getElementById("CrSb").style.color = "white";
     } else if (localStorage.getItem("username") == "CrSb") {
      document.getElementById("CrSb").style.backgroundColor = "gold";
      document.getElementById("CrSb").style.color = "white";
     }
}

function setPosLeaderboardTwo() {
if(localStorage.getItem("username") == "Giginess") {
      document.getElementById("Giginess2").style.color = "gold";
     } else if (localStorage.getItem("username") == "Deetusy3letus") {
      document.getElementById("Deetusy3letus2").style.color = "gold";
     } else if (localStorage.getItem("username") == "ItzNisha") {
      document.getElementById("ItzNisha2").style.color = "gold";
     } else if (localStorage.getItem("username") == "R3alityy") {
      document.getElementById("R3alityy2").style.color = "gold";
     } else if (localStorage.getItem("username") == "QwertZer") {
      document.getElementById("QwertZer2").style.color = "gold";
     } else if (localStorage.getItem("username") == "MarkTheHeroic") {
      document.getElementById("MarkTheHeroic2").style.color = "gold";
     } else if (localStorage.getItem("username") == "Mohdaman") {
      document.getElementById("Mohdaman2").style.color = "gold";
     } else if (localStorage.getItem("username") == "Sheepshadow") {
      document.getElementById("Sheepshadow2").style.color = "gold";
     } else if (localStorage.getItem("username") == "Fc500") {
      document.getElementById("Fc5002").style.color = "gold";
     } else if (localStorage.getItem("username") == "AddisonJudah") {
      document.getElementById("AddisonJudah2").style.color = "gold";
     } else if (localStorage.getItem("username") == "zSilveryz") {
      document.getElementById("zSilveryz2").style.color = "gold";
     } else if (localStorage.getItem("username") == "Dar1nGD") {
      document.getElementById("Dar1nGD2").style.color = "gold";
     } else if (localStorage.getItem("username") == "CrSb") {
      document.getElementById("CrSb2").style.color = "gold";
     }
}

// The Dislcaimer

function disclaimer() {
  if (localStorage.getItem("disclaimer") === "true") {   
       localStorage.setItem("disclaimer", "true");
  } else {
     window.alert("DISCLAIMER\nThis page is still a work in progress :)");
     localStorage.setItem("disclaimer", "true");
   }  
}

// Getting user info
function setUserInfo() {
  if (localStorage.getItem("username") != null) {
  document.getElementById("p2").innerHTML = localStorage.getItem("username");
  modal = document.getElementById('id02');
  document.getElementById("id03").setAttribute("onclick", "document.getElementById('id02').style.display='block'");
  document.getElementById("id04").innerHTML = "Hello " + localStorage.getItem("username") + "!";
  }
}

// By default sets the modal to be displayed to 01
function setModal() {
  modal = document.getElementById('id01');
  document.getElementById("id03").setAttribute("onclick", "document.getElementById('id01').style.display='block'");
}
 

function showAndHideLists() {
  var lists = document.getElementById("listMaster");
  if (lists.style.display === "none") {
    lists.style.display = "block";
    document.getElementById("pointsSystem").style.display = "none";
    document.getElementById("changelog").style.display = "none";
  } else {
    lists.style.display = "none";
  }
}

function showAndHideListOne() {
  var listOne = document.getElementById("listOne");
  if (listOne.style.display === "none") {
    listOne.style.display = "block";
    document.getElementById("listTwo").style.display = "none";
  } else {
    listOne.style.display = "none";
  }
}

function showAndHideListTwo() {
  var listTwo = document.getElementById("listTwo");
  if (listTwo.style.display === "none") {
    listTwo.style.display = "block";
    document.getElementById("listOne").style.display = "none";
  } else {
    listTwo.style.display = "none";
  }
}


function showAndHidePoints() {
  var points = document.getElementById("pointsSystem");
  if (points.style.display === "none") {
    points.style.display = "block";
    document.getElementById("listMaster").style.display = "none";
    document.getElementById("changelog").style.display = "none";
  } else {
    points.style.display = "none";
  }
}

function showAndHideChangelog() {
  var change = document.getElementById("changelog");
  if (change.style.display === "none") {
    change.style.display = "block";
    document.getElementById("listMaster").style.display = "none";
    document.getElementById("pointsSystem").style.display = "none";
  } else {
    change.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
     
      function getInfo() {
    var usernameInfo = document.login.uname.value;
    var passwordInfo = document.login.psw.value;
    localStorage.setItem("username", usernameInfo);
    localStorage.setItem("password", passwordInfo);
    localStorage.setItem("loggedin", "true");
    display();
  } 
      
  function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<ul><li><b>USERNAME: </b>" + document.login.uname.value;
  message += "<li><b>PASSWORD: </b>" + document.login.psw.value + "</ul>";
  DispWin.document.write(message);
}

function resetUserInfo() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("loggedin");
  modal = document.getElementById('id01');
  document.getElementById("id03").setAttribute("onclick", "document.getElementById('id01').style.display='block'");
  location.reload();
}

var coll = document.getElementsByClassName("collapsible");
var a;
for (a = 0; a < coll.length; a++) {
  coll[a].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
}); }

/* function toggleTheme() {
            // Obtains an array of all <link>
            // elements.
            // Select your element using indexing.
            
  
            // Change the value of href attribute 
            // to change the css sheet.
            if (theme.getAttribute('href') == '../CSS/leaderboard.css') {
                theme.setAttribute('href', '../CSS/leaderboarddark.css');
                localStorage.setItem('theme', '../CSS/leaderboarddark.css');
                document.location.reload();
            } else {
                theme.setAttribute('href', '../CSS/leaderboard.css');
                localStorage.setItem('theme', '../CSS/leaderboard.css');
                document.location.reload();
            }
        } */

 function toggleThemeTwo() {
            // Obtains an array of all <link>
            // elements.
            // Select your element using indexing.
            var themeTwo = document.getElementsByTagName('link')[0];
  
            // Change the value of href attribute 
            // to change the css sheet.
            if (themeTwo.getAttribute('href') == '../CSS/leaderboard.css') {
                themeTwo.setAttribute('href', '../CSS/leaderboarddark.css');
            } else {
                themeTwo.setAttribute('href', '../CSS/leaderboard.css');
            }
        }


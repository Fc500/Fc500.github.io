var modal = "";

window.onload = function starting() {
  disclaimer(); 
  setUserInfo();
  setUsernamePosition();
  if (localStorage.getItem("loggedin") != "true") {
    setModal();
  }
 }

function setUsernamePosition() {
if(localStorage.getItem("username") != null) {
    window.alert("Welcome back " + localStorage.getItem("username") + "!");
    if(localStorage.getItem("username") == "Giginess") {
      document.getElementById("Giginess").style.color = "gold";
     } else if (localStorage.getItem("username") == "Deetusy3letus") {
      document.getElementById("Deetusy3letus").style.color = "gold";
     } else if (localStorage.getItem("username") == "ItzNisha") {
      document.getElementById("ItzNisha").style.color = "gold";
     } else if (localStorage.getItem("username") == "R3alityy") {
      document.getElementById("R3alityy").style.color = "gold";
     }
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
  if (localStorage.getItem("username") != "") {
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
  var lists = document.getElementById("listOne");
  if (lists.style.display === "none") {
    setUsernamePosition();
    lists.style.display = "block";
    document.getElementById("pointsSystem").style.display = "none";
    document.getElementById("changelog").style.display = "none";
  } else {
    lists.style.display = "none";
  }
}

function showAndHidePoints() {
  var points = document.getElementById("pointsSystem");
  if (points.style.display === "none") {
    points.style.display = "block";
    document.getElementById("listOne").style.display = "none";
    document.getElementById("changelog").style.display = "none";
  } else {
    points.style.display = "none";
  }
}

function showAndHideChangelog() {
  var change = document.getElementById("changelog");
  if (change.style.display === "none") {
    change.style.display = "block";
    document.getElementById("listOne").style.display = "none";
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


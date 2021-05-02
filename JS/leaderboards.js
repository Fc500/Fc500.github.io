var modal = "";

window.onload = function Disclaimer() {
  disclaimer(); 
  setUserInfo();
  if (localStorage.getItem("loggedin") != "true") {
    setModal();
    setUserPosition();
  } else {
    setUserPosition();
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
      function showAndHidePoints() {
    var x = document.getElementById('pointsSystem');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}   

function showAndHideChangelog() {
    var y = document.getElementById('changelog');
    if (y.style.display == 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
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

function setUserPosition() {
  if (localStorage.getItem("username") == "Giginess") {
    document.getElementById("Giginess").style.color = "gold";
  } else if (localStorage.getItem("username") == "Deetusy3letus" {
    document.getElementById("Deetusy3letus").style.color = "gold";
  }
}

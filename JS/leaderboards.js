var modal = "";

window.onload = function Disclaimer() {
  disclaimer(); 
  setUserInfo();
  if (localStorage.getItem("loggedin") != "true") {
    setModal();
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
  var points = document.getElementById("pointsSystem");
  var change = document.getElementById("changelog");
  if (lists.style.display === "none") {
    lists.style.display = "block";
  } else {
    lists.style.display = "none";
  }
}

function showAndHidePoints() {
  var lists = document.getElementById("listOne");
  var points = document.getElementById("pointsSystem");
  var change = document.getElementById("changelog");
  if (points.style.display === "none") {
    points.style.display = "block";
  } else {
    points.style.display = "none";
  }
}

function showAndHideChangelog() {
  var lists = document.getElementById("listOne");
  var points = document.getElementById("pointsSystem");
  var change = document.getElementById("changelog");
  if (change.style.display === "none") {
    change.style.display = "block";
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


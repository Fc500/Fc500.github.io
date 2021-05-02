

window.onload = function Disclaimer() {
  disclaimer(); 
  setUserInfo();
 }

// The Dislcaimer

function disclaimer() {
  if (localStorage.getItem("disclaimer") === "true") {   
       localStorage.setItem("disclaimer", "true");
       window.alert("Would you like to load your data?");  
  } else {
     window.alert("DISCLAIMER\nThis page is still a work in progress :)");
     localStorage.setItem("disclaimer", "true");
   }  
}

function setUserInfo() {
  document.getElementById("p2").innerHTML = localStorage.getItem("username");
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

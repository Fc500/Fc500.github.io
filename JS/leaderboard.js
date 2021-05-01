 /* var modal = ""; */
 
 window.onload = function Disclaimer() { 
   /*if (localStorage.getItem("disclaimer") === "true") {
       
       localStorage.setItem("disclaimer", "true");
   } else {
     window.alert("DISCLAIMER\nThis page is still a work in progress :)");
     localStorage.setItem("disclaimer", "true");
   }
   loginCheck();
   accountSwitching(); */
   alert("please work...");
  }  
  
  
function lastHope() {
  alert("help me");
}
function ShowAndHidePoints() {
    var x = document.getElementById('pointsSystem');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}   

function ShowAndHideChangelog() {
    var y = document.getElementById('changelog');
    if (y.style.display == 'none') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
}
  
  // Get the modal
  function accountSwitching() {
    if (localStorage.getItem("loggedin") === "true") {
        modal = document.getElementById('id02');
        document.getElementById("id03").setAttribute("onclick", "document.getElementById('id02').style.display='block'");
        window.alert("Test I\nYou are logged in! Welcome " + localStorage.getItem("username"));
    } else {
       modal = document.getElementById('id01');
        window.alert("Test II\nYou are not logged in!");
    }
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  
  function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
  message = "<ul><li><b>USERNAME: </b>" + document.login.uname.value;
  message += "<li><b>PASSWORD: </b>" + document.login.psw.value + "</ul>";
  DispWin.document.write(message);
}
  
  function getInfo() {
    var usernameInfo = document.login.uname.value;
    var passwordInfo = document.login.psw.value;
    localStorage.setItem("username", usernameInfo);
    localStorage.setItem("password", passwordInfo);
    choosePlayer();
  }
  
  function choosePlayer() {
    if (localStorage.getItem("username") === "Fc500") {
     document.getElementById("p2").innerHTML = "Hello " + localStorage.getItem("username");
     window.alert("Login Sucessful! Welcome" + localStorage.getItem("username");
     localStorage.setItem("loggedin", "true");
    } 
  }
  
  function loginCheck() {
    if (localStorage.getItem("loggedin") === "true") {
        document.getElementById("p2").innerHTML = "Hello Fc500!";
        window.alert("Welcome back Fc500! :)");
    }
  }
  

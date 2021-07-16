var home = document.getElementById("home");
var shows = document.getElementById("shows");
var catagories = document.getElementById("catagories");
var people = document.getElementById("people");

shows.style.display = "none";
catagories.style.display = "none";
people.style.display = "none";

window.alert("Hi! Welcome to GDTV Beta! Enjoy the website :)");

function showHome() {
    if (home.style.display === "none") {
      home.style.display = "block";
      shows.style.display = "none";
      catagories.style.display = "none";
      people.style.display = "none";
    } else {
      home.style.display = "none";
    }
  }

  function showShows() {
    if (shows.style.display === "none") {
      shows.style.display = "block";
      home.style.display = "none";
      catagories.style.display = "none";
      people.style.display = "none";
    } else {
      shows.style.display = "none";
    }
  }

  function showCatagories() {
    if (catagories.style.display === "none") {
      catagories.style.display = "block";
      home.style.display = "none";
      shows.style.display = "none";
      people.style.display = "none";
    } else {
      catagories.style.display = "none";
    }
  }

  function showPeople() {
    if (people.style.display === "none") {
      people.style.display = "block";
      home.style.display = "none";
      shows.style.display = "none";
      catagories.style.display = "none";
    } else {
      people.style.display = "none";
    }
  }

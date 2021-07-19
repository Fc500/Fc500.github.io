
var catagories = document.getElementById("Catagories");
var home = document.getElementById("Home");
var shows = document.getElementById("Shows");
var settings = document.getElementById("Settings");
var channels = document.getElementById("Channels");
var search = document.getElementById("Search");



// Get the modal
var credits = document.getElementById("creditsScene");
// Get the button that opens the modal
var openCredits = document.getElementById("creditsBtn");
// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
openCredits.onclick = function() {
  credits.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  credits.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == credits) {
    credits.style.display = "none";
  }
}

function showCatagories() {
    if (catagories.style.display === "none") {
      catagories.style.display = "block";
      home.style.display = "none";
      shows.style.display = "none";
      settings.style.display = "none";
      channels.style.display = "none";
      search.style.display = "none";
    } else {
      catagories.style.display = "none";
    }
  }

  function showHome() {
    if (home.style.display === "none") {
      home.style.display = "block";
      catagories.style.display = "none";
      shows.style.display = "none";
      settings.style.display = "none";
      channels.style.display = "none";
      search.style.display = "none";
    } else {
      home.style.display = "none";
    }
  }

  function showShows() {
    if (shows.style.display === "none") {
      shows.style.display = "block";
      catagories.style.display = "none";
      home.style.display = "none";
      settings.style.display = "none";
      channels.style.display = "none";
      search.style.display = "none";
    } else {
      shows.style.display = "none";
    }
  }


  function showSettings() {
    if (settings.style.display === "none") {
      settings.style.display = "block";
      catagories.style.display = "none";
      home.style.display = "none";
      shows.style.display = "none";
      channels.style.display = "none";
      search.style.display = "none";
    } else {
      settings.style.display = "none";
    }
  }

  function showChannels() {
    if (channels.style.display === "none") {
      channels.style.display = "block";
      catagories.style.display = "none";
      home.style.display = "none";
      shows.style.display = "none";
      settings.style.display = "none";
      search.style.display = "none";
    } else {
      channels.style.display = "none";
    }
  }

  function showSearch() {
    if (search.style.display === "none") {
      search.style.display = "block";
      catagories.style.display = "none";
      home.style.display = "none";
      shows.style.display = "none";
      settings.style.display = "none";
    } else {
      search.style.display = "none";
    }
  }





// JavaScript code
function search_animal() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');

	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";		
		}
	}
}




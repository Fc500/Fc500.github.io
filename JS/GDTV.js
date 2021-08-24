// Update
window.onload = function starting() {
	window.alert("version 0.42 is working!");
	generateVideos(0, 0, 0);
	generateVideos(0, 1, 1); 
	generateVideos(0, 2, 2);
  if (localStorage.getItem("theme") != null) {
    checkTheme();
  }
}

var video_container = document.getElementsByClassName('sections' );
var add_videos;

// Full Array example
// const videos = [[["video1", "video2"], ["video3", "video4"]], [["video3, video 4"]]] 

// Main Video Array

const videos = new Array ();

// Shows

videos[0] = new Array ();

// GD Legends
videos[0][0] = new Array ("https://www.youtube-nocookie.com/embed/-Pl8cHENkDE", "https://www.youtube-nocookie.com/embed/tKNIlmXtJT0", "https://www.youtube-nocookie.com/embed/dQqNNSuKCQk", "https://www.youtube-nocookie.com/embed/TQY4VNumbt8");

// Creator Battles
videos[0][1] = new Array ("https://www.youtube-nocookie.com/embed/8mCTT5hTXXE", "https://www.youtube-nocookie.com/embed/Y0Rx3yHaHps", "https://www.youtube-nocookie.com/embed/DdiWSK4Ac5I", "https://www.youtube-nocookie.com/embed/S-5pyDS_BK0", "https://www.youtube-nocookie.com/embed/NO2GNcUVxYk");

// Level Racing
videos[0][2] = new Array ("https://www.youtube-nocookie.com/embed/gii6XayxZgY", "https://www.youtube-nocookie.com/embed/gNgpr3S8P-k", "https://www.youtube-nocookie.com/embed/pCq_MkpHtJI", "https://www.youtube-nocookie.com/embed/EmIjP5WPhFk");

// Video Section 2
videos[1] = new Array ();

// Video Section 2 Subesection
videos[1][0] = new Array ();
 
var remove_function = document.getElementsByClassName("generator");

var barlow = document.getElementsByClassName("barlow");




function generateVideos(array, arrsection, section) {

var arrayLength = videos[array][arrsection].length;

for (var i = 0; i < arrayLength; i++) {
    add_videos = document.createElement('iframe');
    add_videos.height = 400
    add_videos.width = 350
    add_videos.frameborder = 0;
    add_videos.src = videos[array][arrsection][i];
    
    //Do something

    video_container[section].appendChild(add_videos);
        }
/* remove_function[generator].onclick = function() {
	window.alert("Section " + generator + " has been generated."); 
	} */
}


// Switching between sections

 function toggleVisibility(c1, c2, c3, c4, c5, c6) {
  var x = document.getElementsByClassName("main");
  if (x[c1].style.display == "none") {
    x[c1].style.display = "block";
    x[c2].style.display = "none";
    x[c3].style.display = "none"; 
    x[c4].style.display = "none"; 
    x[c5].style.display = "none"; 
    x[c6].style.display = "none"; 
	  
  } else {
    x[c1].style.display = "none";	  
  }
}

function setBackgroundColor(color, txtcolor, navcolor, theme) {
document.body.style.backgroundColor = color;
document.body.style.color = txtcolor;
var sidenav = document.getElementsByClassName("sidenav");
sidenav[0].style.backgroundColor = navcolor;
setDefaultTheme(theme);
}

function setDefaultTheme(theme) {
  localStorage.setItem("theme", theme);
}

function checkTheme() {
  let theme = localStorage.getItem("theme");
  if (theme == 'light') {
    setBackgroundColor('#f5f3f0', 'black', '#1f1e1e');
  } else if (theme == 'dark') {
    setBackgroundColor('black', '#d9d9d9', '#1d1d1f');
  } else if (theme == 'blue') {
    setBackgroundColor('#0f0029', '#e8dbff', '#242442');
  } else {
    setBackgroundColor('#33354a', 'white', 'black');
  }
  window.alert("Theme set to " + theme + "!");
}

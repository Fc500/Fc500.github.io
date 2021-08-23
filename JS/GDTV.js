var video_container = document.getElementsByClassName('sections' );
var add_videos;

// Full Array example
// const videos = [[["video1", "video2"], ["video3", "video4"]], [["video3, video 4"]]] 

// Main Video Array

const videos = new Array ();

// Video Section 1

videos[0] = new Array ();

// Video Subsection 1 
videos[0][0] = new Array ("https://www.youtube-nocookie.com/embed/35CD99iRgZM", "https://www.youtube-nocookie.com/embed/35CD99iRgZM");

// Video Subsection 2
videos[0][1] = new Array ("https://www.youtube-nocookie.com/embed/yOAGawn3XO4", "https://www.youtube-nocookie.com/embed/yOAGawn3XO4");

// Video Section 2
videos[1] = new Array ();

// Video Section 2 Subesection
videos[1][0] = new Array ("https://www.youtube-nocookie.com/embed/sEs3SBbNgiU", "https://www.youtube-nocookie.com/embed/sEs3SBbNgiU");
 
var remove_function = document.getElementsByClassName("generator");

function generateVideos(array, arrsection, section, generator) {

var arrayLength = videos[array][arrsection].length;

for (var i = 0; i < arrayLength; i++) {
    add_videos = document.createElement('iframe');
    add_videos.height = 300
    add_videos.width = 250
    add_videos.src = videos[array][arrsection][i];
    
    //Do something

    video_container[section].appendChild(add_videos);
        }
remove_function[generator].onclick = function() {
	window.alert("Section " + generator + " has been generated.");
	}
}




// Switching between sections

function toggleVisibility(classa, classb) {
  var x = document.getElementsByClassName("main");
  if (x[classa].style.display === "none") {
    x[classa].style.display = "block";
    x[classb].style.display = "none"; 
  } else {
    x[classa].style.display = "none";
  }
}

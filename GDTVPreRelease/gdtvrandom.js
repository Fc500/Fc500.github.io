const picture1 = "gdtv1.png";
const picture2 = "gdtv2.png";
const picture3 = "gdtv3.png";


// Tutorials
let vid1 = ["https://www.youtube-nocookie.com/embed/y9LK0Ont68o", "unused"];
let vid2 = ["https://www.youtube-nocookie.com/embed/H7CLpn0QTw4", "unused"];
let vid3 = ["https://www.youtube-nocookie.com/embed/t18IdQJ00do", "unused"];
let vid4 = ["https://www.youtube-nocookie.com/embed/QLuT45a9j00", "unused"];

// Music Videos
let vid5 = ["https://www.youtube-nocookie.com/embed/PSuaOCQYwU8", "unused"];
let vid6 = ["https://www.youtube-nocookie.com/embed/-j3EOm-Qq1I", "unused"];
let vid7 = ["https://www.youtube-nocookie.com/embed/jKd2kosRDrA", "unused"];

// Documentaries
let vid8 = ["https://www.youtube-nocookie.com/embed/J2Usyk_hzcE", "unused"];
let vid9 = ["https://www.youtube-nocookie.com/embed/mghHQ_WcLCw", "unused"];
let vid10 = ["https://www.youtube-nocookie.com/embed/J2Usyk_hzcE", "unused"];
let vid11 = ["https://www.youtube-nocookie.com/embed/NKdqpxjSxos", "unused"];
let vid12 = ["https://www.youtube-nocookie.com/embed/Zpr27iCxqeo", "unused"];
let vid13 = ["https://www.youtube-nocookie.com/embed/x6a3hMeqUvM", "unused"];
let vid14 = ["https://www.youtube-nocookie.com/embed/9Q3jdV_9jyM", "unused"];
let vid15 = ["https://www.youtube-nocookie.com/embed/lV6dD7egDAM", "unused"];

/* -------------------------------------------------------------------------------------------------------------------------- */

window.onload = function startPage() {
    generateNumbers();
    loadCatagories();
}

function generateNumbers() {

  let x = Math.floor(Math.random() * 3);
    if (x == 0) {
        document.getElementById("title").src = picture1;
        document.getElementById("demo").innerHTML = x;
    } else if (x == 1) {
        document.getElementById("title").src = picture2;
        document.getElementById("demo").innerHTML = x;
    } else {
        document.getElementById("title").src = picture3;
        document.getElementById("demo").innerHTML = x;
    }
}

function loadCatagories() {
    loadCatagoriesMusicVids();
    loadCatagoriesTutorials();
    loadCatagoriesDocumentaries();
  }
  
    function loadCatagoriesTutorials() {
      let random1 = Math.floor(Math.random() * 3);
  
      if (random1 == 0) {
        video1.src = vid1[0];
        video2.src = vid2[0];
        video3.src = vid3[0];
        video4.src = vid4[0];
        demo1.innerHTML = random1;
      } else if (random1 == 1) {
        video1.src = vid2[0];
        video2.src = vid3[0];
        video3.src = vid4[0];
        video4.src = vid1[0];
        demo1.innerHTML = random1;
      } else if (random1 == 2) {
        video1.src = vid3[0];
        video2.src = vid4[0];
        video3.src = vid1[0];
        video4.src = vid2[0];
        demo1.innerHTML = random1;
      }
    }
  
    function loadCatagoriesMusicVids() {
      let random1 = Math.floor(Math.random() * 2);
  
      if (random1 == 0) {
        video5.src = vid5[0];
        video6.src = vid6[0];
        video7.src = vid7[0];
      } else if (random1 == 1) {
        video5.src = vid6[0];
        video6.src = vid7[0];
        video7.src = vid5[0];
      } else if (random1 == 2) {
        video5.src = vid7[0];
        video6.src = vid5[0];
        video7.src = vid6[0];
      }
    }
  
    function loadCatagoriesDocumentaries() {
      let random2 = Math.floor(Math.random() * 3);
      demo2.innerHTML = random2;
      if (random2 == 0) {
        video8.src = vid8[0];
        video9.src = vid9[0];
        video10.src = vid10[0];
        video11.src = vid11[0];
        video12.src = vid12[0];
        video13.src = vid13[0];
        video14.src = vid14[0];
        video15.src = vid15[0];
      } 
      else if (random2 == 1) {
        video8.src = vid9[0];
        video9.src = vid10[0];
        video10.src = vid11[0];
        video11.src = vid12[0];
        video12.src = vid13[0];
        video13.src = vid14[0];
        video14.src = vid15[0];
        video15.src = vid8[0];
      } 
      else if (random2 == 2) {
        video8.src = vid10[0];
        video9.src = vid11[0];
        video10.src = vid12[0];
        video11.src = vid13[0];
        video12.src = vid14[0];
        video13.src = vid15[0];
        video14.src = vid8[0];
        video15.src = vid9[0];
      } 
      else if (random2 == 3) {
        video8.src = vid11[0];
        video9.src = vid12[0];
        video10.src = vid13[0];
        video11.src = vid14[0];
        video12.src = vid15[0];
        video13.src = vid8[0];
        video14.src = vid9[0];
        video15.src = vid10[0];
      }
    }
let elementsInNav = ['home', 'news', 'contact'];


// FINISH UPDATING NAV VARIABLE NAMES
let homeNav = document.getElementById('info');
let newsNav = document.getElementById('buildings');
let contactNav = document.getElementById('upgrades');
let aboutNav = document.getElementById('about');



/* for (i = 0; i < elementsInNav.length; i++;) {
  if (elementsInNav[i] == element) {

    let elementToBeRemoved = element;
    elementsInNav.splice(i, i + 1);


  }
} 
*/
function openElement(element) {
  var elementRaw = element;
    if (elementRaw == 'home') {
      if (homeNav.style.display == 'none') { 
        homeNav.style.display = 'block';
        newsNav.style.display = 'none';
        contactNav.style.display = 'none';
        aboutNav.style.display = 'none';

      } else {
        homeNav.style.display = 'none';
      }
    } else if (elementRaw == 'news') {
      if (newsNav.style.display == 'none') { 
        newsNav.style.display = 'block';
        homeNav.style.display = 'none';
        contactNav.style.display = 'none';
        aboutNav.style.display = 'none';

      } else {
        newsNav.style.display = 'none';
      }
    } else if (elementRaw == 'contact') {
      if (contactNav.style.display == 'none') { 
        contactNav.style.display = 'block';
        newsNav.style.display = 'none';
        homeNav.style.display = 'none';
        aboutNav.style.display = 'none';

      } else {
        contactNav.style.display = 'none';
      }    
    } else if (elementRaw == 'about') {
      if (aboutNav.style.display == 'none') { 
        aboutNav.style.display = 'block';
        newsNav.style.display = 'none';
        homeNav.style.display = 'none';
        contactNav.style.display = 'none';

      } else {
        aboutNav.style.display = 'none';
      }

    }
}
 
// to add a class name use the variable.className += "";

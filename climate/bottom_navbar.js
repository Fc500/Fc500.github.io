let elementsInNav = ['home', 'news', 'contact'];


// FINISH UPDATING NAV VARIABLE NAMES
let homeNav = document.getElementById('info');
let newsNav = document.getElementById('buildings');
let contactNav = document.getElementById('upgrades');
let aboutNav = document.getElementById('about');
let updateNav = document.getElementById('update');



/* for (i = 0; i < elementsInNav.length; i++;) {
  if (elementsInNav[i] == element) {

    let elementToBeRemoved = element;
    elementsInNav.splice(i, i + 1);


  }
} 
*/
function openElement(element) {
  var elementRaw = element;
    if (elementRaw == 'info') {
      if (homeNav.style.display == 'none') { 
        homeNav.style.display = 'block';
        newsNav.style.display = 'none';
        contactNav.style.display = 'none';
        aboutNav.style.display = 'none';
        updateNav.style.display = 'none';

      } else {
        homeNav.style.display = 'none';
      }
    } else if (elementRaw == 'buildings') {
      if (newsNav.style.display == 'none') { 
        newsNav.style.display = 'block';
        homeNav.style.display = 'none';
        contactNav.style.display = 'none';
        aboutNav.style.display = 'none';
        updateNav.style.display = 'none';

      } else {
        newsNav.style.display = 'none';
      }
    } else if (elementRaw == 'upgrades') {
      if (contactNav.style.display == 'none') { 
        contactNav.style.display = 'block';
        newsNav.style.display = 'none';
        homeNav.style.display = 'none';
        aboutNav.style.display = 'none';
        updateNav.style.display = 'none';

      } else {
        contactNav.style.display = 'none';
      }    
    } else if (elementRaw == 'about') {
      if (aboutNav.style.display == 'none') { 
        aboutNav.style.display = 'block';
        newsNav.style.display = 'none';
        homeNav.style.display = 'none';
        contactNav.style.display = 'none';
        updateNav.style.display = 'none';

      } else {
        aboutNav.style.display = 'none';
      }

    } else if (elementRaw == 'update') {
      if (updateNav.style.display == 'none') { 
        updateNav.style.display = 'block';
        newsNav.style.display = 'none';
        homeNav.style.display = 'none';
        contactNav.style.display = 'none';
        about.style.display = 'none';

      } else {
        updateNav.style.display = 'none';
      }

    }
}
 
// to add a class name use the variable.className += "";

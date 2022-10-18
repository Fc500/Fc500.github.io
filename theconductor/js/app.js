function switchFunction(chosenSection) {
    let sections = document.getElementsByTagName("section");
  
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";     
    } 
    sections[chosenSection].style.display = "block";
  }
  
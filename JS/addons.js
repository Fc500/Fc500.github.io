function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



function myFunctionTwo() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

function pageOne() {
 sessionStorage.setItem("title", document.getElementById("optionA").innerHTML);
  sessionStorage.setItem("link", "https://tinyurl.com/2mvaue63");
}

function pageTwo() {
 sessionStorage.setItem("title", document.getElementById("optionB").innerHTML);
 sessionStorage.setItem("link", "https://tinyurl.com/7wk4f2eb");
}

function pageThree() {
 sessionStorage.setItem("title", document.getElementById("optionC").innerHTML);
 sessionStorage.setItem("link", "https://tinyurl.com/tx6b3dhv");
}

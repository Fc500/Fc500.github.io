$(".meter > span").each(function () {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate(
      {
        width: $(this).data("origWidth")
      },
      1200
    );
});

function move(x, w, y) {
  var elem = document.getElementsByClassName("myBar")[x];   
  var width = w;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= y) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}

var slide_num = 1;
show_divs(slide_num);

function plus_div(n) {
  show_divs(slide_num += n);
}

function show_divs(n) {
  var i;
  var x = document.getElementsByClassName("my_slide");
  if (n > x.length) {slide_num = 1}
  if (n < 1) {slide_num= x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slide_num-1].style.display = "block";
}

"use strict";

// htmlcss progress circular bar 
var htmlProgress = document.querySelector(".html-css"),
    htmlValue = document.querySelector(".html-progress");
var htmlStartValue = 0,
    htmlEndValue = 90,
    htmlspeed = 30;
var progresshtml = setInterval(function () {
  htmlStartValue++;
  htmlValue.textContent = "".concat(htmlStartValue, "%");
  htmlProgress.style.background = "conic-gradient(#fca61f ".concat(htmlStartValue * 3.6, "deg, #ededed 0deg)");

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed); // javasript progress circular bar 

var javascriptProgress = document.querySelector(".javascript"),
    javascriptValue = document.querySelector(".javascript-progress");
var javascriptStartValue = 0,
    javascriptEndValue = 75,
    jsspeed = 30;
var progressjs = setInterval(function () {
  javascriptStartValue++;
  javascriptValue.textContent = "".concat(javascriptStartValue, "%");
  javascriptProgress.style.background = "conic-gradient(#7d2ae8 ".concat(javascriptStartValue * 3.6, "deg, #ededed 0deg)");

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed); // php progress circular bar 

var phpProgress = document.querySelector(".php"),
    phpValue = document.querySelector(".php-progress");
var phpStartValue = 0,
    phpEndValue = 80,
    phpspeed = 30;
var progressphp = setInterval(function () {
  phpStartValue++;
  phpValue.textContent = "".concat(phpStartValue, "%");
  phpProgress.style.background = "conic-gradient(#20c997 ".concat(phpStartValue * 3.6, "deg, #ededed 0deg)");

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed); // reactjs progress circular bar 

var reactProgress = document.querySelector(".reactjs"),
    reactValue = document.querySelector(".reactjs-progress");
var reactStartValue = 0,
    reactEndValue = 30,
    rjsspeed = 30;
var progressreact = setInterval(function () {
  reactStartValue++;
  reactValue.textContent = "".concat(reactStartValue, "%");
  reactProgress.style.background = "conic-gradient(#3f396d ".concat(reactStartValue * 3.6, "deg, #ededed 0deg)");

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed); // filter using javascript

$(document).ready(function () {
  $(".filter-item").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
  });
}); // javascript for sticky navbar even if u scroll the navbar will be fixed

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top'); // add padding top to show content behind navbar

      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top'); // remove padding top from body

      document.body.style.paddingTop = '0';
    }
  });
}); // adding funtionality to back to top button 
//Get the button

var mybutton = document.getElementById("btn-back-to-top"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
//# sourceMappingURL=main.dev.js.map

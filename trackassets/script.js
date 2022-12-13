var log = document.getElementById("log");
var sign = document.getElementById("sign");
var logclose = document.getElementById("log-close");
var signclose = document.getElementById("sign-close");

// Get the button that opens the modal
var signbtn = document.getElementById("signBtn");
var logbtn = document.getElementById("logBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

window.addEventListener("popstate", detectHistory);

function orlog() {
  sign.style.display = "none";
  log.style.display = "block";
}
function orsign() {
  sign.style.display = "block";
  log.style.display = "none";
}
// When the user clicks the button, open the modal
logbtn.onclick = function () {
  log.style.display = "block";
  window.history.pushState({ id: 1 }, null, "index.html");
};
signbtn.onclick = function () {
  sign.style.display = "block";
  window.history.pushState({ id: 1 }, null, "index.html");
};

// When the user clicks on <span> (x), close the modal
logclose.onclick = function () {
  log.style.display = "none";
  history.back();
};
signclose.onclick = function () {
  sign.style.display = "none";
  history.back();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sign) {
    sign.style.display = "none";
    history.back();
  }
  if (event.target == log) {
    log.style.display = "none";
    history.back();
  }
};

function detectHistory() {
  sign.style.display = "none";
  log.style.display = "none";
}

var query = document.getElementsByClassName("query-asked");

for (var i = 0; i < 4; i++) {
  query[i].addEventListener("click", function () {
    $(".query-asked > .query-ans")
      .not($(this).children(".query-ans"))
      .fadeOut();

    $(".query-asked >.query-ques> button>.minus")
      .not(
        $(this).children(".query-ques").children("button").children(".minus")
      )
      .hide();
    $(".query-asked >.query-ques> button> .plus")
      .not($(this).children(".query-ques").children("button").children(".plus"))
      .show();
    $(".query-asked").not(this).removeClass("active-query", 500);
    // $(this).children(".query-asked button").toggleClass("button-border");
    var min = $(this)
      .children(".query-ques")
      .children("button")
      .children(".minus");
    var plu = $(this)
      .children(".query-ques")
      .children("button")
      .children(".plus");
    min.toggle();
    plu.toggle();
    var divToSlide = jQuery(this).children(".query-ans");
    divToSlide.fadeToggle();
    $(this).toggleClass("active-query", 500);
  });
}

var coll = document.getElementsByClassName("collapsible");

if (coll) {
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = "0";
      } else {
        content.style.padding = "0rem 0rem 0.5rem";
        content.style.maxHeight = content.scrollHeight + "rem";
      }
    });
  }
}

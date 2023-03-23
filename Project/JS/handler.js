// ##################  START SLIDE SHOW SCRIPT ######################
var counter = 1;
var imageSlide = document.getElementsByClassName("image");
var buttons = document.getElementsByClassName("manual-btn");
function displayImage(num) {
  for (var i = 0; i < imageSlide.length; i++) {
    if (i == num) {
      imageSlide[i].style.display = "block";
      buttons[i].style.background = "black";
    } else {
      imageSlide[i].style.display = "none";
      buttons[i].style.background = "transparent";
    }
  }
}
function displayFirst() {
  imageSlide[0].style.display = "block";
  buttons[0].style.background = "black";
}
displayFirst();
// ##################  END SLIDE SHOW SCRIPT ######################

function signOpen() {
  document.getElementById("sidebar-1").style.display = "block";
}

function signclose() {
  document.getElementById("sidebar-1").style.display = "none";
}

function cartOpen() {
  document.getElementById("cartsidebar").style.display = "block";
}

function cartClose() {
  document.getElementById("cartsidebar").style.display = "none";
}

function addItem() {
  var x = parseFloat(document.getElementById("totalAmount").innerText);
  var y = parseFloat(
    document.getElementById("totalItemPrice").innerText.replace(/,/g, "")
  );
  var z = parseFloat(
    document.getElementById("subtotalNum").innerText.replace(/,/g, "")
  );
  z = z - y;
  y /= x;
  x = x + 1;
  document.getElementById("totalAmount").innerText = x;
  document.getElementById("totalItemPrice").innerText = (
    y * x
  ).toLocaleString();
  document.getElementById("subtotalNum").innerText = (
    z +
    y * x
  ).toLocaleString();
}
function removeItem() {
  if (x != 1) {
    var x = parseInt(document.getElementById("totalAmount").innerText);
    var y = parseFloat(
      document.getElementById("totalItemPrice").innerText.replace(/,/g, "")
    );
    var z = parseFloat(
      document.getElementById("subtotalNum").innerText.replace(/,/g, "")
    );
    z = z - y;
    y /= x;
    x--;
    document.getElementById("totalAmount").innerText = x;
    document.getElementById("totalItemPrice").innerText = (
      y * x
    ).toLocaleString();
    document.getElementById("subtotalNum").innerText = (
      z +
      y * x
    ).toLocaleString();
  }
}

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


function validateFirstName(field){
  if(field==''){
    document.getElementById('first').innerHTML='You Must Enter your first name !';
    document.getElementById('fir').style.borderColor='red';
    return false;
  }
  else{
    document.getElementById('first').innerHTML='';
    document.getElementById('fir').style.borderColor='black';
    return true;
  }
}

function validateLastName(field){
  if(field==''){
    document.getElementById('last').innerHTML='You Must Enter your Last name !';
    document.getElementById('las').style.borderColor='red';
    return false;
  }
  else{
    document.getElementById('last').innerHTML='';
    document.getElementById('las').style.borderColor='black';
    return true;
  }
}

function validatePassword(field1, field2){
  let valid=true;
  if(field1==''){
    document.getElementById('pas').innerHTML='You Must Enter a Password !';
    document.getElementById('pa').style.borderColor='red'; 
    document.getElementById('pac').style.borderColor='red';

    valid=false;
    
    
  }
  else{
    document.getElementById('pas').innerHTML='';
    document.getElementById('pa').style.borderColor='black'; 

  }
  if(field1!=field2){
    document.getElementById('con').innerHTML='Password does not match !';
    document.getElementById('pac').style.borderColor='red';
    valid=false;
  }
  else{
    document.getElementById('con').innerHTML='';
    document.getElementById('pac').style.borderColor='black';

  }
  return valid;
}

function validateEmail(email) {
  if(email=='')
  {
    document.getElementById('em').innerHTML='You Must Enter your email !';
    document.getElementById('ema').style.borderColor='red';
    valid=false;
  }
  else
  {
    document.getElementById('em').innerHTML='';
    document.getElementById('ema').style.borderColor='black';
  }
 let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

function validatePassword1(field1){
  let valid=true;
  if(field1==''){
    document.getElementById('passwor').innerHTML='You Must Enter a Password !';
    document.getElementById('pas1').style.borderColor='red'; 
    valid=false;
    
    
  }
  else if(field1!="fyngz"){
    document.getElementById('passwor').innerHTML='Wrong password !';
    document.getElementById('pas1').style.borderColor='red'; 

  }
  else{
    document.getElementById('passwor').innerHTML='';
    document.getElementById('pas1').style.borderColor='black'; 
  }
  return valid;
}


function validate(form){
  let fail='';
  fail&=validateFirstName(form.Firstname.value.trim());
  fail&=validateLastName(form.last.value.trim());
  fail&=validateEmail(form.email.value.trim());
  fail&=validatePassword(form.pas.value, form.pasconfirm.value);
  if(fail)
    return true;
  else{
    return false;
  }
}

function validateEmail1(email) {
  if(email=='')
  {
    document.getElementById('em1').innerHTML='You Must Enter your email !';
    document.getElementById('ema1').style.borderColor='red';
    valid=false;
  }
  else if(email!="fyngz@gmail.com"){
    document.getElementById('em1').innerHTML='Not registered on this email !';
    document.getElementById('ema1').style.borderColor='red'; 
  }
  else
  {
    document.getElementById('em1').innerHTML='';
    document.getElementById('ema1').style.borderColor='black';
  }
 let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

function openforgotsidebar()
{
  document.getElementById("forgotsidebar").style.display = "block";
  document.getElementById("sidebar-1").style.display = "none";

  

}

function forgotclose()
{
  document.getElementById("forgotsidebar").style.display = "none";

}

function backtosidebar()
{
  document.getElementById("forgotsidebar").style.display = "none";
  document.getElementById("sidebar-1").style.display = "block";


}


function validate1(form){
  let fail='';
  fail&=validateEmail1(form.email.value.trim());
  fail&=validatePassword1(form.pas.value);
  if(fail)
    return true;
  else{
    return false;
  }
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

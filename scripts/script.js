var currValue;
var opacity;

function storeValue(value) {
  currValue = value;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function compareValue(value){
  if (currValue != value) {
    return true;
  }
}

function flash(n) {
  if (compareValue(n)) {
    var newN = getRandomIntInclusive(10, 80);
    var newD = getRandomIntInclusive(newN, 100);
    document.getElementById("numerator").innerText = newN;
    document.getElementById("denominator").innerText = newD;
    var newN2 = getRandomIntInclusive(40, 93);
    var newD2 = getRandomIntInclusive(newN2, 95);
    document.getElementById("numerator2").innerText = newN2;
    document.getElementById("denominator2").innerText = newD2;
    var flash1 = document.getElementsByClassName("flash")[0];
    var flash2 = document.getElementsByClassName("flash")[1];
    flash1.style.width = "68px";
    flash2.style.width = "68px";
    window.setTimeout(function() {
      flash1.style.width = "0px";
      flash2.style.width = "0px";
    }, 1500);
  }
}

function toggleMenu() {
  var bugMenu = document.getElementById("bug-menu");
  if (bugMenu.style.opacity==="1") {
    bugMenu.style.width="1px";
  	bugMenu.style.height="1px";
    if (bugMenu.style.height==="1px") {
      bugMenu.style.zIndex="0";
      bugMenu.style.opacity="0";
      var images = bugMenu.getElementsByTagName("img");
      for (var i=0; i<images.length; i++){
        images[i].style.opacity="0";
      }
    }
  }
  else {
    bugMenu.style.opacity="1";
    bugMenu.style.width="295px";
  	bugMenu.style.height="314px";
    bugMenu.style.zIndex="1001";
    setTimeout(changeOpacity(), 1000);
  }
  stopOpacity();
}
function changeOpacity(){
  var bugMenu = document.getElementById("bug-menu");
  var images = bugMenu.getElementsByTagName("img");
  for (var i=0; i<images.length; i++){
    images[i].style.opacity="1";
  }
}

function openTab(){
  var d = document.getElementsByClassName("tabs")[0];
  d.childNodes[13].style.display = "block";
  d.childNodes[13].setAttribute("checked", "checked");
  d.childNodes[15].style.display = "block";
  // var leftPixels = 58;
  // for (var j=5; j<20; j+=4){
  //   leftPixels += 180;
  //   d.childNodes[j].style.left = leftPixels +"px";
  // }
}

function stopOpacity() {
  clearTimeout(opacity);
}

function openTaskInbox() {
  document.getElementById("task-inbox").style.right = "0";
}

function closeTaskInbox() {
    document.getElementById("task-inbox").style.right = "-28%";
}

function switchContent() {
  var documents = document.getElementsByClassName("documents");
  documents[0].style.display = "none";
  document.getElementById("content-1-hidden").style.display="block";
  document.getElementsByClassName("label-name")[3].innerHTML = "NEW FORM";
}

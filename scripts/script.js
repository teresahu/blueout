var currValue;
var opacity;

function storeValue(value) {
  currValue = value;
}

function compareValue(value){
  console.log("currValue "+currValue);
  console.log("onfocusout "+value);
  if (currValue != value) {
    console.log("FLASH");
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
  for (var i=0; i<4; i++){
    d.removeChild(d.childNodes[17]);
  }
  d.childNodes[13].style.display = "block";
  d.childNodes[13].setAttribute("checked", "checked");
  d.childNodes[15].style.display = "block";
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

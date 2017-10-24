var currValue;

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
  bugMenu.style.visibility = (bugMenu.style.visibility==="visible") ? "hidden" : "visible";
}

function openTaskInbox() {
  document.getElementById("task-inbox").style.right = "0";
}

function closeTaskInbox() {
    document.getElementById("task-inbox").style.right = "-28%";
}

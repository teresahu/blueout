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
  var taskInbox = document.getElementById("task-inbox");
  if (taskInbox.style.visibility === "" || taskInbox.style.visibility === "hidden") {
    taskInbox.style.visibility = "visible";
  }
}

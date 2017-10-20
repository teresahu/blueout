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

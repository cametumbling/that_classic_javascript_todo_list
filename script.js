//make the title look dumb
document.querySelector("h1").className = "coolTitle";

//set DOM elements as variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//find the length of the input (to check that something has been entered)
function inputLength() {
  return input.value.length;
}

//create the <li> DOM element with its text, add it to the <ul>, clear the input field
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

//add the item when the button is clicked
function addListItemAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

//add the item when Enter is pressed on the keyboard
function addListItemAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//add Event Listeners for these callback functions
button.addEventListener("click", addListItemAfterClick);
input.addEventListener("keypress", addListItemAfterKeypress);

/*
//add list items when clicking the form button
button.addEventListener("click", function() {
  if (input.value.length > 0) {                         //check to ensure something has been entered
    var li = document.createElement("li");              //make a new empty <li> DOM element
    li.appendChild(document.createTextNode(input.value)); //append the text from the input to that <li>
    ul.appendChild(li);                                   //append that whole <li> to the <ul>
    input.value = "";                                     //reset the input to be empty
  }
})

//add list items when pressing Enter on keyboard
input.addEventListener("keypress", function(event) {    //same as above, but needs an event param
  if (input.value.length > 0 && event.keyCode === 13) { //same as above, but make sure only the Enter key (13) was pressed
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
})
*/




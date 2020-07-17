/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");


/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false);
}

/* TODO: Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
  if (clicked.target.tagName == "LI") {            //find out which element triggered a specified event
    clicked.target.classList.toggle("all-done");   //apply the CSS rule set outlined in .all-done if condition is met
  }
}
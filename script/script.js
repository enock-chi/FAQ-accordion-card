let bool = "block";

function ToggleHide(element) {
let elementName = document.getElementById(element)
  if (bool == "block") {
    elementName.style.display = "block";
    bool = "none";
  } else {
    elementName.style.display = "none";
    bool = "block";
  
  }

};

document.querySelector("#button1").onclick = function() {ToggleHide("card-p-1")}

document.querySelector("#button2").onclick =  function() {ToggleHide("card-p-2")}

document.querySelector("#button3").onclick =  function() {ToggleHide("card-p-3")}

document.querySelector("#button4").onclick =  function() {ToggleHide("card-p-4")}

document.querySelector("#button5").onclick =  function() {ToggleHide("card-p-5")}
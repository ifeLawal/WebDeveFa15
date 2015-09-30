var counter = 0;
var alert = 0;

function color2(){
  document.getElementById("header").style.color = "#ff0000";
}

function changeImageColor(div) {
  if(div.style.backgroundColor != "green")  {
    div.style.backgroundColor = "green";
    counter++;
  }

  if(counter == 20) {
    setControls();
  }
  //document.getElementById("score").innerHTML = "Score: " + counter;
}

function setControls() {
  var score = document.getElementById("hey");
  var att = document.createAttribute("class");
  //var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
  //var att = document.createAttribute("class");       // Create a "class" attribute
  //att.value = "turnGreen";                           // Set the value of the class attribute
  score.controls = true;
  score.att = "setGreen";
  score.setAttributeNode(att);
  document.getElementById("jstester").innerHTML = "Click Me";
}

function checkSuccess() {
  // if(counter == 5 && alert == 0) {
  //    alert("Your getting there!");
  //    alert++;
  // }
  // if(counter == 12 && alert == 1) {
  //   alert("So close!");
  //   alert++;
  // }
  // if(counter == 16 && alert == 2) {
  //   alert("You're almost there!!");
  //   alert++;
  // }
  // if(count == 20 && alert == 3) {
  //   alert("You've succeeded!");
  //   alert++;
  // }
  document.getElementById("score").innerHTML = "Score: " + counter;
}

function getWild(div) {
    var val1 = parseInt((Math.random() * 17));
    // val1 = castNum(val1);
    var val2 = parseInt((Math.random() * 10));
    // val2 = castNum(val2);
    var val3 = parseInt((Math.random() * 10));
    // val3 = castNum(val3);
    var val4 = parseInt((Math.random() * 10));
    // val4 = castNum(val4);
    var val5 = parseInt((Math.random() * 10));
    // val5 = castNum(val5);
    var val6 = parseInt((Math.random() * 10));
    // val6 = castNum(val6);
    var hexValue = "#" + val1 + val2 + val3 + val4 + val5 + val6;
    div.style.backgroundColor = hexValue;
    document.getElementsByTagName(div).backgroundColor = hexValue;
    document.getElementById("jstester").innerHTML = "Click Me" + hexValue;
}

var letters = ["A", "B", "C", "D", "E", "F"];

function castNum(num) {
    if(num > 9)
      return letters[10 - num];
}

function normalize(div) {
    div.style.backgroundColor = "blue";
}

function callAlert() {
  alert("You did it!");
}

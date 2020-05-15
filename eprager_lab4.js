/////////////////////////// 1 ///////////////////////////
/*_______________________ DONE _______________________*/
function alertText () {
  var alertText = document.getElementById("sec1-input").value;
  if(alertText == null || alertText == "null"  || alertText == "") {
    alert("No alert text has been entered!");
  } else {
    alert(alertText);
    document.getElementById("sec1-input").value = "";
  }  
}

/////////////////////////// 2 ///////////////////////////
/*_______________________ DONE _______________________*/
function dom () {
  var parent = document.getElementById('sec2-contentarea');
  parent.getElementsByTagName('h3')[0].innerHTML = 'Emma Prager';

  parent.getElementsByTagName('p')[0].style = 'font-weight: bold; font-style: italic; font-size: 12px;';

  parent.getElementsByTagName('img')[0].src = 'img/hamburger_color_icon.png';
  parent.getElementsByTagName('img')[0].alt = 'Color Hamburger Icon';
  parent.getElementsByTagName('img')[0].style = 'width: 100px;';

  parent.getElementsByTagName('a')[0].style = 'color: #cc0000; text-decoration: underline;';
  parent.getElementsByTagName('a')[0].href = 'https://www.iit.edu/';
  parent.getElementsByTagName('a')[0].target = '_blank';
  parent.getElementsByTagName('a')[0].innerHTML = 'Illinois Tech Website';

  document.getElementById('sec2-box').style = "background-color: #888888; width: 100%; height: 20px;";
}

/////////////////////////// 3 ///////////////////////////
/*_______________________ DONE _______________________*/
function convert () {
  var c = document.getElementById("sec3-input").value;
  if(c == null || c == "null"  || c == "") {
    alert("No value has been entered!"); 
  }
  else if(isNaN(c)) {
    alert("A non-numeric value was entered!"); 
  } else {
    var f = (c / 5 * 9) + 32;
    var result = c + " degress celsius is equal to " + f + " degress fahrenheit";

    var p = document.createElement("p");
    var node = document.createTextNode(result);
    p.appendChild(node);

    document.getElementById("sec3-contentarea").appendChild(p);
    document.getElementById("sec3-input").value = "";
  }  
  document.getElementById("sec3-input").focus();
}

function clear () {
  var text = document.getElementById("sec3-contentarea");
  
  while (text.hasChildNodes()) {  
    text.removeChild(text.firstChild);
  }
}

/////////////////////////// 4 //////////////////////////
/*_______________________ DONE _______________________*/
var x = 0;

function addBoxes () {
  var colors = document.getElementById("sec4-select1");
  var color = colors.options[colors.selectedIndex].value;
  
  var num = document.getElementById("sec4-input1").value;
  if(num == null || num == "null"  || num == "") {
    alert("No value has been entered!"); 
  }
  else if(isNaN(num)) {
    alert("A non-numeric value was entered!"); 
  } else if(num < 1) {
    alert("A numeric value less than 1 was entered!"); 
  } else {
    for(i=0; i<num; i++){
      var div = document.createElement("div");
      var node = document.createTextNode("");
      div.appendChild(node);
      div.title = 'delete';

      div.id = x;

      div.style = "cursor: pointer; display: inline-block; width: 60px; height: 60px; margin: 5px; background-color:" + color;
     
      document.getElementById("sec4-contentarea").appendChild(div);
      document.getElementById("sec4-input1").value = "";
      document.getElementById(x).addEventListener("click", deleteBox);

      x++;
    }
  }  
  document.getElementById("sec4-input1").focus();
}

function clearBoxes () {
  var boxes = document.getElementById("sec4-contentarea");
  
  while (boxes.hasChildNodes()) {  
    boxes.removeChild(boxes.firstChild);
  }
}

function deleteBox () {
  var y = event.srcElement.id;
  let node = document.getElementById(y);
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

/////////////////////////// 5 ///////////////////////////
/*_______________________ DONE _______________________*/
function type () {
  const keyName = event.key;
  console.log(keyName);

  var display = document.getElementById("sec5-contentarea");
  while (display.hasChildNodes()) {  
    display.removeChild(display.firstChild);
  }

  var span = document.createElement("span");
  var node = document.createTextNode(keyName);
  span.appendChild(node);

  document.getElementById("sec5-contentarea").appendChild(span);
  document.getElementById("sec5-contentarea").style = "font-weight: bold; font-size: 60px;";
}

function type2 () {
  document.getElementById("sec5-input").value = "";
}

/////////////////////////// 6 ///////////////////////////
/*_______________________ DONE _______________________*/
function getData6 () {
  var ul = document.createElement("ul");

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    for (const users of data) {
      var li = document.createElement('li');
      var string = users.name + ", " + users.email;
      var node = document.createTextNode(string);
      li.appendChild(node);
      ul.appendChild(li);
    }
    document.getElementById("sec6-contentarea").appendChild(ul);
  });
  document.getElementById('sec6-btn1').disabled = true;
}

function clearResults6 () {
  var text = document.getElementById("sec6-contentarea");
  while (text.hasChildNodes()) {  
    text.removeChild(text.firstChild);
  }
  document.getElementById('sec6-btn1').disabled = false;
}

/////////////////////////// 7 ///////////////////////////
/*_______________________ DONE _______________________*/
function getData7 () {
  var ul = document.createElement("ul");
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('sec7-btn1').disabled = true;

      var users = JSON.parse(this.response);
      users.forEach(user => {
        //console.log(string);
        var li = document.createElement('li');
        var string = user.name + ", " + user.email;
        var node = document.createTextNode(string);
        li.appendChild(node);
        ul.appendChild(li);
      });
      document.getElementById("sec7-contentarea").appendChild(ul);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}

function clearResults7 () {
  var text = document.getElementById("sec7-contentarea");
  while (text.hasChildNodes()) {  
    text.removeChild(text.firstChild);
  }
  document.getElementById('sec7-btn1').disabled = false;
}

////////////////////////// ALL //////////////////////////
function init() {
  document.getElementById("sec1-btn1").addEventListener("click", alertText);

  document.getElementById("sec2-btn1").addEventListener("click", dom);

  document.getElementById("sec3-btn1").addEventListener("click", convert);
  document.getElementById("sec3-btn2").addEventListener("click", clear);

  document.getElementById("sec4-btn1").addEventListener("click", addBoxes);
  document.getElementById("sec4-btn2").addEventListener("click", clearBoxes);

  document.getElementById("sec5-input").addEventListener("keydown", type);
  document.getElementById("sec5-input").addEventListener("keydown", type2);

  document.getElementById("sec6-btn1").addEventListener("click", getData6);
  document.getElementById("sec6-btn2").addEventListener("click", clearResults6);

  document.getElementById("sec7-btn1").addEventListener("click", getData7);
  document.getElementById("sec7-btn2").addEventListener("click", clearResults7);
}

window.onload = function() {
  init();
};
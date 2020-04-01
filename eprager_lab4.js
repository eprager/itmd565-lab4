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
function dom () {
  //let range = new Range();
  //range.setStart(sec2-contentarea, 0);
  //range.setEnd(sec2-contentarea, 2);
  //alert(range);
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

/////////////////////////// 4 ///////////////////////////
function addBoxes () {
  var colors = document.getElementById("sec4-select1");
  var color = colors.options[colors.selectedIndex].value;
  
  var num = document.getElementById("sec4-input1").value;
  if(num == null || num == "null"  || num == "") {
    alert("No value has been entered!"); 
  }
  else if(isNaN(num)) {
    alert("A non-numeric value was entered!"); 
  } else {
    /*var div = document.createElement("div");
    var node = document.createTextNode(result);
    div.appendChild(node);

    document.getElementById("sec4-contentarea").appendChild(p);
    document.getElementById("sec3-input").value = "";*/
  }  

}

function clearBoxes () {

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
// this is where i will do all my javasript code
 

// this code is where i reverse the title "Astro weight Calculator" using a for loop
 var reverseTitle = document.getElementById("reverse").innerHTML;
 var len = reverseTitle.lenght;
 var newTitle = "";
 for (var j = 0; j < len; j++){
     newTitle += reverseTitle.charAt(len - 1 - j);
 }
 document.getElementById("reverse").innerHTML = reverseTitle;

// Array
var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];
     

// this is where i did the selected drop box by using a for loop
var sel = document.getElementById("planets");
for (var i=0; i<planets.length; i++){
  var opt = document.createElement("option");
  opt.innerHTML = planets[i].planet;
  sel.appendChild(opt);
}


// this is where i calculated the weight enter and the planet one selected
//  this is where i printed out the outcome of the planet and the weight one entered
function youroutput()
{
var yourweight = document.getElementById("yourweight").value;
var gravity = document.getElementById("planets").selectedIndex;
var yourselplanet =planets[gravity].gravity;
var youranswer = yourweight * yourselplanet;
var planetsel = planets[gravity].planet;
document.getElementById("youroutput").innerHTML = " The " + planetsel + " weight is " + youranswer + "lbs";
}


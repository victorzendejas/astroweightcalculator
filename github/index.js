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

function youroutput()
{
var yourweight = document.getElementById("yourweight").value;
var yourselplanet = document.getElementById("planets").value;
// var gravity = document.getElementById("planets").value;
var youranswer = yourweight * yourselplanet;
var planetsel = document.getElementById("planets") [document.getElementById("planets").selectedIndex].text;
document.getElementById("youroutput").innerHTML = " The " + planetsel + " weight is " + youranswer + "lbs";
}
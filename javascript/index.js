
function f(){
    document.getElementById('demoo1').innerHTML='Hello Dear';
    document.getElementById('demoo2').innerHTML='How are you?';
}
// let x,y;
//    x=22;
//    y=11;
//    z=x+y;
// document.getElementById('demo4').innerHTML='the sum of x+y = '+z;   

const cars = ["Saab","Volvo","BMW"];
document.getElementById("demo5").innerHTML = cars[0]+' '+cars[1];

var x = myFunction(4, 3);
document.getElementById("demo6").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo7").innerHTML = "The car model is " + car.model;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo9").innerHTML = fruits;

fruits.sort();
document.getElementById("demo10").innerHTML = fruits;
"use strict"; //test log

console.log("Hej!"); //import class

import Course from '../CLASSES/courses.js';
import cities, { getCities } from '../UTILITIES/cities.js'; //create instance; call on class with arguments

let course = new Course('DT173G', "Webbutveckling III"); //get countys & print in HTMl to id="countyList"

let countyList = getCities(); //find elemenet

const countiesEl = document.getElementById("countyList"); //loop through array

countyList.forEach(city => {
  countiesEl.innerHTML += `<li>${city}</li>`;
}); //call on function; console.log

course.displayCourses(); //show arrays

console.log(cities);
console.log(getCities());
//TRANSCRIPT-TEST
var Person =
/** @class */
function () {
  //constructor
  function Person(first, last, old) {
    this.fullname = first + " " + last + " ";
    this.age = old;
  } ///assign type to method


  Person.prototype.showname = function () {
    return document.getElementById("person").innerHTML += this.fullname + this.age;
  };

  return Person;
}(); //create person


var pers = new Person("Damjan", "Tosic", 33);
pers.showname(); //enums

var Cars;

(function (Cars) {
  Cars["Ford"] = "1997";
  Cars["BMW"] = "2005";
  Cars["Volvo"] = "2008";
})(Cars || (Cars = {}));

; //assign variables

var oldCar = Cars.Ford;
var notOldCar = Cars.Volvo;
document.getElementById("car").innerHTML += "Kör en bil från år " + notOldCar;
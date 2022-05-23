"use strict";

//test log
console.log("Hej!");

//import class
import Course from '../CLASSES/courses.js';
import cities, {getCities} from '../UTILITIES/cities.js';

//create instance; call on class with arguments
let course = new Course('DT173G', "Webbutveckling III");

//get countys & print in HTMl to id="countyList"
let countyList = getCities();

//find elemenet
const countiesEl = document.getElementById("countyList");

//loop through array
countyList.forEach((city) => {
    countiesEl.innerHTML += `<li>${ city }</li>`;
}) 

//call on function; console.log
course.displayCourses();

//show arrays
console.log(cities);
console.log(getCities());



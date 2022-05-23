"use strict";


let urlMenu2 = window.location.pathname;
let filenameMenu2 = urlMenu2.substring(urlMenu2.lastIndexOf('/') + 1);
if (filenameMenu2 == "contact.html") {
    let formMenu = document.getElementById('formContact');
    console.log(formMenu);
    formMenu.onsubmit = function (event) {
        let xhr = new XMLHttpRequest();
        let formData2 = new FormData(formMenu);
        //open the request
        xhr.open('POST', 'http://localhost/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idcontact=post')
        xhr.setRequestHeader("Content-Type", "application/json");

        //send the form data
        xhr.send(JSON.stringify(Object.fromEntries(formData2)));

        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                formMenu.reset(); //reset form after AJAX success or do something else
                document.getElementById('messageContact').innerHTML = "Tack för din fråga!";
            }
        }
        //Fail the onsubmit to avoid page refresh.
        return false;
    }
}




/*
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


*/
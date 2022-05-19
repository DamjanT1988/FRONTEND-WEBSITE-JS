"use strict";

//25 declare var for DDOM elements
const codeInput = document.getElementById("code");
const nameInput = document.getElementById("name");
const progressionInput = document.getElementById("progression");
const syllabusInput = document.getElementById("syllabus");
const submitButton = document.getElementById("submit");

//26 declare event listener
submitButton.addEventListener("click", createCourse);

//6 var with link to API
//localhost
//let url = "http://localhost/moment5_webservice_vt22-DamjanT1988/restapi.php";
//MIUN host
let url = "http://studenter.miun.se/~dato1700/writeable/dt173g/moment5_webservice_vt22-DamjanT1988/restapi.php";

//1 run when webpage loads
window.onload = init;

//2 initialize function to get gfx
function init()  {
    //3 call gfx function to call list of gfx
    getCourse();
}

//4 read from a web service
function getCourse() {
    //5 do a FETCH call
    fetch(url)
    //7 PROMISE (.then), do this with it: response 
    .then(response => {
        //8 do a control to check if 200
        if(response.status != 200) {
            //9 anything else then OK or 200, return
            return
        }
        //10 on 200, do this with JSON data
        return response.json()

        //11 response from web service sent to another function to print
        //response.json() becomes data
        .then(data => writeCourse(data))
        //12 at error, do this
        .catch(err => console.log(err))
    })
}

//13 print out course on page
function writeCourse(dataSQL) {
    //14 get DOM element with ul list
    const ulElement = document.getElementById("courselist");
    //15 clear list
    ulElement.innerHTML = "";

console.log(dataSQL);

    //16 loop through each JS-object in the array from data 
    //with forEach & write the list in DOM
    dataSQL.forEach(one => {
        ulElement.innerHTML += `<li class="courselist" id="${one.id}">${one.coursename} (${one.coursecode}) Progression: ${one.courseprogression} - <a href="${one.coursesyllabus}"> Läs kursplan >></a></li>`;
    });

    //17 target the write of course list in #16  
    let liElement = document.getElementsByClassName("courselist");

    //18 loop through with FOR the list while listening for a click
    //then delete the list iten by calling a function
    for (let i = 0; i < liElement.length; i++) {
    liElement[i].addEventListener("click", deleteCourse);
    }
}

//19 declare function to delete list items
function deleteCourse(event) {
    //20 find id of the list iten
    let id = event.target.id;
console.log(event.target.id);

    //21 send instruction to web service by FETCH
    //for method of "DELETE" i PHP/REST, by id
    fetch(url + "?id=" + id, {
        "method": "DELETE" //or "method"
    })
    //22 make response into JSON data
    .then(response => response.json())
    //23 to getCourse function 
    .then(data => getCourse())
    //24 catch error
    .catch(err => console.log(err))
}

//27 create a list item
function createCourse() {
    //28 prevent list to add same thing twice
    event.preventDefault();

    //29 get values from clicked list items/objects
    let code = codeInput.value;
    let name = nameInput.value;
    let progression = progressionInput.value;
    let syllabus = syllabusInput.value;

    //30 make values to JSON-objects (strings)
    let jsonString = JSON.stringify({
        code : code,
        name : name,
        progression: progression,
        syllabus: syllabus    
    });
    
    //31 send data to databas with POST by FETCH
    fetch (url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: jsonString
    })
    //32 turn response to JSON
    .then(response => response.json())

    .then(data => getCourse())

    .then(clearForm())
}

//33 clear form
function clearForm() {
//34clear each form area
    codeInput.value = "";
    nameInput.value = "";
    progressionInput.value = "";
    syllabusInput.value = "";
}

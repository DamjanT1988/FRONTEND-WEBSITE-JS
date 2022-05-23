
class Post {
/*
    constructor () {
    }
*/

    createContactInfo() {
    
    //define submitbutton
    const submitButton = document.getElementById("submit");

    //declare event listener
    submitButton.addEventListener("click", createContact);

    //declare var for DDOM elements
    const nameInput = document.getElementById("nameguest");
    const emailInput = document.getElementById("emailguest");
    const contentInput = document.getElementById("contentguest");

    //API url
    let url = 'http://localhost/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idcontact=post';

  function createContact() {
        //prevent list to add same thing twice
        event.preventDefault();

        //get values from clicked list items/objects
        let name = nameInput.value;
        let email = emailInput.value;
        let content = contentInput.value;

        //make values to JSON-objects (strings)
        let jsonString = JSON.stringify({
            nameguest: name,
            emailguest: email,
            contentguest: content

        });
        //send data to databas with POST by FETCH
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: jsonString
        })
            //turn response to JSON
            .then(response => response.json())
            .then(clearContactForm())
    }

    //clear form data text
    function clearContactForm() {
        //clear each form area
        nameInput.value = "";
        emailInput.value = "";
        contentInput.value = "";
        //print messade the question is sent
        document.getElementById('messageContact').innerHTML = "Tack för din fråga!"
    }

}
    }

/*
createContact (name, email, content, url) {

    this.name = name;
    this.email = email;
    this.content = content;
    this.url = url;

        console.log(name + email + content);

//    console.log(nameInput);
        //prevent list to add same thing twice
        //event.preventDefault();

    //declare var for DDOM elements
    const nameInput = document.getElementById(name).value;
    const emailInput = document.getElementById(email).value;
    const contentInput = document.getElementById(content).value;

        //get values from clicked list items/objects
/*        let nameVal = nameInput.value;
        let emailVal = emailInput.value;
        let contentVal = contentInput.value;
        console.log(nameInput);
        console.log(emailInput);
        

    console.log(nameInput.value);
        //make values to JSON-objects (strings)
        let jsonString = JSON.stringify({
            name: nameInput,
            email: emailInput,
            content: contentInput
        });
console.log(url);
        //send data to databas with POST by FETCH
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: jsonString
        })
            //turn response to JSON
            .then(response => response.json())
            //.then(clearContactForm())
    }

    //clear form data text
    /*clearContactForm() {
        //clear each form area
        //nameVal.value = "";
        //emailValvalue = "";
        //contentVal.value = "";
        //print messade the question is sent
        document.getElementById('messageContact').innerHTML = "Tack för din fråga!"
    }

*/



/*

class Course {

    //create cinstructor
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    //create setters & getter
    setCode(code) {
        this.code = code;
    }

    getCode() {
        return this.code;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    //create methods
    displayCourses() {
        console.log(`Kurs: ${ this.code} - ${this.name}`);
    }

}
*/
//export to use it elsewhere
export default Post;
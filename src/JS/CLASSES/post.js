//--PROGRAMMER: DAMJAN TOSIC, DATO1700@MIUN.STUDENT.SE---//

"use strict";

class Post {


    constructor() {
    }


    createOrder(name, phone, table, date, time, message, type, arrival, cost, url) {

        //define submitbutton
        const submitButton = document.getElementById("submit");

        //declare event listener
        submitButton.addEventListener("click", createOrder);

        //declare var for DDOM elements 
        const nameInput = document.getElementById(name);
        const phoneInput = document.getElementById(phone);
        const tableInput = document.getElementById(table);
        const dateInput = document.getElementById(date);
        const timeInput = document.getElementById(time);
        const messageInput = document.getElementById(message);
        const typeInput = document.getElementById(type);
        const arrivalInput = document.getElementById(arrival);
        const costInput = document.getElementById(cost);

        console.log(costInput);
        function createOrder() {
            //prevent list to add same thing twice
            event.preventDefault();

            //get values from clicked list items/objects
            let name1 = nameInput.value;
            let phone1 = phoneInput.value;
            let table1 = tableInput.value;
            let date1 = dateInput.value;
            let time1 = timeInput.value;
            let message1 = messageInput.value;
            let type1 = typeInput.value;
            let arrival1 = arrivalInput.value;
            let cost1 = costInput.value;
            console.log(cost1);
            //take values to JSON-objects (strings)
            let jsonString = JSON.stringify({
                customernamenew: name1,
                customerphonenew: phone1,
                contentnew: table1,
                datenew: date1,
                timenew: time1,
                messagenew: message1,
                typenew: type1,
                pickuparrivalnew: arrival1,
                costnew: cost1

            });
            console.log(jsonString);
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
                .then(clearTableForm())
        }

        //clear form data text
        function clearTableForm() {
            //clear each form area
            nameInput.value = "";
            phoneInput.value = "";
            tableInput.value = "";
            dateInput.value = "";
            timeInput.value = "";
            messageInput.value = "";
            //typeInput.value = "";
            //arrivalInput.value = "";
            //costInput.value = "";

            //print messade the question is sent
            document.getElementById('messagesent').innerHTML = "Tack för din beställning!"
        }

    }



    createContactInfo(name, email, content, url) {

        //define submitbutton
        const submitButton = document.getElementById("submit");

        //declare event listener
        submitButton.addEventListener("click", createContact);

        //declare var for DDOM elements
        const nameInput = document.getElementById(name);
        const emailInput = document.getElementById(email);
        const contentInput = document.getElementById(content);

        function createContact() {
            //prevent list to add same thing twice
            event.preventDefault();

            //get values from clicked list items/objects
            let name1 = nameInput.value;
            let email1 = emailInput.value;
            let content1 = contentInput.value;

            //make values to JSON-objects (strings)
            let jsonString = JSON.stringify({
                nameguest: name1,
                emailguest: email1,
                contentguest: content1

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

//export to use it elsewhere
export default Post;
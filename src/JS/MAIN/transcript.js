var urlMenu = window.location.pathname;
var filenameMenu = urlMenu.substring(urlMenu.lastIndexOf('/') + 1);
if (filenameMenu == "menu.php") {
    var formMenu_1 = document.getElementById('formMenu');
    formMenu_1.onsubmit = function (event) {
        var xhr = new XMLHttpRequest();
        var formData2 = new FormData(formMenu_1);
        //open the request
        xhr.open('POST', 'http://localhost/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idmenu=post');
        xhr.setRequestHeader("Content-Type", "application/json");
        //send the form data
        xhr.send(JSON.stringify(Object.fromEntries(formData2)));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                formMenu_1.reset(); //reset form after AJAX success or do something else
                window.location.reload();
            }
        };
        //Fail the onsubmit to avoid page refresh.
        return false;
    };
}
//TRANSCRIPT-TEST
var Person = /** @class */ (function () {
    //constructor
    function Person(first, last, old) {
        this.fullname = first + " " + last + " ";
        this.age = old;
    }
    ///assign type to method
    Person.prototype.showname = function () {
        return document.getElementById("person").innerHTML += this.fullname + this.age;
    };
    return Person;
}());
//create person
var pers = new Person("Damjan", "Tosic", 33);
pers.showname();
//enums
var Cars;
(function (Cars) {
    Cars["Ford"] = "1997";
    Cars["BMW"] = "2005";
    Cars["Volvo"] = "2008";
})(Cars || (Cars = {}));
;
//assign variables
var oldCar = Cars.Ford;
var notOldCar = Cars.Volvo;
document.getElementById("car").innerHTML += "Kör en bil från år " + notOldCar;

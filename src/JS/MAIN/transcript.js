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

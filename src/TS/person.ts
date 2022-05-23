
/*
//TRANSCRIPT-TEST
class Person {
    //assign types to variables
    fullname: string;
    age: number; 

    //constructor
    constructor(first: string, last: string, old: number) {
        this.fullname = first + " " + last + " ";
        this.age = old;
    }

        ///assign type to method
        showname(): string {
            return document.getElementById("person").innerHTML += this.fullname + this.age;
        }
}

//test types
interface Person {
    fullname: string,
    age: number
}

//create person
let pers: Person = new Person ("Damjan", "Tosic", 33);
pers.showname(); 

//enums
enum Cars {Ford = "1997", BMW = "2005", Volvo = "2008"};

//assign variables
let oldCar : Cars = Cars.Ford;
let notOldCar : Cars = Cars.Volvo;

document.getElementById("car").innerHTML += "Kör en bil från år " + notOldCar;

*/
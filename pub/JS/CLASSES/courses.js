class Course {
  //create cinstructor
  constructor(code, name) {
    this.code = code;
    this.name = name;
  } //create setters & getter


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
  } //create methods


  displayCourses() {
    console.log(`Kurs: ${this.code} - ${this.name}`);
  }

} //export to use it elsewhere


export default Course;
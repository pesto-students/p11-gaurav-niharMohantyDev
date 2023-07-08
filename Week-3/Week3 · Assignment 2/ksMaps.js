class Person {
    constructor(name, age, gender, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
  
    introduce() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Nationality: ${this.nationality}`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
      super(name, age, gender, nationality);
      this.subject = subject;
    }
  
    study() {
      return `Studying ${this.subject}`;
    }
  }
  
  const person1 = new Person("John Doe", 25, "Male", "USA");
  const person2 = new Person("Jane Smith", 30, "Female", "Canada");
  const person3 = new Person("Tom Johnson", 20, "Male", "UK");
  
  console.log(person1.introduce());
  console.log(person2.introduce());
  console.log(person3.introduce());
  
  const student = new Student("Alice Johnson", 22, "Female", "USA", "Computer Science");
  
  console.log(student.introduce());
  console.log(student.study());
  
const person = {
    _name: "Nihar",
    _age: 30,
    _email: "nihar@marolix.com",
  
    get name() {
      return this._name;
    },
  
    get email() {
      return this._email;
    },
  
    set age(newAge) {
      this._age = newAge;
    },
  
    getAge() {
      return this._age;
    },
  
    setAge(newAge) {
      this._age = newAge;
    }
  };
  

  console.log("Name:", person.name); 
  console.log("Email:", person.email); 
  
  person.age = 18;
  console.log("Age:", person.getAge());
  
  person.setAge(30);
  console.log("Updated Age:", person.getAge());
  
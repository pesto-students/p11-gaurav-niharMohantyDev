class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    getDetails() {
      return `${super.getDetails()}, Number of Doors: ${this.numDoors}`;
    }
  }
  
  // Create instances
  const vehicle = new Vehicle("Honda", "Civic", 2021);
  const car = new Car("Toyota", "Camry", 2022, 4);
  
  // Call the getDetails() method
  console.log(vehicle.getDetails());
  console.log(car.getDetails());
  
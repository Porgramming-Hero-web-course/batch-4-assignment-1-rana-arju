// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.year = year;
    this.model = model;
  }
  getCarAge() {
    const ageCount = new Date().getFullYear() - this.year;
    return ageCount;
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

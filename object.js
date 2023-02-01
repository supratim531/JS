let car = {
  name: "Maruti",
  maxSpeed: 280,
  run: () => {
    console.log("Maruti is running");
  }
};

console.log(car);

function Car(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.run = () => {
    console.log(`${this.name} is running`);
  };
}

// ES6 classes

class Employee {
  constructor(exp, name, division) {
    this.exp = exp;
    this.name = name;
    this.division = division;
  }

  role = "Programmer";

  eat = () => {
    return `${this.name} is eating`;
  };

  sleep() {
    return "Is this resides under the proto?";
  }

  static companyName() {
    return "TCS";
  }
}

class Programmer extends Employee {
  constructor(exp, name, division, language) {
    super(exp, name, division);
    this.language = language;
  }
}

let harry = new Employee;
console.log(harry);
let pHarry = new Programmer;
console.log(pHarry);
console.log(Programmer.companyName());
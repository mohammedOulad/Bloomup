const Person = {
    name: 'Naim',
    age: 23,
    yearOfBirth: function CalcYearOfBirth() {
      let today = new Date().getFullYear()
      return today - this.age;
    },
    info: function printInfo() {
      return `My name is ${this.name} & I am ${this.age} y/o, I was born in the year ${this.yearOfBirth()}`
    }
  }

  
console.log(something);
//console.log(Person.info());
//nakijken van classen
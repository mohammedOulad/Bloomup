import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

interface Person{
  name: string,
  age: number,
  yearOfBirth?: () => {},
  info?: () => {}
}

function App() {
  
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [person, setPerson] = useState<Person[]>([]);

  const Person:Person = {
    name: 'Naim',
    age: 23,
    yearOfBirth: function CalcYearOfBirth() {
      let today = new Date().getFullYear()
      return today - this.age;
    },
    info: function printInfo() {
      return `My name is ${this.name} & I am ${this.age} y/o, I was born in the year ${this.yearOfBirth}`
    }
  }


  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPerson(prev => ({
      ...prev,
      name: name,
      age: age
    }))
  }
console.log(person)
  return (
    <div className="App">
      <h1>This is a project for 'this object & closure'</h1>
      <p>{Person.info}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={(e) => {setName(e.target.value)}}/>
        </label>
        <label>
          Age:
          <input type="text" name="name" onChange={(e) => {setAge(parseInt(e.target.value))}}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>This is the person list</h2>
      {
        person.map((i) => {
          return(
            <div>
              <p>Name: {i.name}</p>
              <p>Age: {i.age}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

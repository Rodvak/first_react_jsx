import './App.css';
import PersonCard from './components/PersonCard';

const peopleArr = [{"firstName":"Alex", "lastName" : "Rodriguez", "age":25, "hairColor":"Blonde" }, {"firstName":"John", "lastName" : "Silva", "age":27, "hairColor":"Black" }, {"firstName":"Andrea", "lastName" : "Lopez", "age":40, "hairColor":"Brown" }, {"firstName":"Paola", "lastName" : "Pineda", "age":22, "hairColor":"White" }]

function App() {
  return (
    <div className="App"> 
        {peopleArr.map((person) => {
          return (
          <PersonCard 
          firstName= {person.firstName} 
          lastName = {person.lastName} 
          age= {person.age} 
          hairColor= {person.hairColor}
          />
          )
        })}
    </div>
  )
}

export default App;

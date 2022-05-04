import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard firstName = {"Alex"}/>
        <PersonCard lastName = {"Rodriguez"}/>
        <PersonCard age = {25}/>
        <PersonCard hairColor = {"Blonde"}/>
        <PersonCard firstName2 = {"Bianca"}/>
        <PersonCard lastName2 = {"Moreno"}/>
        <PersonCard age2 = {25}/>
        <PersonCard hairColor2 = {"Black"}/>
        <PersonCard firstName3 = {"Daniel"}/>
        <PersonCard lastName3 = {"Vaca"}/>
        <PersonCard age3 = {25}/>
        <PersonCard hairColor3 = {"Black"}/>
        <PersonCard firstName4 = {"Austin"}/>
        <PersonCard lastName4 = {"Silva"}/>
        <PersonCard age4 = {25}/>
        <PersonCard hairColor4 = {"Brown"}/>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CharacterPage from './Components/Pages/Character/CharacterPage';
import CharacterAttributes from "./Components/Pages/Character/Attributes/CharacterAttributes"
import {CharacterCollection} from "./Components/Pages/Character/CharacterContext"
import {CombatCollection} from "./Components/Pages/Combat/CombatLogContext"
import HomePage from './Components/Pages/Home/Home';
import CombatPage from './Components/Pages/Combat/CombatPage';

function App() {
  return (
    <Router>
      <CharacterCollection>
        <CombatCollection>  
      <Route exact path='/character' component={CharacterPage}></Route>
      <Route exact path='/character/attributes' component={CharacterAttributes}></Route>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/combat" component={CombatPage}></Route>
      </CombatCollection>
    </CharacterCollection>
    </Router>
    
  );
}

export default App;

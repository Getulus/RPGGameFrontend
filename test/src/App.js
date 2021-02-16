import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CharacterPage from './Components/Pages/Character/CharacterPage';
import CharacterAttributes from "./Components/Pages/Character/Attributes/CharacterAttributes"
import {CharacterCollection} from "./Components/Pages/Character/CharacterContext"
import {CombatLogCollection} from "./Components/Pages/Combat/CombatLogContext"
import HomePage from './Components/Pages/Home/Home';
import CombatPage from './Components/Pages/Combat/CombatPage';
import ChooseClass from './Components/Pages/Creation/ChooseClass';
import { QuestCollection } from './Components/Pages/Quests/QuestContext';
import Header from './Components/Pages/Character/Header/Header';
import BattlePage from './Components/Pages/Combat/BattlePage';

function App() {
  return (
    <Router>
      <CharacterCollection>
        <CombatLogCollection>
          <QuestCollection>  
            <Route exact path="/battle" component={BattlePage}></Route>
            <Route exact path='/character' component={CharacterPage}></Route>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/combat" component={CombatPage}></Route>
            <Route exact path="/character-choose" component={ChooseClass}></Route>
            <div className="footer"><p style={{margin:"auto"}}>Copyright © Getulus Games</p></div>
        </QuestCollection>
      </CombatLogCollection>
    </CharacterCollection>
    </Router>
    
  );
}

export default App;

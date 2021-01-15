import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CharacterPage from './Components/Pages/Character/CharacterPage';
import CharacterAttributes from "./Components/Pages/Character/Attributes/CharacterAttributes"
import {CharacterCollection} from "./Components/Pages/Character/CharacterContext"
import HomePage from './Components/Pages/Home/Home';

function App() {
  return (
    <Router>
      <CharacterCollection>  
      <Route path='/character' exact component={CharacterPage}></Route>
      <Route path='/character/attributes' exact component={CharacterAttributes}></Route>
      <Route exact path="/" component={HomePage}></Route>
    </CharacterCollection>
    </Router>
    
  );
}

export default App;

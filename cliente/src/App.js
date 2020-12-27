
import './App.css';
import Cuerpo from './components/Principales/Cuerpo/Cuerpo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Administacion from './components/Administracion/Administacion';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={Cuerpo}/>
          <Route exact path="/Admin" render={Administacion}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

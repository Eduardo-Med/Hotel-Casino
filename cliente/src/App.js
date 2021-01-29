
import './App.css';
import Cuerpo from './components/Principales/Cuerpo/Cuerpo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Administacion from './components/Administracion/Administacion';

import { Provider } from 'react-redux'
import {CookiesProvider} from 'react-cookie'
import store from './redux/store';
import PaginaLogin from './components/Administracion/PaginaLogin';

function App() {
  return (
    <Provider store={store}>
      <CookiesProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={Cuerpo}/>
            <Route exact path="/admin" render={() =>{
              return(
                  <Administacion/>
              );
            }}/>
            <Route exact path="/admin/login"  render={() => {
                return (
                  <PaginaLogin/>
                );
              }}
            />
          </Switch>
        </Router>
      </div>
      </CookiesProvider>
    </Provider>
  );
}

export default App;

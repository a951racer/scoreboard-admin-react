import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './Pages/Main/Main.js';
import AuthPage from './Pages/Auth/Auth.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/Login">
          <AuthPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import MainPage from './Pages/Main/Main.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import MainPage from './Pages/Main/Main';
import LoginPage from './Pages/Login/Login';
import NewGamePage from './Pages/NewGame/NewGame';
import CreateAccountPage from './Pages/CreateAccount/CreateAccount';

function App() {

  const getUserData = () => {
    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    return userData;
  };

  const [userData, setUserData] = useState(getUserData());

  const setNewUserData = (newUserData) => {
    localStorage.setItem('userData', JSON.stringify(newUserData));
    setUserData(newUserData);
  }

  const loggedIn = userData && userData.token;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login">
          {loggedIn ? <Redirect to="/" /> : <LoginPage setUserData={setNewUserData} />}
        </Route>
        <Route path="/CreateAccount">
          {loggedIn ? <Redirect to="/" /> : (userData ? <Redirect to="/Login" /> : <CreateAccountPage setUserData={setNewUserData} />)}
        </Route>
        <Route exact path="/">
          {loggedIn ? <MainPage /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/NewGame">
          {loggedIn ? <NewGamePage /> : <Redirect to="/Login" />}
        </Route>
        <Route path="/">
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/Login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import MainPage from './Pages/Main/Main';
import AuthPage from './Pages/Auth/Auth';

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

  return (
    <BrowserRouter>
      {!userData || !userData.token ? <Redirect to="/Login" /> : <Redirect from="/Login" to="/" />}
      <Switch>
        <Route path="/Login">
          <AuthPage setUserData={setNewUserData} />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
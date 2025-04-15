import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';


function App() {
  const user = null;

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      console.log('USER IS LOGGED IN', authUser);
    } else {
      console.log('USER IS NOT LOGGED IN');
    }
  });
}, []);

  return (
    <div className="app">
    <Router>
      {!user ? (
        <LoginScreen />
      ): (
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      )}
    </Router>
    </div>
  );
}

export default App;

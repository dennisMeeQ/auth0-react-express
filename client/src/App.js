import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NavBar from './components/navbar';
import Home from './components/home';
import People from './components/people';
import Profile from './components/profile';
import GitHubCorner from './components/github';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <AuthenticatedRoute path="/profile" component={Profile} />
          <AuthenticatedRoute path="/people" component={People} />
        </Switch>
      </BrowserRouter>
      <GitHubCorner />
    </div>
  );
}

export default App;

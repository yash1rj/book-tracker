import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Main from './components/Main/Main';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="*">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

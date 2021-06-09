import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Main from './components/Main/Main';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="app">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
    </div>
  );
}

export default App;

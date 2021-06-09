import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import * as BooksAPI from './BooksAPI';

function App() {

  const dropDownChanged = (value, id) => {
    BooksAPI.update({
      id
    }, value);
  };

  return (
    <div className="app">
      <Route path="/" exact>
        <Main changer={dropDownChanged} />
      </Route>
      <Route path="/search" exact>
        <Search changer={dropDownChanged} />
      </Route>
    </div>
  );
}

export default App;

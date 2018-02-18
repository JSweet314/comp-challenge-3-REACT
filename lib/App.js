import React from 'react';
import SearchBar from './SearchBar.js';
import SideBar from './SideBar.js';
import Overview from './Overview.js';
import Main from './Main.js';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <SearchBar />
      <Overview />
      <Main />
      <SideBar />
    </div>
  )
}

module.exports = App;
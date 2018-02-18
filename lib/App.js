import React from 'react';
import SearchBar from './SearchBar.js';
import SideBar from './SideBar.js'
import './App.scss';

const App = () => {
  return (
    <div>
      <SearchBar />
      <SideBar />
    </div>
  )
}

module.exports = App;
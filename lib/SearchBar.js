import React from 'react';
import './stylesheets/SearchBar.scss';

const SearchBar = () => {
  return (
    <nav className="search-bar" id="search-bar">
      <button className="search-bar__btn search-bar__btn--side-menu" aria-label="view side menu"></button>
      <input type="search" className="search-bar__search" placeholder="Search for a job, task, or resume" aria-label="search bar" />
      <button className="search-bar__btn search-bar__btn--add-contact" aria-label="view contacts"></button>
      <button className="search-bar__btn search-bar__btn--schedule" aria-label="view calendar"></button>
      <button className="search-bar__btn search-bar__btn--dots-menu" aria-label="view main menu"></button>
    </nav>
  )
}

module.exports = SearchBar;
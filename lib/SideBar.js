import React, {Component} from 'react';
import Photo from './Photo.js';
import './stylesheets/SideBar.scss';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="side-bar">
        <Photo />
        <h2 className="side-bar__h2">Main</h2>
        <ul className="side-bar__link-list">
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--home"
               href="">HOME</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--jobs"
               href="">JOBS</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--resumes"
               href="">RESUMES</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--tasks" 
               href="">TASKS</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--calendar"
               href="">CALENDAR</a>
          </li>
        </ul>
        <h2 className="side-bar__h2">Admin</h2>
        <ul className="side-bar__link-list">
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--users" 
               href="">USERS</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--location"
               href="">LOCATION</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--workflows" 
               href="">WORKFLOWS</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--job-boards"
               href="">JOB BOARDS</a>
          </li>
          <li className="side-bar__list-item">
            <a className="side-bar__link side-bar__link--social" 
               href="">SOCIAL</a>
          </li>
        </ul>
        <h2 className="side-bar__h2">Categories</h2>
        <form action="" className="side-bar__form">
          <input type="checkbox"
                 className="side-bar__checkbox" 
                 id="yellow-checkbox" />
          <label className="side-bar__label side-bar__label--yellow"
                 htmlFor="yellow-checkbox">
            <div className="checkbox__div checkbox__div--yellow"></div>
            25,000 Weekly Steps
          </label>
          <input type="checkbox" 
                 className="side-bar__checkbox" 
                 id="blue-checkbox" />
          <label className="side-bar__label side-bar__label--blue"
                 htmlFor="blue-checkbox">
            <div className="checkbox__div checkbox__div--blue"></div>
            1 sit up
          </label>
          <input type="checkbox"
                 className="side-bar__checkbox"
                 id="red-checkbox" />
          <label className="side-bar__label side-bar__label--red"
                 htmlFor="red-checkbox">
            <div className="checkbox__div checkbox__div--red"></div>
            2 sit ups
          </label>
          <input type="checkbox"
                 className="side-bar__checkbox" 
                 id="green-checkbox" />
          <label className="side-bar__label side-bar__label--green"
                 htmlFor="green-checkbox">
            <div className="checkbox__div checkbox__div--green"></div>
            Walk around the block without stopping
          </label>
          <input type="checkbox"
            className="side-bar__checkbox"
            id="yellow-checkbox" />
          <label className="side-bar__label side-bar__label--yellow"
            htmlFor="yellow-checkbox">
            <div className="checkbox__div checkbox__div--yellow"></div>
            Replace 2 Meat Pies with salad
          </label>
          <input type="checkbox"
            className="side-bar__checkbox"
            id="yellow-checkbox" />
          <label className="side-bar__label side-bar__label--yellow"
            htmlFor="yellow-checkbox">
            <div className="checkbox__div checkbox__div--yellow"></div>
            Think about buying Silver Fitbit
          </label>
        </form>
      </aside>
    );

  }
}

module.exports = SideBar;
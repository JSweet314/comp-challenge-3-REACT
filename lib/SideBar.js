import React from 'react';
import './SideBar.scss';

const SideBar = () => {
  return (
    <aside className="side-bar">
      <figure className="side-bar__photo">
        <img className="side-bar__photo__img" src="images/yogi-headshot.jpeg" alt="User headshot" />
        <figcaption className="side-bar__photo__caption">Newton Barley</figcaption>
      </figure>
      <h2 className="side-bar__h2">Main</h2>
      <ul className="side-bar__link-list">
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--home" href="">HOME</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--jobs" href="">JOBS</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--resumes" href="">RESUMES</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--tasks" href="">TASKS</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--calendar" href="">CALENDAR</a>
        </li>
      </ul>
      <h2 className="side-bar__h2">Admin</h2>
      <ul className="side-bar__link-list">
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--users" href="">USERS</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--location" href="">LOCATION</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--workflows" href="">WORKFLOWS</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--job-boards" href="">JOB BOARDS</a>
        </li>
        <li className="side-bar__list-item">
          <a className="side-bar__link side-bar__link--social" href="">SOCIAL</a>
        </li>
      </ul>
      <h2 className="side-bar__h2">Categories</h2>
      <form action="" className="side-bar__form">
        <input type="checkbox" className="side-bar__checkbox" id="yellow-checkbox" />
        <label className="side-bar__label side-bar__label--yellow" for="yellow-checkbox"><div className="checkbox__div checkbox__div--yellow"></div>Administrative</label>
        <input type="checkbox" className="side-bar__checkbox" id="blue-checkbox" />
        <label className="side-bar__label side-bar__label--blue" for="blue-checkbox"><div className="checkbox__div checkbox__div--blue"></div>Design</label>
        <input type="checkbox" className="side-bar__checkbox" id="red-checkbox" />
        <label className="side-bar__label side-bar__label--red" for="red-checkbox"><div className="checkbox__div checkbox__div--red"></div>Executive</label>
        <input type="checkbox" className="side-bar__checkbox" id="green-checkbox" />
        <label className="side-bar__label side-bar__label--green" for="green-checkbox"><div className="checkbox__div checkbox__div--green"></div>Human Resources</label>
      </form>
    </aside>
  )
}

module.exports = SideBar;
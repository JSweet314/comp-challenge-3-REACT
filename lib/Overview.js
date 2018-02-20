import React from 'react';
import './stylesheets/Overview.scss';

const Overview = () => {
  return (
    <header className="overview">
      <div className="overview__display-wrapper">
        <div>
          <h1 className="overview__h1">Customer Service Representative</h1>
          <p className="overview__p">
            <img src="../lib/images/location-icon.svg" alt="location icon" className="overview__icon" />
            San Francisco, CA ∙ <a href="" className="overview__link overview__link--blue">Preview this post</a>
          </p>
        </div>
        <div>
          <button className="overview__btn overview__btn--delete"></button>
          <button className="overview__btn overview__btn--edit"></button>
          <button className="overview__btn overview__btn--bookmark"></button>
          <button className="overview__btn overview__btn--open">OPEN</button>
        </div>
      </div>
      <ul className="overview__list-links">
        <li className="overview__list-item overview__list-item--selected">
          <a href="" className="overview__link overview__link--active-bold">SUMMARY</a>
        </li>
        <li className="overview__list-item">
          <a href="" className="overview__link">APPLICANTS</a>
        </li>
        <li className="overview__list-item">
          <a href="" className="overview__link">JOB BOARD</a>
        </li>
        <li className="overview__list-item">
          <a href="" className="overview__link">INTERVIEWS</a>
        </li>
        <li className="overview__list-item">
          <a href="" className="overview__link">ACTIVITY</a>
        </li>
        <li className="overview__list-item">
          <a href="" className="overview__link">BROADCAST</a>
        </li>
        <li className="overview__list-item">
          <a href="" className="overview__link">NOTIFICATIONS</a>
        </li>
      </ul>
    </header>
  )
}

module.exports = Overview;
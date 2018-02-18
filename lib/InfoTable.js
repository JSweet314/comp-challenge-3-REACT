import React from 'react';
import './InfoTable.scss';

const InfoTable = () => {
  return (
    <section className="info-table">
      <h2 className="info-table__title info-table--heading info-table__heading--pad-left">JOB DESCRIPTION</h2>
      <p className="info-table__description info-table--heading">
        <button className="info-table__btn"><img src="images/edit-icon-white.svg" alt="edit button" className="info-table__icon" />EDIT</button>
      </p>
      <h2 className="info-table__title info-table--top-entry">POSITION TITLE</h2>
      <p className="info-table__description info-table--top-entry">Customer Service Representative</p>
      <h2 className="info-table__title">LOCATION</h2>
      <p className="info-table__description">San Francisco, CA</p>
      <h2 className="info-table__title">EMPLOYMENT TYPE</h2>
      <p className="info-table__description">Full-time</p>
      <h2 className="info-table__title">EXPERIENCE</h2>
      <p className="info-table__description">Mid-level</p>
      <h2 className="info-table__title">STATUS</h2>
      <p className="info-table__description">Open</p>
      <h2 className="info-table__title info-table--align-self-start">DESCRIPTION</h2>
      <p className="info-table__description info-table__description--pad-top-bottom">The Customer Service Representative is responsible for socialing with and providing quality assistance to all radical customers, repsponsible for keeping up-to-date on the various product shizzle; helping the bidness reduce customer service wait times while doing a backhand spring and eating a ham sandwich.</p>
      <h2 className="info-table__title">HIRING LEAD</h2>
      <figure className="info-table__photo">
        <img className="info-table__img" src="images/hiring-manager.jpeg" alt="Hiring Manager" />
        <figcaption className="info-table__caption">Tom Tizzy</figcaption>
      </figure>
      <h2 className="info-table__title">APPROVED SALARY</h2>
      <p className="info-table__description">$58,000</p>
    </section>
  )
}

module.exports = InfoTable;
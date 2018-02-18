import React from 'react';
import Divider from './Divider';
import './Graphs.scss';
import './CircleGraphs.scss';
import './Social.scss';
import './InfoTable.scss';

const Main = () => {
  return (
    <main>
      <div className="feature">
        <section className="graphs graphs--margin-right">
          <div className="graphs__display-wrapper">
            <svg className="circle-graph circle-graph--left" viewBox="0 0 36 40">
              <circle className="circle-graph__ring" cx="18" cy="22" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
              <circle className="circle-graph__segment" cx="18" cy="22" r="15.91549430918954" fill="transparent" stroke="#66B9BE" strokeWidth="3" strokeDasharray="79 21" strokeDashoffset="-26"></circle>
              <g className="circle-graph__text-group">
                <text className="circle-graph__text circle-graph__text--number" x="50%" y="50%">3,154</text>
                <text className="circle-graph__text circle-graph__text--label" x="50%" y="50%">APPLICANTS</text>
              </g>
            </svg>
            <svg className="circle-graph" viewBox="0 0 36 40">
              <circle className="circle-graph__ring" cx="18" cy="22" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
              <circle className="circle-graph__segment" cx="18" cy="22" r="15.91549430918954" fill="transparent" stroke="#3580B7" strokeWidth="3" strokeDasharray="39 61" strokeDashoffset="-26"></circle>
              <g className="circle-graph__text-group">
                <text className="circle-graph__text circle-graph__text--number" x="50%" y="50%">1,546</text>
                <text className="circle-graph__text circle-graph__text--label" x="50%" y="50%">INTERVIEWS</text>
              </g>
            </svg>
            <svg className="circle-graph circle-graph--right" viewBox="0 0 36 40">
              <circle className="circle-graph__ring" cx="18" cy="22" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="3"></circle>
              <circle className="circle-graph__segment" cx="18" cy="22" r="15.91549430918954" fill="transparent" stroke="#A26DAB" strokeWidth="3" strokeDasharray="19 81" strokeDashoffset="-26"></circle>
              <g className="circle-graph__text-group">
                <text className="circle-graph__text circle-graph__text--number" x="50%" y="50%">912</text>
                <text className="circle-graph__text circle-graph__text--label" x="50%" y="50%">FORWARDS</text>
              </g>
            </svg>
          </div>
          <h2 className="graphs__h2">TOTALS - Out of 5,231 views</h2>
        </section>
        <section className="graphs">
          <img src="images/bar-chart-crop.png" alt="a beautiful graph" className="graphs__img" />
          <h2 className="graphs__h2">APPLICANTS/DAY</h2>
        </section>
      </div>
      <Divider />
      <div className="sub-content">
        <section className="info-table">
          <h2 className="info-table__title info-table--heading info-table__heading--pad-left">JOB DESCRIPTION</h2>
          <p className="info-table__description info-table--heading">
            <button className="info-table__btn"><img src="images/edit-icon-white.svg" alt="Edit button" className="info-table__icon" />EDIT</button>
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
        <section className="social">
          <button className="social__btn social__btn--facebook">Post to Facebook</button>
          <button className="social__btn social__btn--twitter">Tweet this Job</button>
          <button className="social__btn social__btn--linkedin">Post to LinkedIn</button>
          <div className="social__display-wrapper social__display-wrapper--no-border">
            <img src="images/globe-icon.svg" alt="globe icon" className="social__icon" />
            <h2 className="social__h2">Link to this Job</h2>
          </div>
          <p className="social__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          <div className="social__display-wrapper social__display-wrapper--space-between social__display-wrapper--no-border">
            <input type="text" className="social__input" defaultValue="https://www.loremipsum.dol/sit/amet/viscitation" />
            <button className="social__btn social__btn--copy">Copy</button>
          </div>
          <div className="social__display-wrapper">
            <img src="images/widget-icon.svg" alt="widget icon" className="social__icon" />
            <h2 className="social__h2">Use the Button Widget</h2>
          </div>
          <p className="social__p">This widget embeds the buttons for sharing the job for submitting a resume on your website</p>
          <div className="social__display-wrapper social__display-wrapper--space-between social__display-wrapper--no-border">
            <input type="text" className="social__input" defaultValue="<script>lksdjflaksdjfasdfd sdfasdf sdf</script>" />
            <button className="social__btn social__btn--copy">Copy</button>
          </div>
          <div className="social__display-wrapper">
            <img src="images/paper-plane.svg" alt="paper airplane icon" className="social__icon" />
            <h2 className="social__h2">Upload Resumes by Email</h2>
          </div>
            <p className="social__p">You can automatically upload multiple resumes to this job by emailing the address below</p>
            <input type="email" className="social__input" defaultValue="tomtizzy@gmail.com" />
        </section>
      </div>
    </main>
  )
}

module.exports = Main;
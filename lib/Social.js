import React from 'react';
import './Social.scss';

const Social = () => {
  return (
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
  )
}

module.exports = Social;
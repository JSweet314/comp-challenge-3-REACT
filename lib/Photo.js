import React from 'react';
import './stylesheets/Photo.scss';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <figure className="photo">
        <img className="photo__img" src="../lib/images/yogi-headshot.jpeg" alt="User headshot" />
        <figcaption className="photo__caption">Newton Barley</figcaption>
      </figure>
    );
  }
}

module.exports = Photo;
import React from 'react';
import './Divider.scss';

const Divider = () => {
  return (
    <div className="divider">
      <hr className="divider__line" />
      <button className="divider__button" aria-label="Toggle bottom display"></button>
      <hr className="divider__line divider__line--right" />
    </div>
  )
}

module.exports = Divider;
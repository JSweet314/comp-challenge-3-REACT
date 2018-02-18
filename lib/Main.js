import React from 'react';
import Divider from './Divider.js';
import Graphs from './Graphs.js';
import Subcontent from './Subcontent.js';


const Main = () => {
  return (
    <main>
      <Graphs className="feature" />
      <Divider />
      <Subcontent />
    </main>
  )
}

module.exports = Main;
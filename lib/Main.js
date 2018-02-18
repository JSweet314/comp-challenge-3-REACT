import React from 'react';
import Divider from './Divider';
import Feature from './Feature';
import Subcontent from './Subcontent';
import GraphData from '../public/GraphData.js'

const Main = () => {
  return (
    <main>
      <Feature graphData={GraphData} />
      <Divider />
      <Subcontent />
    </main>
  )
}

module.exports = Main;
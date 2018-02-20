import React from 'react';
import CircleGraphs from './CircleGraphs.js';
import BarGraph from './BarGraph.js';
import './stylesheets/Graphs.scss';

const Graphs = (props) => {
  return (
    <div className={props.className}>
      <CircleGraphs className="graphs graphs--margin-right" />
      <BarGraph className="graphs" />
    </div>
  )
}

module.exports = Graphs;
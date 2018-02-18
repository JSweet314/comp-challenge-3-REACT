import React from 'react';
import CircleGraph from './CircleGraph.js';
import {CircleGraphData} from '../public/GraphData';
import './CircleGraphs.scss';

const CircleGraphs = (props) => {
  return (
    <section className={props.className}>
      <div className="graphs__display-wrapper">
        {
          CircleGraphData.map((graph, index) => {
            return (<CircleGraph graph={graph} key={index} />);
          })
        }
      </div>
      <h2 className="graphs__h2">TOTALS - Out of 5,231 views</h2>
    </section>
  )
}

module.exports = CircleGraphs;
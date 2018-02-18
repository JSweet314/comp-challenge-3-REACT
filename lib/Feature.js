import React from 'react';
import CircleGraph from './CircleGraph.js'
import './Graphs.scss';
import './CircleGraphs.scss';

const Feature = (props) => {
  return (
    <div className="feature">
      <section className="graphs graphs--margin-right">
        <div className="graphs__display-wrapper">
          {
            props.graphData.map((graph, index) => {
              return (<CircleGraph graph={graph} key={index} />);
            })
          }
        </div>
        <h2 className="graphs__h2">TOTALS - Out of 5,231 views</h2>
      </section>
      <section className="graphs">
        <img src="images/bar-chart-crop.png" alt="a beautiful graph" className="graphs__img" />
        <h2 className="graphs__h2">APPLICANTS/DAY</h2>
      </section>
    </div>
  )
}

module.exports = Feature;
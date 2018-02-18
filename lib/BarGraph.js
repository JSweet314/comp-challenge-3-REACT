import React from 'react';
import {BarGraphData} from '../public/GraphData'

const BarGraph = (props) => {
  return (
    <section className={props.className}>
      <img src={BarGraphData.img} alt={BarGraphData.caption} className="graphs__img" />
      <h2 className="graphs__h2">{BarGraphData.caption}</h2>
    </section>
  )
}

module.exports = BarGraph;
import React from 'react';

const CircleGraph = (props) => {
  return (
    <svg className={props.graph.className}
         viewBox="0 0 36 40">
      <circle className="circle-graph__ring"
              cx="18" 
              cy="22" 
              r={props.graph.circumference / (2 * Math.PI)} 
              fill="transparent" 
              stroke={props.graph.baseColor} 
              strokeWidth="3"></circle>
      <circle className="circle-graph__segment" 
              cx="18" 
              cy="22" 
              r={props.graph.circumference / (2 * Math.PI)} 
              fill="transparent" 
              stroke={props.graph.graphColor} 
              strokeWidth="3" 
              strokeDasharray={props.graph.strokeDasharray} 
              strokeDashoffset="-26"></circle>
      <g className="circle-graph__text-group">
        <text className="circle-graph__text circle-graph__text--number" 
              x="50%" 
              y="50%">{props.graph.number}</text>
        <text className="circle-graph__text circle-graph__text--label" 
              x="50%" 
              y="50%">{props.graph.label}</text>
      </g>
    </svg>
  );
};

module.exports = CircleGraph;
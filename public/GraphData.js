const CircleGraphData = [{
  label: "APPLICANTS",
  number: "3,154",
  strokeDasharray: "79 21",
  baseColor: "#d2d3d4",
  graphColor: "#66B9BE",
  circumference: 100,
  className: "circle-graph circle-graph--left"
},
  {
    label: "INTERVIEWS",
    number: "1,546",
    strokeDasharray: "39 61",
    baseColor: "#d2d3d4",
    graphColor: "#3580B7",
    circumference: 100,
    className: "circle-graph"
  },
  {
    label: "FORWARDS",
    number: "912",
    strokeDasharray: "19 81",
    baseColor: "#d2d3d4",
    graphColor: "#A26DAB",
    circumference: 100,
    className: "circle-graph circle-graph--right"
  }
];

const BarGraphData = {
  img: "../lib/images/bar-chart-crop.png",
  caption: "APPLICANTS/DAY"
};

module.exports = {CircleGraphData, BarGraphData};
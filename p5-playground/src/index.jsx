import React, { Component } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./styles.css";
import { render } from "react-dom";


class App extends Component{ 
  render() {
    const sketch = require("./sketches/Box").default;
    const sketch2 = require("./sketches/Particles").default;
    const flowField = require("./sketches/FlowField").default;
    return(
    <div className="slider">
      <div className="section"><ReactP5Wrapper sketch={sketch} /></div>
      <div className="section"><ReactP5Wrapper sketch={sketch2} /></div>
      <div className="section"><ReactP5Wrapper sketch={flowField} /></div>
    </div>
    )
  };
}

render(<App />, document.getElementById("app"));
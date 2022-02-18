import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ["Gaourav", "Tushar", "Shruti", "Nishi"]
    };
  }
  render() {
    return (
      <div id="main">
        <ol key="relativeListItem">
          {this.state.name &&
            this.state.name.map((item, index) => {
              let temp = "[relativeListItem" + { index };
              return <li key={temp}>{item}</li>;
            })}
        </ol>
      </div>
    );
  }
}

export default App;

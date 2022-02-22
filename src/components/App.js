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
        <ol key="relativeList">
          {this.state.name &&
            this.state.name.map((item, index) => {
              return <li key={"relativeListItem" + (index + 1)}>{item}</li>;
            })}
        </ol>
      </div>
    );
  }
}

export default App;

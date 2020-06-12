import React, { Component } from "react";
import ResultComponent from "../components/ResultComponent";

class Result extends Component {
  render() {
    return (
      <div>
        <ResultComponent data={this.props.dataToResult} />
      </div>
    );
  }
}

export default Result;

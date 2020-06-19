import React, { Component } from "react";
import GetData from "../../api/GetData";
import OnePageComponent from "./OnePageComponent";

class OnePage extends Component {
  state = {
    searchData: [],
    showSpinner: false,
    showResult: false,
  };

  getSearchValue = (data) => {
    this.setState({
      showSpinner: true,
      showResult: false,
    });
    GetData(data).then((a) =>
      this.setState({
        searchData: a,
        showSpinner: false,
        showResult: true,
      })
    );
  };

  render() {
    return (
      <OnePageComponent
        getSearchValueProp={this.getSearchValue}
        showSpinnerProp={this.state.showSpinner}
        showResultProp={this.state.showResult}
        searchDataProp={this.state.searchData}
      />
    );
  }
}

export default OnePage;

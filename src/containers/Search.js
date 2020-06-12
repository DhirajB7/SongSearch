import React, { Component } from "react";
import SearchComponent from "../components/SearchComponent";
import GetData from "../api/GetData";
import Result from "./Result";

class Search extends Component {
  state = {
    textBoxValue: "",
    displayResult: false,
    data: "",
    displayData: false,
  };

  searchTextChanged = (event) => {
    this.setState({
      textBoxValue: event.target.value,
    });
  };

  checkData = () => {
    alert("INPUT DATA IS NOT CORRECT");
  };

  searchButtonClicked = () => {
    GetData(this.state.textBoxValue).then((a) => {
      a.resultCount > 0
        ? this.setState({
            displayData: true,
            displayResult: true,
            data: a.results,
          })
        : this.checkData();
    });
  };

  render() {
    return (
      <div>
        <SearchComponent
          searchChange={this.searchTextChanged}
          buttonClicked={this.searchButtonClicked}
        />
        {this.state.displayData ? (
          this.state.displayResult ? (
            <Result dataToResult={this.state.data} />
          ) : null
        ) : null}
      </div>
    );
  }
}

export default Search;

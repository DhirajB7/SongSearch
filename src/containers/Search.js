import React, { Component } from "react";
import SearchComponent from "../components/SearchComponent";
import GetData from "../api/GetData";
import Result from "./Result";
import Spinner from "../common/Spinner";

class Search extends Component {
  state = {
    textBoxValue: "",
    displayResult: false,
    data: "",
    displayData: false,
  };

  searchTextChanged = (event) => {
    this.setState({
      textBoxValue: event.target.value.toUpperCase(),
    });
  };

  checkData = () => {
    this.setState({
      displayData: false,
    });
    alert("INPUT DATA IS NOT CORRECT");
  };

  searchButtonClicked = () => {
    this.setState({
      displayData: true,
      displayResult: false,
    });

    GetData(this.state.textBoxValue).then((a) => {
      a !== null
        ? this.setState({
            displayResult: true,
            displayData: false,
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
        {this.state.displayData ? <Spinner /> : null}

        {this.state.displayResult ? (
          <Result dataToResult={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default Search;

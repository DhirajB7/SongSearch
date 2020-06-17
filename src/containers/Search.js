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
    event.preventDefault();
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
    console.log("1");

    this.setState({
      displayData: true,
      displayResult: false,
    });

    console.log("2");

    GetData(this.state.textBoxValue).then((a) => {
      a !== null
        ? this.setState({
            displayResult: true,
            displayData: false,
            data: a.results,
          })
        : this.checkData();
    });

    console.log("3");
  };

  render() {
    return (
      <div>
        <SearchComponent
          searchChange={this.searchTextChanged}
          buttonClicked={this.searchButtonClicked}
          searchText={this.state.textBoxValue}
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

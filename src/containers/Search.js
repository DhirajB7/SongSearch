import React, { Component } from "react";
import SearchComponent from "../components/SearchComponent";

class Search extends Component {
  state = {
    textBoxValue: "",
  };

  searchTextChanged = (event) => {
    this.setState({
      textBoxValue: event.target.value.toUpperCase(),
    });
  };

  searchButtonClicked = () => {
    this.props.getValue(this.state.textBoxValue);
  };

  render() {
    return (
      <div>
        <SearchComponent
          searchChange={this.searchTextChanged}
          buttonClicked={this.searchButtonClicked}
          searchText={this.state.textBoxValue}
        />
      </div>
    );
  }
}

export default Search;

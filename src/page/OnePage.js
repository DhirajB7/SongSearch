import React, { Component } from "react";
import Search from "../containers/Search";
import Header from "../common/Header";
import Result from "../containers/Result";
import GetData from "../api/GetData";
import Spinner from "../common/Spinner";

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
      <React.Fragment>
        <br />
        <Header />
        <br />
        <Search getValue={this.getSearchValue} />
        <br />
        {this.state.showSpinner ? <Spinner /> : null}
        {this.state.showResult ? (
          <Result toSearch={this.state.searchData} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default OnePage;

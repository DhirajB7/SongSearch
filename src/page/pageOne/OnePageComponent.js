import React from "react";
import Search from "../../containers/Search";
import Header from "../../common/Header";
import Result from "../../containers/Result";
import Spinner from "../../common/Spinner";

function OnePageComponent(props) {
  return (
    <React.Fragment>
      <br />
      <Header />
      <br />
      <Search getValue={props.getSearchValueProp} />
      <br />
      {props.showSpinnerProp ? <Spinner /> : null}
      {props.showResultProp ? <Result toSearch={props.searchDataProp} /> : null}
    </React.Fragment>
  );
}

export default OnePageComponent;

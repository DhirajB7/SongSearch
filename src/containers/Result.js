import React from "react";
import ResultComponent from "../components/ResultComponent";
import NoResults from "../common/NoResults";

function Result(props) {
  return (
    <React.Fragment>
      {props.toSearch.length > 0 ? (
        <ResultComponent data={props.toSearch} />
      ) : (
        <NoResults />
      )}
    </React.Fragment>
  );
}

export default Result;

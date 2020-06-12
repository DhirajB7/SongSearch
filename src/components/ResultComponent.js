import React from "react";
import OneResultComponent from "./OneResultComponent";
import Spinner from "../common/Spinner";
import { Row } from "antd";

function ResultComponent(props) {
  if (props.data.length > 0) {
    return (
      <div>
        <Row>
          {props.data.map((data) => {
            return <OneResultComponent key={data.trackId} obj={data} />;
          })}
        </Row>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default ResultComponent;

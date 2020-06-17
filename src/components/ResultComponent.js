import React from "react";
import OneResultComponent from "./OneResultComponent";
import Spinner from "../common/Spinner";
import { Row } from "antd";

function ResultComponent(props) {
  if (props.data.length > 0) {
    return (
      <div>
        <Row>
          {props.data.map((element) => {
            return <OneResultComponent key={element.trackId} obj={element} />;
          })}
        </Row>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default ResultComponent;

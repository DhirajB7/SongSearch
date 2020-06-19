import React from "react";
import { Result } from "antd";

function NoResults() {
  return <Result status="warning" title="NO SONGS BY THIS NAME." />;
}

export default NoResults;

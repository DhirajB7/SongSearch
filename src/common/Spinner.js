import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Spinner() {
  return (
    <div className="example">
      <Spin size="large" tip="Loading..." indicator={antIcon} />
    </div>
  );
}

export default Spinner;

import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchComponent(props) {
  return (
    <div>
      <Input
        size="large"
        placeholder="Enter Text Here"
        onChange={props.searchChange}
      />
      <Button icon={<SearchOutlined />} onClick={props.buttonClicked} />
    </div>
  );
}

export default SearchComponent;

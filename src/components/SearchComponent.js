import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchComponent(props) {
  return (
    <React.Fragment>
      <Input
        id="search"
        size="large"
        placeholder="Enter Text Here"
        onChange={props.searchChange}
        value={props.searchText}
      />
      <Button icon={<SearchOutlined />} onClick={props.buttonClicked} />
    </React.Fragment>
  );
}

export default SearchComponent;

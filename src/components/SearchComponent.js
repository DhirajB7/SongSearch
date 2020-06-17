import React from "react";
import { Input } from "antd";

function SearchComponent(props) {
  return (
    <form onSubmit={props.buttonClicked}>
      <Input
        size="large"
        placeholder="Enter Text Here"
        onChange={props.searchChange}
        value={props.searchText}
      />
    </form>
  );
}

export default SearchComponent;

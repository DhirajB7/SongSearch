import React from "react";
import { Card, Col } from "antd";
const { Meta } = Card;

function OneResultComponent(props) {
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="image comes here" src={props.obj.artworkUrl100} />}
      >
        <Meta
          title={props.obj.trackName}
          description={props.obj.collectionName}
        />
      </Card>
    </Col>
  );
}

export default OneResultComponent;

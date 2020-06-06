import React from "react";
import { Col, Card } from "antd";

export default function Article(props) {
  const cardInfo = props.loading ? (
    <Card loading></Card>
  ) : (
    <Card hoverable title={props.data.sectionName} bordered={false} onClick={() => window.open(props.data.webUrl)}>
        <>{props.data.webTitle}</>
    </Card>
  );

  return (
    <Col className="article" sm={20} md={8} xl={4}>
      {cardInfo}
    </Col>
  );
}

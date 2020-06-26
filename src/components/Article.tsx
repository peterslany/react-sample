import React from "react";
import { Col, Card, Typography, Divider } from "antd";

const { Title } = Typography;

const parseDate = (date) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const d = new Date (date);
  return d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
}

export default function Article(props) {
  const cardInfo = props.loading ? (
    <Card className="article--card" loading></Card>
  ) : (
    <Card
      className="article--card"
      hoverable
      bordered={false}
      onClick={() => window.open(props.data.webUrl)}
    >
      <Title level={4}>{props.data.webTitle}</Title>
      <Divider />
      {props.data.sectionName} <Divider type="vertical" /> {parseDate(props.data.webPublicationDate)}
    </Card>
  );

  return (
    <Col className="article" sm={24} md={12} lg={8} xl={6}>
      {cardInfo}
    </Col>
  );
}

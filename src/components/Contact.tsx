import React from "react";
import { List, Typography, Divider } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "../styles/Contact.css";
const contactData = [
  {
    link: "https://github.com/peterslany",
    icon: <GithubOutlined />,
    description: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/peterslany/",
    icon: <LinkedinOutlined />,
    description: "LinkedIn",
  },
  {
    link: "mailto:p.slany99@gmail.com",
    icon: <MailOutlined />,
    description: "Write me an email.",
  },
];

export default function Contact() {
  return (
    <div className="contact">
      <Typography.Title>You can find me on:</Typography.Title>
      <Divider />
      <List
        bordered
        size="large"
        dataSource={contactData}
        renderItem={(item) => (
          <List.Item className="list-item">
            <a
              href={item.link}
              target="blank"
              className="list-item list-item--link"
            >
              {" "}
              {item.icon}
              <Divider type="vertical" />
              {item.description}
            </a>
          </List.Item>
        )}
      />
    </div>
  );
}

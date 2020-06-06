import React, { useState } from "react";
import { Menu, Switch } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ContactsOutlined,
  InfoCircleOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

interface State {
  colorTheme: "light" | "dark";
  isSwitchOn: boolean;
}

const toggleSwitch = (state: any, setState: any) => {
  setState({
    isSwitchOn: !state.isSwitchOn,
    colorTheme: state.isSwitchOn ? "light" : "dark",
  });
};

export const Header: React.FC = () => {
  const [state, setState] = useState<State>({
    colorTheme: "light",
    isSwitchOn: false,
  });
  return (
    <div className="header-fixed">
      <Menu
        theme={state.colorTheme}
        mode="horizontal"
      >
        <Menu.Item key="1">
          <HomeOutlined />
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <InfoCircleOutlined />
          <Link to="/about">About me</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <ContactsOutlined />
          <Link to="/contact">Contact</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <NotificationOutlined />
          <Link to="/news">News</Link>
        </Menu.Item>
        <Switch
        className="dark-mode-switch"
          checkedChildren="Dark Mode"
          unCheckedChildren="Dark Mode"
          checked={state.isSwitchOn}
          onClick={() => toggleSwitch(state, setState)}
        ></Switch>
      </Menu>
    </div>
  );
};

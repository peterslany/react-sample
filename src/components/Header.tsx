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

interface HeaderProps {
  setTheme;
}

const toggleSwitch = (state: any, setState: any, setTheme) => {
  const newTheme = state.isSwitchOn ? "light" : "dark";
  setTheme(newTheme);
  setState({
    isSwitchOn: !state.isSwitchOn,
    colorTheme: newTheme,
  });
};

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [state, setState] = useState<State>({
    colorTheme: "light",
    isSwitchOn: false,
  });
  return (
    <div className="header-fixed">
      <Menu theme={state.colorTheme} mode="horizontal" className="header-menu">
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
          onClick={() => {
            toggleSwitch(state, setState, props.setTheme);
          }}
        ></Switch>
      </Menu>
    </div>
  );
};

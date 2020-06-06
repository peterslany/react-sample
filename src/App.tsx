import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Layout } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";

const RenderWithWhiteBG = (props) => {
  return <div className="site-layout-content">{props.children}</div>;
};

function App() {
  return (
    <Layout className="layout">
      <Header></Header>
      <Layout.Content className="layout-content-main">
        <Switch>
          <Route
            path="/home"
            component={() => (
              <RenderWithWhiteBG>
                <Home />
              </RenderWithWhiteBG>
            )}
          />
          <Route
            path="/about"
            component={() => (
              <RenderWithWhiteBG>
                <About />
              </RenderWithWhiteBG>
            )}
          />
          <Route
            path="/contact"
            component={() => (
              <RenderWithWhiteBG>
                <Contact />
              </RenderWithWhiteBG>
            )}
          />
          <Route path="/news" component={News} />
          <Redirect to="/home" />
        </Switch>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        ©2020 Peter Slany
      </Layout.Footer>
    </Layout>
  );
}

export default withRouter(App);

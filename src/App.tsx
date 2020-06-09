import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Layout, Card } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";



const RenderWithBG = (props) => {
  return <Card className="site-layout-content">{props.children}</Card>;
};

function App(props) {
  const [theme, setTheme] = useState("light");
  return (
    <Layout className={"layout " + theme }>
      <Header setTheme={setTheme} />
      <Layout.Content className="layout-content-main">
        <Switch>
          <Route
            path="/home"
            component={() => (
              <RenderWithBG>
                <Home />
              </RenderWithBG>
            )}
          />
          <Route
            path="/about"
            component={() => (
              <RenderWithBG>
                <About />
              </RenderWithBG>
            )}
          />
          <Route
            path="/contact"
            component={() => (
              <RenderWithBG>
                <Contact />
              </RenderWithBG>
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

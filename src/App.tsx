import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/Dark.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Layout, Card } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";
import { fetchArticles } from "./redux/ActionCreators";
import { connect } from "react-redux";

const RenderWithBG = (props) => {
  return <Card className="site-layout-content">{props.children}</Card>;
};

const renderInLayout = (props) => {
  return (
    <>
      {" "}
      <Layout.Content className="layout-content-main">{props}</Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        ©2020 Peter Slany
      </Layout.Footer>
    </>
  );
};

function App(props) {
  const [theme, setTheme] = useState("light");
  // fetch articles for news section
  useEffect(() => {props.fetchArticles(props.articles.searchedWord, 1)}, []) ;

  return (
    <Layout className={"layout " + theme}>
      <Header setTheme={setTheme} />
      <Route path="/home" component={() => <Home theme={theme} />} />
      <Switch>
        <Route
          path="/about"
          component={() =>
            renderInLayout(
              <RenderWithBG>
                <About />
              </RenderWithBG>
            )
          }
        />
        <Route
          path="/contact"
          component={() =>
            renderInLayout(
              <RenderWithBG>
                <Contact />
              </RenderWithBG>
            )
          }
        />
        <Route path="/news" component={() => renderInLayout(<News />)} />
        <Redirect to="/home" />
      </Switch>
    </Layout>
  );
}

const MapStateToProps = state => ({
  articles : state.articles
});

const MapDispatchToProps = dispatch => ({
  fetchArticles: (query, page) => dispatch(fetchArticles(query, page)),
});
export default withRouter( connect(MapStateToProps, MapDispatchToProps) (App));

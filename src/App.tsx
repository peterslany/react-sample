import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Dark.css";
import { Route, Redirect, withRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Layout, Card } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import News from "./components/News";
import { fetchArticles } from "./redux/ActionCreators";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
const RenderWithBG = (props) => {
  return <Card className="site-layout-content">{props.children}</Card>;
};

const renderInLayout = (props) => {
  return (
    <>
      <Layout.Content className="layout-content-main">{props}</Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        ©2020 Peter Slany
      </Layout.Footer>
    </>
  );
};

const fadeTransition = (component) => ({ match }) => (
  <CSSTransition
    in={match != null}
    timeout={500}
    classNames="fade"
    unmountOnExit
  >
    <div className="transition-container">{component}</div>
  </CSSTransition>
);
function App(props) {
  const [theme, setTheme] = useState("light");
  // fetch articles for news section
  const fetchArticles = props.fetchArticles;
  const searchedWord = props.searchedWord;
  useEffect(() => {
    fetchArticles(searchedWord, 1);
  }, [fetchArticles, searchedWord]);
  return (
    <Layout className={"layout " + theme}>
      <Header setTheme={setTheme} />
      <Route key="/home" path="/home">
        {fadeTransition(<Home theme={theme} />)}
      </Route>

      <Route key="/about" path="/about">
        {fadeTransition(
          renderInLayout(
            <RenderWithBG>
              <About />
            </RenderWithBG>
          )
        )}
      </Route>
      <Route key="/contact" path="/contact">
        {fadeTransition( renderInLayout(
        <RenderWithBG>
          <Contact />
        </RenderWithBG>
        ))}
      </Route>
      <Route path="/news" >
        {fadeTransition(renderInLayout(<News />))}
      </Route>
      <Redirect to="/home" />
    </Layout>
  );
}

const MapStateToProps = (state) => ({
  articles: state.articles,
});

const MapDispatchToProps = (dispatch) => ({
  fetchArticles: (query, page) => dispatch(fetchArticles(query, page)),
});
export default withRouter(connect(MapStateToProps, MapDispatchToProps)(App));

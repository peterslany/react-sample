import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../redux/ActionCreators";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Typography, Input, Col } from "antd";
import Article from "./Article";
const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: (query) => dispatch(fetchArticles(query)),
});

export interface NewsProps {
  articles?: any;
  fetchArticles?;
}

export interface NewsState {
  query: String;
}

class News extends React.Component<NewsProps, NewsState> {
  renderArticles = () => {
    if (this.props.articles.isLoading) {
      return (
        <>
          <div className="loading-text">
            Loading results for: {this.props.articles.searchedWord} <LoadingOutlined />
          </div>

          <Row>
            {[0, 1, 2, 3, 4, 5].map((key) => (
              <Article key={key} data={null} loading={true} />
            ))}
          </Row>
        </>
      );
    }

    const articles = this.props.articles.articlesArray.length > 0 ? (<Row>
        {this.props.articles.articlesArray.map((article) => (
          <Article key={article.id} data={article} loading={false} />
        ))}
      </Row>) : ( <Typography.Paragraph className="news--header" >
          None articles about {this.props.articles.searchedWord} were found :(
        </Typography.Paragraph>);
    return (
      <>
        <Row>
            <Col className="news--header"sm={23} md={11}>
            <Typography.Title level={4}>
          Showing results for: {this.props.articles.searchedWord}
            </Typography.Title>
            </Col>
            <Col className="news--header"sm={23} md={11}>
            <Input.Search
            placeholder="Search articles"
            onSearch={value => value ? this.props.fetchArticles(value) : null}
            enterButton
            />
            </Col>
        </Row>
        {articles}
        
      </>
    );
  };

  state = { query: "Slovakia" };
  render() {
    return <>
        {this.renderArticles()}
    </>;
  }
  componentDidMount = () => {
    this.props.fetchArticles(this.state.query);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);

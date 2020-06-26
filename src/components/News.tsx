import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../redux/ActionCreators";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Typography, Input, Col, Pagination } from "antd";
import Article from "./Article";
const mapStateToProps = (state) => ({
  articles: state.articles,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: (query, page) => dispatch(fetchArticles(query, page)),
});

export interface NewsProps {
  articles?: any;
  fetchArticles?;
}

export interface NewsState {
  query: string;
}

class News extends React.Component<NewsProps, NewsState> {
  renderArticles = () => {
    if (this.props.articles.isLoading) {
      return (
        <>
          <div className="loading-content">
            <div className="loading-text">
              Loading results for: {this.props.articles.searchedWord}{" "}
              <LoadingOutlined />
            </div>
          </div>

          <Row>
            {[...Array(12)].map((key) => (
              <Article key={key} data={null} loading={true} />
            ))}
          </Row>
        </>
      );
    }

    const articles =
      this.props.articles.articlesArray.length > 0 ? (
        <Row>
          {this.props.articles.articlesArray.map((article) => (
            <Article key={article.id} data={article} loading={false} />
          ))}
        </Row>
      ) : (
        <Typography.Paragraph className="news--header">
          None articles about {this.props.articles.searchedWord} were found :(
        </Typography.Paragraph>
      );
    return <>{articles}</>;
  };

  state = { query: this.props.articles.searchedWord };

  render() {
    return (
      <>
        <Row>
          <Col className="news--header" sm={23} md={11}>
            <Typography.Title level={4}>
              Showing results for: {this.props.articles.searchedWord}
            </Typography.Title>
          </Col>
          <Col className="news--header" sm={23} md={11}>
            <Input.Search
              loading={this.props.articles.isLoading}
              placeholder="Search articles"
              onSearch={(value) =>
                value
                  ? [
                      this.setState({ query: value }),
                      this.props.fetchArticles(value, 1),
                    ]
                  : null
              }
              enterButton
            />
          </Col>
        </Row>
        {this.renderArticles()}
        <Pagination
          className="page-selector"
          showSizeChanger={false}
          defaultCurrent={0}
          current={
            this.props.articles.articlesArray &&
            this.props.articles.articlesArray.length > 0
              ? this.props.articles.currentPage
              : 0
          }
          total={this.props.articles.totalPages}
          onChange={(value) => {
            this.props.fetchArticles(this.state.query, value);
            window.scrollTo({
              top: 0,
            });
          }}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticle, delArticle } from "../action";
import { List, Segment, Button } from "semantic-ui-react";

function toCapitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function getPost(time) {
  const dt = new Date(time);
  return dt.getDate() + "/" + dt.getMonth() + 1 + "/" + dt.getFullYear();
}
function Articles({ state, fetchArticles, deleteArticle }) {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);
  return (
    <>
      <Segment inverted>
        <List divided animated inverted relaxed>
          {state &&
            state.map((e, i) => {
              return (
                <List.Item key={i}>
                  <List.Content floated="right">
                    <Button
                      inverted
                      color="blue"
                      as="a"
                      href={e.url}
                      target="_blank"
                    >
                      Read
                    </Button>
                    <Button onClick={deleteArticle(e.id)} inverted color="red">
                      Delete
                    </Button>
                  </List.Content>
                  <List.Header>BY : {toCapitalise(e.by)}</List.Header>
                  <List.Content>SCORE : {e.score}</List.Content>
                  <List.Content>TIME : {getPost(e.time)}</List.Content>
                  <List.Content>URL : {e.url}</List.Content>
                  <List.Content>TITLE : {e.title}</List.Content>
                </List.Item>
              );
            })}
        </List>
      </Segment>
    </>
  );
}
const mapStateToProps = state => {
  return {
    state: state.article
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(getArticle());
  },
  deleteArticle: id => {
    return () => {
      dispatch(delArticle(id));
    };
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);

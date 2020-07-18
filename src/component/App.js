import React, { useEffect } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { getArticle } from "../action";

function App({ state, fetchEvents }) {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);
  return (
    <div className="App">
      <h2>Top News Articles</h2>
      {state &&
        state.map(e => {
          return <div>{e.title}</div>;
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state.article
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => {
    dispatch(getArticle());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

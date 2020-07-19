import React from "react";
import "../styles.css";
import Articles from "./Articles";
import { Divider } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <h2>Top News Articles</h2>
      <Divider />
      <Articles />
    </div>
  );
}

export default App;

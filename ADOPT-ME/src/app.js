import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-importants">Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

render(<App />, document.getElementById("root"));

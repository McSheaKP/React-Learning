import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Ziggy",
  //     animal: "Dog",
  //     breed: "Daucshaund",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Laggy",
  //     animal: "Dog",
  //     breed: "Buttdog",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" }),
  // ]);

  return (
    <div>
      <h1 id="something-importants">Adopt Me!</h1>
      <Pet name="Ziggy" animal="Dog" breed="Dauchaund" />
      <Pet name="Doink" animal="Cat" breed="Mix" />
      <Pet name="ButtButt" animal="Dog" breed="Lab" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Ziggy",
      animal: "Dog",
      breed: "Daucshaund",
    }),
    React.createElement(Pet, {
      name: "Laggy",
      animal: "Dog",
      breed: "Buttdog",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Stray" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));

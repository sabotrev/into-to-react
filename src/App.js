import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adpot Me!"),
    React.createElement(Pet, {
      name: "Flynn",
      animal: "Dog",
      breed: "Boston Terrier"
    }),
    React.createElement(Pet, {
      name: "Mewmew",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));

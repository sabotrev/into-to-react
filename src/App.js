import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.js";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Flynn" animal="Dog" breed="Boston Terrier" />
      <Pet name="Mewmew" animal="Cat" breed="Mixed" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

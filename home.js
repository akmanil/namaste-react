import React from "react";
import ReactDOM from "react-dom/client";

const Home =()=>{
    return(
        <h1>Hello World</h1>
    )
}

// const home = ReactDOM.createRoot(document.getElementById("home"));
// home.render(<Home />);

const homeElement = document.getElementById("home");
if (homeElement) {
  const root = ReactDOM.createRoot(homeElement);
  root.render(<Home />);
}
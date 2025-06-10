import React from "react";
import ReactDOM from "react-dom/client";


// document.getElementById("root").innerHTML="Hello React"
       const heading = React.createElement("h1" , {className: "prop"} , "Hello Anil");
//        const heading = React.createElement(
//   "h1", 
//   { 
//     style: { 
//       color: "red",
//       backgroundColor: "yellow",     // we are also used that code
//       fontSize: "24px",
//       padding: "10px"
//     } 
//   },
//   "Hello Anil"
// );
       //createRoot() is a React 18+ method that creates a root for your React application
       const root = ReactDOM.createRoot(document.getElementById("root"));
       // for render use root.render()
       root.render(heading)
  
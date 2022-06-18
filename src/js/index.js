//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Rend from "/workspace/react-hello/src/js/component/Rend.jsx";


//render your react application
ReactDOM.render(<Rend />, document.querySelector("#app"));

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import Layout from "./layout";
//import your own components
//import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

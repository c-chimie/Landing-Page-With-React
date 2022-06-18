import React from "react";

import NavBar from "/workspace/react-hello/src/js/component/NavBar.jsx"
import Jumbotron from "/workspace/react-hello/src/js/component/Jumbotron.jsx";
import Footer from "./Footer.jsx";
import CardGroup from "./CardGroup.jsx";


//create your first component
const Rend = () => {
	return (
		<div>
		<NavBar/>
		<Jumbotron/>
		<CardGroup/>
		<Footer/>
		</div>
	);
};

export default Rend;

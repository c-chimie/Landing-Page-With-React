import React from "react";

import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
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

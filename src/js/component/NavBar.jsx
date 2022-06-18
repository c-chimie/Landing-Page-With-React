import React from "react";

const NavBar = () => {
	return (
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand" href="#">Start Bootstrap</span>
	<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Contact</a>
  </li>
</ul>
  </div>
</nav>
	);
};

export default NavBar;
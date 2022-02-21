import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
//Styles
import Logo from "../../img/SwLogo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark justify-content-around border border-warning">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={Logo} alt="Star Wars logo" width="150px" height="100" /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning btn-lg">favorites <span className="favCounter"> 0 </span></button>
				</Link>
			</div>
		</nav>
	);
};

/**
 * TODO len.storeFavorite
 * ? actions.storeFavorites().lenght
 **/

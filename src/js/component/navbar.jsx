import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
//Styles
import Logo from "../../assets/img/SwLogo.png";
import { FaTrashAlt } from "react-icons/fa";
//Components
import { SearchBar } from "./Search-Bar/searchBar.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark justify-content-around border border-3 border-warning">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src={Logo} alt="Star Wars logo" width="150px" height="100" /></span>
			</Link>
			<div>

			<SearchBar/>

			</div>
			<div className="dropdown">
			<button className="btn btn-warning btn dropdown-toggler" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">favorites <span class="badge">{store.storeFavorites.length}</span></button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.storeFavorites.map((fav, index) => {
					return <li key={index}><Link to="/" className="dropdown-item" href="#">{fav} <FaTrashAlt onClick={()=>actions.deleteFavorites(fav)}/></Link></li>
				})}
				</ul>
			</div>
		</nav>
	);
};



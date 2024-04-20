import { useState } from "react";
import "./navbar-style.css";
import { MenuItems } from "./menu-item";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className="nav">
			<h1 className="nav-logo">
				<Link to={"/"} style={{ textDecoration: "none", color: "#000" }}>
					YAK
				</Link>
			</h1>
			<div className="hamburger" onClick={handleClick}>
				<i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
			</div>

			<ul className={clicked ? "nav-menu active" : "nav-menu"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<NavLink className={item.cName} to={item.url}>
								<i className={item.icon}></i> {item.title}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;

import React from "react";
import "./footer-style.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="logo">
					<h1>Youth Association of Kargyam</h1>
					<p>Your destination to make a difference</p>
				</div>

				<div className="social">
					<a target="_blank" href="https://www.instagram.com/youthassociationkargyam/">
						<i className="fa-brands fa-instagram-square"></i>
					</a>
				</div>
			</div>

			<div className="bottom">
				<div className="col">
					<h4>Projects</h4>
					<a href="/project/yak">Yak</a>
					<a href="/project/winter-camp">Winter Camp</a>
					<a href="/project/youth-hockey-camp">Hockey Camp</a>
				</div>

				<div className="col">
					<h4>Partners</h4>
					<a target="_blank" href="https://www.healthladakh.org/">
						Health Ladakh
					</a>
					<a target="_blank" href="https://ladakheducationhabitat.org/">
						Ladakh Education Habitat
					</a>
				</div>

				<div className="col">
					<h4>Explore</h4>
					<a href="/project">Projects</a>
					<a href="/volunteer">Volunteer</a>
					<a href="/About">About</a>
				</div>

				<div className="col">
					<h4>Contact</h4>
					<a href="tel:+919682621429"><i className="fa-solid fa-phone"></i>Chamba Tsetan</a>
					<a href="tel:+919469265605"> <i className="fa-solid fa-phone"></i>Padma Othsal</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;

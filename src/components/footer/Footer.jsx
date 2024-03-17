import React from "react";
import "./footer-style.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="logo">
					<h1>Teach For Ladakh</h1>
					<p>Your destination to make a difference</p>
				</div>

				<div className="social">
					<a href="/">
						<i className="fa-brands fa-facebook-square"></i>
					</a>
					<a href="">
						<i className="fa-brands fa-instagram-square"></i>
					</a>
					<a href="">
						<i className="fa-brands fa-twitter-square"></i>
					</a>
					<a href="">
						<i className="fa-brands fa-youtube-square"></i>
					</a>
				</div>
			</div>

			<div className="bottom">
				<div className="col">
					<h4>Project</h4>
					<a href="/">Value</a>
					<a href="/">Status</a>
					<a href="/">Trust</a>
					<a href="/">Think</a>
				</div>

				<div className="col">
					<h4>Commmunity</h4>
					<a href="/">Facebook</a>
					<a href="/">Issues</a>
					<a href="/">Project</a>
					<a href="/">Twitter</a>
				</div>

				<div className="col">
					<h4>Help</h4>
					<a href="/">Support</a>
					<a href="/">Troubleshooting</a>
					<a href="/volunteer">Volunteer</a>
				</div>

				<div className="col">
					<h4>Others</h4>
					<a href="/">Terms of Service</a>
					<a href="/">Privacy Policy</a>
					<a href="/">License</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;

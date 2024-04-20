import React from "react";
import { Link } from "react-router-dom";
import volunteerImage from "../../assets/hockey2.jpg";
function VolunteerLink() {
	return (
		<div className="sign-up">
			<div className="volunteer-link">
				<h2 className="title">
					Empowering Youths In Kargyam: Ensuring Everyone has Equal Access to Education
				</h2>
				<h5 className="subtitle">
					Your small acts makes a lasting difference's in someone's life.
				</h5>
				<button>
					<a href="/volunteer">Volunteer With Us Today</a>
				</button>
			</div>
				<img src={volunteerImage} alt="volunteer image" />
		</div>
	);
}

export default VolunteerLink;

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import VolunteerImg from "@/assets/teach7.jpg";
import Footer from "@/components/footer/Footer";
import VolunteerForm from "@/components/volunteer-form/VolunterForm";

// Need to connect google excel and incoporate recaptcha
//Send form should have following details
// Name
//Country/state
//Phone number
//Email id
//What would you like to teach?
//Volunteering month
//CV
//Any question/comment

function VolunteerPage() {
	return (
		<div>
			<Navbar />
			<Hero cName="hero-mid" heroImg={VolunteerImg} title="Volunteer" />
			<VolunteerForm />
			<Footer />
		</div>
	);
}

export default VolunteerPage;

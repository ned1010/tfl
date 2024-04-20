import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import ProjectImg from "@/assets/teach10.jpg";
// import ProjectImg from "@/assets/teach2.jpg";
import Footer from "@/components/footer/Footer";
import Project from "@/components/project/Project";
import VolunteerLink from "../components/volunteer-form/VolunteerLink";

function ProjectPage() {
	return (
		<div>
			<Navbar />
			<Hero cName="hero-mid" heroImg={ProjectImg} title="Project" />

			<Project />
			<VolunteerLink />

			<Footer />
		</div>
	);
}

export default ProjectPage;

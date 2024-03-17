import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import ProjectImg from "@/assets/teach10.jpg";
import Footer from "@/components/footer/Footer";
import Project from "@/components/project/Project";

function ProjectPage() {
	return (
		<div>
			<Navbar />
			<Hero cName="hero-mid" heroImg={ProjectImg} title="Project" />

			<Project />

			<Footer />
		</div>
	);
}

export default ProjectPage;

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero-section/Hero";
import Footer from "@/components/footer/Footer";
import { useParams } from "react-router-dom";


import projects from "@/components/data/projects";

import NotFound from "./NotFound";
import FoundProject from "./FoundProject";
import VolunteerLink from "../volunteer-form/VolunteerLink";
function EachProject() {
	const { path } = useParams();

	const foundProject = projects.find((project) => project.id === path);
	console.log(foundProject);

	//not found
	if (!foundProject) {
		return <NotFound />;
	}

	return (
		foundProject && (
			<div>
				<Navbar />
				<Hero cName="hero-mid" heroImg={foundProject.mainImg} title={foundProject.title} />
				<div className="found-project">
					<h1>{foundProject.title}</h1>
					<p>{foundProject.brief}</p>

					{foundProject.items.map((projectItem, index) => {
						return (
							<FoundProject
								key={index}
								cName={projectItem.cName}
								description={projectItem.description}
								image1={projectItem.img1}
								image2={projectItem.img2}
							/>
						);
					})}
				</div>
				<VolunteerLink />

				<Footer />
			</div>
		)
	);
}

export default EachProject;

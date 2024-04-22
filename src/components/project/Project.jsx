
import ProjectItem from "./ProjectItem";
import "./project-style.css";

import projectData from "../data/projectData";

function Project() {
	return (
		<div className="project">
			<h2>Projects we are currently involved</h2>
			<p>Click on more to explore further</p>

			<div className="projectCards">
				{projectData.map((data) => {
					return (
						<ProjectItem
							key={data.id}
							heading={data.heading}
							description={data.description}
							image={data.img}
							path={data.path}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Project;

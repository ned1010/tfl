import "./project-style.css";
import { Link, useParams } from "react-router-dom";

//simple google form integration
function ProjectItem({ image, heading, description, path }) {
	return (
		<div className="project-cards">
			<div className="project-image">
				<img src={image} alt="image" />
			</div>
			<h4>{heading}</h4>
			<p className="project-text">{description}</p>
			<Link className="project-btn" to={`/project/${path}`}>
				More
			</Link>
		</div>
	);
}

export default ProjectItem;

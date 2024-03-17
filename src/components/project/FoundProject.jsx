import React from "react";
import "./project-style.css";
import PropTypes from "prop-types";

function FoundProject({ cName, heading, description, image1, image2 }) {
	return (
		<div className={cName}>
			<div className="desc-text">
				<p>{description} </p>
			</div>
			<div className="image">
				<img src={image1} alt="image" />
				<img src={image2} alt="image" />
			</div>
		</div>
	);
}

export default FoundProject;


// FoundProject.propTypes = {
// 	cName.PropTypes = PropTypes.string;

// }


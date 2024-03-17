import "./event-style.css";
import { Link } from "react-router-dom";

//simple google form integration
function EventData({ image, heading, text, googleFormLink }) {
	return (
		<div className="event-cards">
			<div className="event-image">
				<img src={image} alt="image" />
			</div>
			<h4>{heading}</h4>
			<p className="event-text">{text}</p>
			<Link className="googleform-link" to={googleFormLink} target="_blank">
				Sign up
			</Link>
		</div>
	);
}

export default EventData;

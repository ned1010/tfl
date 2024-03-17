import React from "react";
import EventData from "./EventData";
import "./event-style.css";

import eventData from "../data/eventData";



function Event() {
	return (
		<div className="event">
			<h2>Upcoming Events</h2>
			<p>Signup for the coming up events.</p>

			<div className="eventCards">
				{eventData.map((data) => {
					return (
						<EventData key={data.id} heading={data.heading} text={data.text} image={data.img} googleFormLink={data.googleForm} />
					);
				})}
			</div>
		</div>
	);
}

export default Event;

import { useState } from "react";
import "./volunteer.css";
import { Link } from "react-router-dom";

function VolunteerForm() {
	//volunteer detail structure
	const [volunteerData, setVolunteerData] = useState({
		name: "",
		country: "",
		email: "",
		subject: "",
		date: "",
		resume: "",
		question: "",
	});

	const [invalidEmail, setInvalidEmail] = useState("");

	const validateEmail = (email) => {
		const emailRegex = /^[a-zA-Z0-9_+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
		return emailRegex.test(email);
	};

	const handleInput = (event) => {
		const { name, value } = event.target;

		//created as function so that it doesn't record every changes but only when it is completed
		setVolunteerData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const config = {
		method: "POST",
		body: JSON.stringify(volunteerData),
	};
	const url = "https://api.apispreadsheets.com/data/pyodtgTPpObCJV83/";

	const submitForm = (event) => {
		event.preventDefault();
		console.log("got clicked to submit form");
		// console.log(volunteerData);

		//validate email addresses entered
		if (!validateEmail(volunteerData.email)) {
			setInvalidEmail("Please enter a valid email address.");
			return;
		}

		//create a post request here
		fetch(url, config)
			.then((res) => {
				if (res.status === 201) {
					alert("Form submitted");
					//clear the value after submission
					setVolunteerData({
						name: "",
						country: "",
						email: "",
						subject: "",
						date: "",
						resume: "",
						question: "",
					});
					setInvalidEmail("");
				} else {
					alert("there is error sending form");
					console.log(res.status);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="form-container">
			<h1> Teach for Ladakh program volunteering registration</h1>
			<h4>
				Please send your resume to{" "}
				<Link
					className="email-address"
					to={"mailto:youthassociationkargyam@gmail.com"}
					target="_blank"
					rel="noreferrer"
				>
					youthassociationkargyam@gmail.com
				</Link>
			</h4>
			<form action="" onSubmit={submitForm}>
				<input placeholder="Name" value={volunteerData.name} onChange={handleInput} name="name" />
				<input
					placeholder="Country/state"
					value={volunteerData.country}
					onChange={handleInput}
					name="country"
				/>
				<input
					placeholder="Email"
					value={volunteerData.email}
					onChange={handleInput}
					type="email"
					name="email"
					required
				/>
				<p className="invalid-email">{invalidEmail}</p>
				<textarea
					placeholder="what subject/s would you like to teach"
					value={volunteerData.subject}
					onChange={handleInput}
					name="subject"
					required
				/>
				<label htmlFor="date" className="date-label">
					When are you available to volunteer?
				</label>
				<input
					type="date"
					placeholder="when would you like to volunteer?"
					value={volunteerData.date}
					onChange={handleInput}
					name="date"
					required
				/>
				<label htmlFor="resume" className="resume-label">
					Did you send the resume to our email? If so, type yes
				</label>
				<input
					type="text"
					placeholder="Yes if you already send the resume?"
					value={volunteerData.resume}
					onChange={handleInput}
					name="resume"
					required
				/>

				<textarea
					placeholder="Any Questions"
					name="question"
					id=""
					cols="30"
					rows="10"
					value={volunteerData.question}
					onChange={handleInput}
				></textarea>
				<button className="register-btn">Register</button>
			</form>
		</div>
	);
}

export default VolunteerForm;

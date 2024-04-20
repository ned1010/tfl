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

	const [errorMessage, setErrorMessage] = useState({
		email: "",
		date: "",
		resume: "",
	});

	//email validation
	const validateEmail = (email) => {
		const emailRegex = /^[a-zA-Z0-9_+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
		return emailRegex.test(email);
	};

	//validate date of voluntee
	const validateDate = (year) => {
		const chosenDate = new Date(year);
		const today = new Date();
		return chosenDate > today;
	};

	const validateResume = (response) => {
		return response.toLowerCase() === "yes";
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
	const url = "https://api.apispreadsheets.com/data/4QGFiWX9uBQ0HLbq/";

	const submitForm = (event) => {
		event.preventDefault();
		setErrorMessage({
			email: "",
			date: "",
			resume: "",
		});

		let hasError = false;

		// Validate email
		if (!validateEmail(volunteerData.email)) {
			setErrorMessage((prevState) => ({
				...prevState,
				email: "Enter a valid email address",
			}));
			hasError = true;
		}

		// Validate date
		if (!validateDate(volunteerData.date)) {
			setErrorMessage((prevState) => ({
				...prevState,
				date: "Enter a valid date",
			}));
			hasError = true;
		}

		// Validate resume
		if (!validateResume(volunteerData.resume)) {
			setErrorMessage((prevState) => ({
				...prevState,
				resume: "Please send the resume to the email in the header.",
			}));
			hasError = true;
		}

		// If there's any error, return without submitting the form
		if (hasError) {
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
					setErrorMessage({
						email: "",
						date: "",
						resume: "",
					});
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
			<h1>Volunteer for Youth Association of Kargyam</h1>
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
				<p className="invalid">{errorMessage.email}</p>
				<label htmlFor="subjects" className="subject">
					Which subject/s would you like to teach?{" "}
				</label>
				<select id="subjects" name="subject" onChange={handleInput} value={volunteerData.value}>
					<option value="English">English</option>
					<option value="Mathematics">Mathematics</option>
					<option value="Science">Science</option>
					<option value="Social Studies">Social Studies</option>
					<option value="Arts">Arts</option>
				</select>
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

				<p className="invalid">{errorMessage.date}</p>
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
				<p className="invalid">{errorMessage.resume}</p>

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

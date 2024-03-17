import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
	const [timer, setTimer] = useState();
	const navigate = useNavigate();

	//create not found page that automatically goes back to the previous page
	useEffect(() => {
		const redirectBack = () => {
			setTimeout(() => {
				navigate("/projects");
			}, 10000);
		};

		redirectBack();
	}, [navigate]);
	return (
		<div>
			Go back by clicking the back button or will you be redirected to project page in {timer}
		</div>
	);
}

export default NotFound;

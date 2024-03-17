import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import AboutPage from "./pages/About";
import VolunteerPage from "./pages/Volunteer";
import EventPage from "./pages/Event";
import EachProject from "@/components/project/EachProject";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/projects" element={<ProjectPage />}></Route>
				<Route path="/projects/:path" element={<EachProject />}></Route>

				<Route path="/about" element={<AboutPage />}></Route>
				<Route path="/volunteer" element={<VolunteerPage />}></Route>
				<Route path="/event" element={<EventPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

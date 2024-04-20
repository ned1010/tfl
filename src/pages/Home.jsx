import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";
// import HomeImg from "../assets/profile.jpg";
import HomeImg from "../assets/hockey-profile.jpg";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Project from "../components/project/Project";
import Event from "@/components/events/Event";
// import About from "@/components/about/About";
import VolunteerLink from "../components/volunteer-form/VolunteerLink";
function HomePage() {
	return (
		<div>
			<Navbar />
			<Hero
				cName="hero"
				heroImg={HomeImg}
				title="Youth Association of Kargyam"
				text="Empowering Youths in Ladakh by Bridging the Education Gaps"
			/>
			<Banner />
			{/* <Event /> */}
			<Project />
			<VolunteerLink />
			<Footer />
		</div>
	);
}

export default HomePage;

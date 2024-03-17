import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";
import HomeImg from "../assets/home.jpg";
import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Event from "@/components/events/Event";

function HomePage() {
	return (
		<div>
			<Navbar />
			<Hero
				cName="hero"
				heroImg={HomeImg}
				title="Make a difference"
				text="Choose your place to make a difference"
				url="/about"
				btnClass="show"
				buttonText="Explore"
			/>
			<Banner />
			<Event />
			<Footer />
		</div>
	);
}

export default HomePage;

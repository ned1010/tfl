import "./banner-style.css";
import BannerData from "./BannerData";
import Teach1 from "@/assets/teach1.jpg";
import Teach3 from "@/assets/teach3.jpg";
import Teach13 from "@/assets/teach13.jpg";
import Teach18 from "@/assets/teach18.jpg";

const Banner = () => {
	return (
		<div className="banner">
			<h1>Here is your change to make a difference</h1>
			<p>Every effort makes a huge impact in someone's life</p>

			<BannerData
				cName="first-desc"
				heading="Youth Association of Kargyam"
				text="Yak is an initiative to provide supplementary learning resources in schools across remote Ladakh. "
				image1={Teach1}
				image2={Teach3}
			/>

			<BannerData
				cName="second-desc"
				heading="What do we do?"
				text="We invite volunteers, conduct workshops, and provide vocational training to kids studying in government schools. We work in collaboration with school and local administration at community levels."
				image1={Teach13}
				image2={Teach18}
			/>
		</div>
	);
};

export default Banner;

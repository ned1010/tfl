import "./banner-style.css";
import BannerData from "./BannerData";
import Teach1 from "@/assets/teach1.jpg";
import Teach3 from "@/assets/teach3.jpg";
import Teach13 from "@/assets/teach13.jpg";
import Teach18 from "@/assets/teach18.jpg";

const Banner = () => {
	return (
		<div className="banner">

			<BannerData
				cName="first-desc"
				heading="Youth Association of Kargyam"
				text="We founded YAK in 2012 with a vision to ensure all children in Kargyam have access to quality education Over the years this vision has grown into a ‘movement of change’ with the youth of the village leading the way. "
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

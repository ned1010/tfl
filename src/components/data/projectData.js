import YakProject from "@/assets/teach2.jpg";
import WinterCamp from "@/assets/teach10.jpg";
import YouthHockey from "@/assets/hockey1.jpg";

const projectData = [
	{
		id: "yak",
		heading: "Youth Association of Kargyam",
		description:
			"We founded YAK in 2012 with a vision to ensure all children in Kargyam have access to quality education with the Teach for Ladakh initiative and we intend to do the same across Ladakh. Over the years this vision has grown into a ‘movement of change’ with the youth of the village leading the way.",
		img: YakProject,
        path:"yak"
	},
	{
		id: "winter-camp",
		heading: "Winter Camp",
		description:
			"Winter camp is designed to reverse the steady decline in inventiveness, discovery and creative thinking seen in children after they start school. Winter Camps use local youth as mentors, building their skills while making the village a happenin’ place in winter. ",
		img: WinterCamp,
        path: "winter-camp"
	},
	{
		id: "youth-hockey-camp",
		heading: "Youth Hockey Camp",
		description:
			"YHDC is a play-based program where we use ice hockey to build soft skills in kids and boost their confidence. We also train them to become hockey players and our team has been participating in tournaments across Ladakh. ",
		img: YouthHockey,
        path: "youth-hockey-camp"
	},
];

export default projectData;

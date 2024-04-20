import YakProjectPic from "@/assets/teach4.jpg";
import image1 from "@/assets/teach5.jpg";
import image2 from "@/assets/teach7.jpg";
import image3 from "@/assets/teach8.jpg";
import image4 from "@/assets/teach11.jpg";

import WinterProjectPic from "@/assets/teach3.jpg";
import winter1 from "@/assets/teach5.jpg";
import winter2 from "@/assets/teach10.jpg";
import winter3 from "@/assets/teach17.jpg";
import winter4 from "@/assets/teach2.jpg";

import HockeyProjectPic from "@/assets/hockey-profile.jpg";
import hockey1 from "@/assets/hockey1.jpg";
import hockey2 from "@/assets/hockey2.jpg";
import hockey3 from "@/assets/hockey3.jpg";
import hockey4 from "@/assets/hockey4.jpg";

const projects = [
	// {
	// 	id: "yak",
	// 	mainImg: YakProjectPic,
	// 	title: "Youth Association of Kargyam",
	// 	brief: "YAY is the project initiative between some people and some.",
	// 	items: [
	// 		{
	// 			cName: "first-desc",
	// 			description:
	// 				"In 2012, a group of caring people in Kargyam came together to start the Youth Association of Kargyam (YAK). They had a big dream: to make sure every child in their village could go to a good school. They began with the Teach for Ladakh program, aiming to bring quality education to their community.",
	// 			img1: image1,
	// 			img2: image2,
	// 		},
	// 		{
	// 			cName: "second-desc",
	// 			description:
	// 				"Over time, their dream grew into something even bigger. It became a movement led by the young people of the village. They were determined to change things for the better. Now, YAK is all about giving kids in Ladakh the chance to learn and succeed. It's a story of people coming together to make a real difference in their community.",
	// 			img1: image3,
	// 			img2: image4,
	// 		},
	// 	],
	// },
	{
		id: "winter-camp",
		mainImg: WinterProjectPic,
		title: "Winter Camp",
		brief: "Winter Camp is the project initiative between some people and some.",
		items: [
			{
				cName: "first-desc",
				description:
					"Winter camp offers a creative haven during chilly months, reigniting kids' curiosity after the monotony of school. Village older kids serve as mentors, fostering a cool atmosphere while gaining new knowledge themselves, making the camp both fun and educational. ",
				img1: winter1,
				img2: winter2,
			},
			{
				cName: "second-desc",
				description:
					"These camps are magical places where kids explore creativity and develop innovative ideas. Older mentors also learn and grow while guiding younger ones. The entire village buzzes with excitement during winter, all thanks to these wonderful camps.",
				img1: winter3,
				img2: winter4,
			},
		],
	},
	{
		id: "youth-hockey-camp",
		mainImg: HockeyProjectPic,
		title: "Youth Hockey Development Camp",
		brief: "Youth hockey camp fosters skills, confidence, teamwork through play and training",
		items: [
			{
				cName: "first-desc",
				description:
					"YHDC (Youth Hockey Development Camp) is where kids learn and have fun with ice hockey. It's more than a game—it fosters confidence and teamwork. Through activities and training, children develop vital skills while enjoying skating and scoring goals.",
				img1: hockey1,
				img2: hockey2,
			},
			{
				cName: "second-desc",
				description:
					"YHDC goes beyond the rink, fostering unity among participants who train to represent Kargyam in hockey tournaments. Each session enhances hockey skills and instills discipline and sportsmanship values",
				img1: hockey3,
				img2: hockey4,
			},
		],
	},
];

export default projects;

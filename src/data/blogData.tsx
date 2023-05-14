/**
 * Blog data.
 */

import MyFiveTrapsIFellIntoAsASoftwareDeveloper from "../posts/MyFiveTrapsIFellIntoAsASoftwareDeveloper";
import React from "react";

export type BlogDataProps = {
	id: string;
	title: string;
	coverPhotoUrl: string;
	date: Date;
	content: JSX.Element;
}

export const blogData: Array<BlogDataProps> = [
	{
		id: "1",
		title: "My Top 5 Traps I Fell into as a Self-Taught Software Developer",
		coverPhotoUrl: "/images/5-self-taught-developer-traps-thumbnail.jpg",
		date: new Date("5/1/23"),
		content: <MyFiveTrapsIFellIntoAsASoftwareDeveloper />
	}
]
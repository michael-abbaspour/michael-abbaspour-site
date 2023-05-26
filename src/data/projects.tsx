/**
 * Projects data.
 */

import { IconType } from "react-icons";
import { SiCss3, SiJavascript, SiTypescript, SiReact, SiMysql, SiDocker, SiExpress } from "react-icons/si";
import { ReactComponentElement } from "react";

export type ProjectProps = {
	id: number;
	name: string;
	imageUrl: string;
	imageAltText: string;
	description: string;
	technologies: Array<ReactComponentElement<IconType>>;
	sourceCodeUrl: string;
}

export const projectsData: Array<ProjectProps> = [
	{
		id: 1,
		name: "Advanced Notes Platform",
		imageUrl: "/images/advanced-notes-platform-thumbnail.jpeg",
		imageAltText: "Advanced Notes Platform Thumbnail",
		description: "A full-scale application providing user registration, user authentication, multiple CRUD" +
			" operations for various types of posts (notes, categories, category types, etc.), all being written to" +
			" and from a relational database.",
		technologies: [
			<SiExpress className="default-icon-size express-icon" />,
			<SiTypescript className="default-icon-size typescript-icon" />,
			<SiCss3 className="default-icon-size css3-icon" />,
			<SiMysql className="default-icon-size mysql-icon" />,
			<SiDocker className="default-icon-size docker-icon" />
		],
		sourceCodeUrl: "https://github.com/michael-abbaspour/advanced-notes-platform"
	},
	{
		id: 2,
		name: "Unit Converter",
		imageUrl: "/images/unit-converter-thumbnail.jpeg",
		imageAltText: "Unit Converter Thumbnail",
		description: "A unit converter which uses two input elements which update and automatically populate one" +
			" another based on the value the user types and changes. In addition, disables options dynamically to" +
			" prevent both dropdowns having the same values, provides error validation, and displays the conversion at the bottom of the converter based on the units being calculated.",
		technologies: [
			<SiJavascript className="default-icon-size javascript-icon" />,
			<SiCss3 className="default-icon-size css3-icon" />
		],
		sourceCodeUrl: "https://github.com/michael-abbaspour/unit-converter"
	},
	{
		id: 3,
		name: "Password Generator",
		imageUrl: "/images/password-generator-thumbnail.jpeg",
		imageAltText: "Password Generator Thumbnail",
		description: "An application containing a form which generates a password based on user-defined parameters" +
			" such as whether or not to include lowercase characters, uppercase characters, numbers, or symbols." +
			" Also includes an option for the user to copy the password using the Clipboard API.",
		technologies: [
			<SiJavascript className="default-icon-size javascript-icon" />,
			<SiCss3 className="default-icon-size css3-icon" />
		],
		sourceCodeUrl: "https://github.com/michael-abbaspour/password-generator"
	},
	{
		id: 4,
		name: "React Multistep Form",
		imageUrl: "/images/react-multistep-form-thumbnail.jpeg",
		imageAltText: "React Multistep Form Thumbnail",
		description: "A form spanning multiple sections using React, TypeScript, and vanilla CSS.",
		technologies: [
			<SiReact className="default-icon-size react-icon" />,
			<SiTypescript className="default-icon-size typescript-icon" />,
			<SiCss3 className="default-icon-size css3-icon" />
		],
		sourceCodeUrl: "https://github.com/michael-abbaspour/react-multistep-form"
	},
	{
		id: 5,
		name: "Parasite Eve Databank",
		imageUrl: "/images/parasite-eve-databank-thumbnail.jpeg",
		imageAltText: "Parasite Eve Databank Thumbnail",
		description: "A project built for one of my favorite video games of all time. This application serves as" +
			" documentation for the game providing information on various assets such as its characters, weapons, armor, abilities, etc. The technologies used includes TypeScript and vanilla CSS.",
		technologies: [
			<SiTypescript className="default-icon-size typescript-icon" />,
			<SiCss3 className="default-icon-size css3-icon" />
		],
		sourceCodeUrl: "https://github.com/michael-abbaspour/parasite-eve-databank"
	}
]
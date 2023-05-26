/**
 * Project List Item component.
 */

import { ReactComponentElement } from "react";
import { IconType } from "react-icons";
import styles from "../../assets/styles/Projects.module.css";

type ProjectListItemProps = {
	id: number;
	name: string;
	imageUrl: string;
	imageAltText: string;
	description: string;
	technologies: Array<ReactComponentElement<IconType>>;
	sourceCodeUrl: string;
}

export function ProjectListItem({ id, name, imageUrl, imageAltText, description, technologies, sourceCodeUrl }: ProjectListItemProps) {
	return (
		<article key={id} className={styles.projectItemContainer}>
			<picture className={styles.projectImgContainer}>
				<img src={imageUrl} alt={imageAltText} />
			</picture>
			<div className={styles.projectTitleAndContent}>
				<h3 className={styles.projectContentTitle}>{name}</h3>
				<ul className={styles.technologiesList}>
					{technologies.map((tech) => {
						return (
							<li key={crypto.randomUUID()}>
								{tech}
							</li>
						)
					})}
				</ul>
				<p>{description}</p>
				<a href={sourceCodeUrl} className={styles.sourceCodeLink}>Source Code</a>
			</div>
		</article>
	)
}
/**
 * Projects List Component.
 */

import { projectsData } from "../../data/projects";
import { ProjectListItem } from "./ProjectListItem";
import styles from "../../assets/styles/Projects.module.css";

export default function ProjectsList() {
	return (
		<div className={styles.projectsWrapper}>
			{projectsData.map((data) => {
				return (
					<ProjectListItem
						key={data.id}
						id={data.id}
						name={data.name}
						imageUrl={data.imageUrl}
						imageAltText={data.imageAltText}
						description={data.description}
						technologies={data.technologies}
						sourceCodeUrl={data.sourceCodeUrl}
					/>
				)
			})}
		</div>
	)
}
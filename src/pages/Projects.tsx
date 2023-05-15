/**
 * Projects page.
 */

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProjectsList from "../components/projects/ProjectsList";
import styles from "../assets/styles/Projects.module.css";

export default function Projects() {
	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<div className="general-container">
					<h1 className={styles.projectsTitle}>Projects</h1>
					<ProjectsList />
				</div>
			</div>
			<Footer />
		</div>
	)
}
/**
 * Home page.
 */

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import RecentPosts from "../components/blog/RecentPosts";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiMysql, SiDocker } from "react-icons/si";
import styles from "../assets/styles/Home.module.css";

export default function Home() {

	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<div className="general-container">
					<div className={styles.homeTitleContainerWrapper}>
						<div className={styles.homeTitleContainer}>
							<div className={styles.homeTitleContent}>
								<h2 className={styles.homeTitleHeading}>Hi! I'm Michael Abbaspour</h2>
								<span>Software Developer and Tech Enthusiast</span>
								<div className={styles.techStack}>
									<span>Tech Stack</span>
									<span>|</span>
									<SiHtml5 className="default-icon-size html5-icon" />
									<SiCss3 className="default-icon-size css3-icon" />
									<SiJavascript className="default-icon-size javascript-icon" />
									<SiTypescript className="default-icon-size typescript-icon" />
									<SiReact className="default-icon-size react-icon" />
									<SiMysql className="default-icon-size mysql-icon" />
									<SiDocker className="default-icon-size docker-icon" />
								</div>
								<div className="margin-top-1">
									<a href="/projects" className={styles.projectsLink}>See What I'm Building</a>
								</div>
							</div>
						</div>
					</div>
					<RecentPosts />
				</div>
			</div>
			<Footer />
		</div>
	)
}
/**
 * Home page.
 */

import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiMysql, SiDocker } from "react-icons/si";
import styles from "../assets/styles/Home.module.css";

export default function Home() {

	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main grid-pc-center">
				<div className={styles.homeTitleContainerWrapper}>
					<div className={styles.homeTitleContainer}>
						<div className={styles.homeTitleContent}>
							<div className={styles.homeTitleHeadingWrapper}>
								<h1 className={styles.homeTitleHeading}>Hi! I'm Michael Abbaspour</h1>
								<span className={styles.homeCaptionHeading}>Software Developer and Tech Enthusiast</span>
							</div>
							<div className={styles.techStack}>
								<SiHtml5 className={`${styles.homeIconSizes} html5-icon`} />
								<SiCss3 className={`${styles.homeIconSizes} css3-icon`} />
								<SiJavascript className={`${styles.homeIconSizes} javascript-icon`} />
								<SiTypescript className={`${styles.homeIconSizes} typescript-icon`} />
								<SiReact className={`${styles.homeIconSizes} react-icon`} />
								<SiMysql className={`${styles.homeIconSizes} mysql-icon`} />
								<SiDocker className={`${styles.homeIconSizes} docker-icon`} />
							</div>
							<div className="margin-top-1">
								<Link to="/projects" className={styles.projectsLink}>See What I'm Building</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
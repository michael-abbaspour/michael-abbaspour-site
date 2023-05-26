/**
 * About page.
 */

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { FaqsAccordion } from "../components/faqs/FaqsAccordion";
import styles from "../assets/styles/About.module.css"

export default function About() {
	const personalImageUrl: string = "/images/IMG_0510.png";

	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<div className="general-container">
					<section className={styles.aboutMeSection}>
						<div className={styles.aboutMeImgSection}>
							<img src={personalImageUrl} alt="Site Author Image." className={styles.aboutMeImg} width={200} height={300} />
						</div>
						<div>
							<h1 className={styles.aboutMeTitle}>About Me</h1>
							<p>
								Welcome! Thank you for visiting my website and taking the time to learn more about me. My name is Michael Abbaspour, and I am a software developer and tech enthusiast.
								I began my programming journey in late 2019, transitioning from the landscaping industry, and am entirely self-taught.
								My site serves as a hub where I can share my projects with the world, but it also exists as a place where I can provide my thoughts on various programming topics and my personal experiences.
							</p>
						</div>
					</section>
					<section className="padding-block-2">
						<h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
						<FaqsAccordion />
					</section>
				</div>
			</div>
			<Footer />
		</div>
	)
}
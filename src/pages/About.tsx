/**
 * About page.
 */

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { FaqsAccordion } from "../components/faqs/FaqsAccordion";
import styles from "../assets/styles/About.module.css"

export default function About() {
	const personalImageUrl: string = "/images/michael-personal-profile-pic.jpg";

	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<div className="general-container">
					<h1 className="margin-bottom-half">About Me</h1>
					<section className={styles.aboutMeSection}>
						<img src={personalImageUrl} alt="Site Author Image." width={200} height={200} />
						<p>
							Welcome! Thank you for visiting my website and taking the time to learn more about me. My name is Michael Abbaspour, and I am a software developer and tech enthusiast.
							I began my programming journey in late 2019, transitioning from the landscaping industry, and am entirely self-taught.
							My site serves as a hub where I can share my projects with the world, but it also exists as a place where I can provide my thoughts on various programming topics and my personal experiences.
						</p>
					</section>
					<section className="padding-block-2">
						<h2>Frequently Asked Questions</h2>
						<FaqsAccordion />
					</section>
				</div>
			</div>
			<Footer />
		</div>
	)
}
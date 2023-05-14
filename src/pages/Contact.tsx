/**
 * Contact page.
 */

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<div className="general-container">
					<h1 className="text-align-center margin-bottom-1">Contact</h1>
					<p className="text-align-center margin-bottom-1">
						Looking for a hard-working software developer to join your team? Feel free
						to contact me through this form! Please provide your name, company, email, a link to your
						job posting, and a brief message and I will get back to you as soon as possible.
					</p>
					<ContactForm />
				</div>
			</div>
			<Footer />
		</div>
	)
}
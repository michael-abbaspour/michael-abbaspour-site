/**
 * Contact Form component.
 */

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../assets/styles/Contact.module.css";

export default function ContactForm() {
	const form = useRef(null);
	const [formStatus, setFormStatus] = useState<string | null>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();
		setFormStatus("submitting");

		emailjs.sendForm(process.env.VITE_EMAIL_SERVICE_ID as string, process.env.VITE_EMAIL_CONTACT_TEMPLATE_ID as string, form.current!, process.env.VITE_EMAIL_PUBLIC_KEY)
			.then((result) => {
				console.log(result.text);
				setFormStatus("success")
				e.target.reset();
			}, (error) => {
				console.log(error.text);
				setFormStatus("error")
			});
	};
	return (
		<div className={styles.contactFormWrapper}>
			<form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
				<div>
					<label>
						First Name <input type="text" name="first_name" required />
					</label>
				</div>
				<div>
					<label>
						Last Name <input type="text" name="last_name" required />
					</label>
				</div>
				<div>
					<label>
						Company Name <input type="text" name="company_name" />
					</label>
				</div>
				<div>
					<label>
						Email <input type="email" name="user_email" required />
					</label>
				</div>
				<div>
					<label>
						Link <input type="url" name="link" />
					</label>
				</div>
				<div>
					<label>
						Message <textarea name="message" className={styles.textareaWrapper} required />
					</label>
				</div>
				<div className={styles.contactFormButtonWrapper}>
					<button type="submit" className={styles.contactFormButton}>Send</button>
				</div>
				<div className={styles.contactFormSubmitStatus}>
					{formStatus === "submitting" && (
						<div className={styles.contactFormStatusSubmitting}>Submitting...</div>
					)
					}
					{formStatus === "success" && (
						<div className={styles.contactFormStatusSuccess}>Success! Message sent.</div>
					)
					}
					{formStatus === "error" && (
						<div className={styles.contactFormStatusError}>Message failed to send.</div>
					)
					}
				</div>
			</form>
		</div>
	);
}
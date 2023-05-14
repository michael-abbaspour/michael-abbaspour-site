/**
 * Contact Form component.
 */

import styles from "../../assets/styles/Contact.module.css";

export default function ContactForm() {
	return (
		<div className={styles.contactFormWrapper}>
			<form className={styles.contactForm}>
				<div>
					<label>
						First Name <input type="text" name="firstName" required />
					</label>
				</div>
				<div>
					<label>
						Last Name <input type="text" name="lastName" required />
					</label>
				</div>
				<div>
					<label>
						Company Name <input type="text" name="companyName" />
					</label>
				</div>
				<div>
					<label>
						Email <input type="email" name="email" required />
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
			</form>
		</div>
	);
}
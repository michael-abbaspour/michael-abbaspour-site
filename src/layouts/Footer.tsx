/**
 * Footer layout component.
 */

export default function Footer() {
	const socialLinks = {
		linkedIn: "https://www.linkedin.com/in/michaelabbaspour/",
		twitter: "https://twitter.com/michaelabb40617",
		github: "https://github.com/michael-abbaspour"
	}

	return (
		<footer className="primary-footer">
			<div className="social-links-list">
				<a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
				<a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
				<a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
			</div>
			<span className="copyright">&copy; 2023 Michael Abbaspour</span>
		</footer>
	)
}
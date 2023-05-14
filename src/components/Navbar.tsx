/**
 * Navbar layout component.
 */

import { Link } from "react-router-dom";

export function Navbar() {
	return (
		<nav className="primary-navigation flex">
			<div className="logo-circle">
				<h4 className="logo-text"><a href="/">MA</a></h4>
			</div>
			<ul className="nav-list flex list-style-type-none">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	)
}
/**
 * Desktop Navbar component.
 */

import { Link } from "react-router-dom";

export default function DesktopNavbar() {
	return (
		<div className="nav-list-wrapper">
			<ul className="nav-list list-style-type-none">
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
		</div>
	)
}
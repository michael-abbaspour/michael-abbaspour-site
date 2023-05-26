/**
 * Mobile Navbar component.
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
	const [mobileNav, setMobileNav] =  useState(false);
	const navRef = useRef<any>();

	const toggleMobileNav = function() {
		return setMobileNav(!mobileNav);
	}

	const handleClickOutside = (event: Event) => {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setMobileNav(false);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		}
	}, []);

	return (
		<div ref={navRef} className="mobile-nav-list-wrapper">
			<div className="hamburger" onClick={toggleMobileNav}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={mobileNav ? "mobile-nav-list-expanded" : "mobile-nav-list-hidden"}>
				<ul className="mobile-nav-list list-style-type-none">
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
		</div>
	)
}
/**
 * Navbar layout component.
 */

import DesktopNavbar from "./navigation/DesktopNavbar";
import MobileNavbar from "./navigation/MobileNavbar";

export function Navbar() {
	return (
		<>
			<nav className="primary-navigation flex">
				<div className="logo-circle">
					<h4 className="logo-text"><a href="/">MA</a></h4>
				</div>
				<DesktopNavbar />
				<MobileNavbar />
			</nav>
		</>

	)
}
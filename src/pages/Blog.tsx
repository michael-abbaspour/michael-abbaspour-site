/**
 * Blog page.
 */
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import BlogList from "../components/blog/BlogList";

export default function Blog() {
	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<div className="general-container">
					<h1 className="margin-bottom-1">Blog</h1>
					<BlogList />
				</div>
			</div>
			<Footer />
		</div>
	)
}
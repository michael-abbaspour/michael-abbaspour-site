/**
 * Blog Post component.
 */

import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogData";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from "../../assets/styles/Blog.module.css";

export default function BlogPost() {
	const { postId } = useParams();
	const post = blogData.find(p => p.id === postId);

	return (
		<div className="site-primary-container">
			<Header />
			<div className="primary-main">
				<article className="general-container">
					<div className={styles.blogPostHeadingSection}>
						<img src={post?.coverPhotoUrl} alt={`${post?.title} cover photo.`} className={styles.blogPostCoverPhoto} />
						<h1>{post?.title}</h1>
						<span>Date: {post?.date.toLocaleDateString()}</span>
					</div>
					<div>
						{post?.content}
					</div>
				</article>
			</div>
			<Footer />
		</div>
	);
}
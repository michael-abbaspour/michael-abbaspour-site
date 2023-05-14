/**
 * Blog List Item component.
 */

import { Link } from "react-router-dom";
import { BlogDataProps } from "../../data/blogData";
import styles from "../../assets/styles/Blog.module.css";

export function BlogListItem({ id, title, coverPhotoUrl, date }: Partial<BlogDataProps>) {
	return (
		<div className={styles.blogListItemWrapper}>
			<img src={coverPhotoUrl} alt="Post Thumbnail." className={styles.blogListItemThumbnail} />
			<div className={styles.blogListItemContent}>
				<Link className={styles.blogListItemTitle} to={`/blog/${id}`}>{title}</Link>
				<span>Date: {date?.toLocaleDateString()}</span>
			</div>
		</div>
	)
}
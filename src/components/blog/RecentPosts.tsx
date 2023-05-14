/**
 * Recent Posts component.
 */

import { BlogListItem } from "./BlogListItem";
import { blogData } from "../../data/blogData";
import styles from "../../assets/styles/Blog.module.css";

export default function RecentPosts() {
	const mostRecentDates = blogData.slice(0, 2).sort((a, b) => {
		return (
			Number(b.date) - Number(a.date)
		)
	});

	return (
		<div className={styles.blogListWrapper}>
			<h2 className="text-align-center padding-block-2">Latest Posts</h2>
			<div className={styles.blogListGrid}>
				{mostRecentDates.map((post) => {
					return (
						<BlogListItem
							key={post.id}
							id={post.id}
							coverPhotoUrl={post.coverPhotoUrl}
							title={post.title}
							date={post.date}
						/>
					)
				})}
			</div>
		</div>
	)
}
/**
 * Blog List component.
 */

import { BlogListItem } from "./BlogListItem";
import { blogData } from "../../data/blogData";
import styles from "../../assets/styles/Blog.module.css";

export default function BlogList() {
	return (
		<div className={styles.blogListWrapper}>
			<div className={styles.blogListGrid}>
				{blogData.map((data) => {
					return (
						<BlogListItem
							key={data.id}
							id={data.id}
							title={data.title}
							coverPhotoUrl={data.coverPhotoUrl}
							date={data.date}
						/>
					)
				})}
			</div>
		</div>
	)
}
/**
 * Table of Contents component.
 */

export type Heading = {
	id: string;
	text: string;
}

type HeadingProps = {
	headings: Heading[];
}

export function TableOfContents(props: HeadingProps) {
	const { headings } = props;

	return (
		<>
			<h2>Table of Contents</h2>
			<ul className="table-of-contents-list list-style-type-none margin-bottom-1">
				{headings.map((heading, index) => {
					const id = heading.id;
					return (
						<li key={index}>
							<span>{heading.text}</span>
						</li>
					)
				})}
			</ul>
		</>
	)
}
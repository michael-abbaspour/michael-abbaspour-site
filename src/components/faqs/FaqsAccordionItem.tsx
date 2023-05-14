/**
 * Faqs Accordion Item component.
 */

import { MouseEventHandler, useRef } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import styles from "../../assets/styles/Faqs.module.css";

type FaqsAccordionItemProps = {
	id: number,
	question: string,
	answer: string,
	onToggle: MouseEventHandler,
	active: boolean
}

export function FaqsAccordionItem({ id, question, answer, onToggle, active }: FaqsAccordionItemProps) {
	const contentElement = useRef<HTMLDivElement | null>(null);

	return (
		<div key={id} className={`${styles.faqAccordionPanel} ${active ? styles.active : ""}`}>
			<div className={styles.faqPanelHeading}>
				<h4>{question}</h4>
				<button type="button" aria-label="Toggle Panel" className={styles.faqAccordionTrigger} onClick={onToggle}>
					<span>{active ? <AiFillCaretUp className={styles.faqAccordionToggleIcon} /> : <AiFillCaretDown className={styles.faqAccordionToggleIcon} />}</span>
				</button>
			</div>
			<div
				ref={contentElement}
				className={styles.faqAccordionContent}
				style={
					active
						? { height: contentElement.current?.scrollHeight }
						: { height: "0px" }
				}
			>
				<p>{answer}</p>
			</div>
		</div>
	)
}
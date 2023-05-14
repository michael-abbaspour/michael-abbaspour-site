/**
 * Faqs Component.
 */
import { useState } from "react";
import { FaqsAccordionItem } from "./FaqsAccordionItem";
import { faqsData } from "../../data/faqsData";
import styles from "../../assets/styles/Faqs.module.css";

export function FaqsAccordion() {
	const [clicked, setClicked] = useState<string | number>("0");

	const handleToggle = (index: string | number) => {
		if (clicked === index) {
			return setClicked("0");
		}
		setClicked(index);
	};

	return (
		<div className={styles.faqWrapper}>
			<div className={styles.faqAccordion}>
				{faqsData.map((faq, index) => {
					return (
						<FaqsAccordionItem
							id={faq.id}
							key={faq.id}
							question={faq.question}
							answer={faq.answer}
							onToggle={() => handleToggle(index)}
							active={clicked === index}
						/>
					)
				})}
			</div>
		</div>
	)
}
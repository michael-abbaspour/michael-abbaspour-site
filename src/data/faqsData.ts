/**
 * FAQs data information.
 */

export type FaqsProps = {
	id: number,
	question: string;
	answer: string;
}

export const faqsData: Array<FaqsProps> = [
	{
		id: 1,
		question: "What made you want to get into programming?",
		answer: "When I was starting my own lawn care/landscaping business, I began planning my marketing strategy." +
			" Of course, creating my own website was of the utmost priority. I began using website builder tools" +
			" such as Wix and Squarespace, as well as CMSs like WordPress. Although those tools are relatively low-code and I would eventually stop using them, I fell in love with the design planning and building process. So much so, I began enjoying it more than performing the actual services my company was meant for. That’s when I knew that I needed to switch careers."
	},
	{
		id: 2,
		question: "What programming languages and tools do you use?",
		answer: "PHP was my first programming language, and I will always have a soft spot for it. Eventually, I began using JavaScript/TypeScript as my primary language(s), with Node.js as the runtime environment."
	},
	{
		id: 3,
		question: "What programming languages and tools are used for this site?",
		answer: "This site is built using React, TypeScript, and vanilla CSS."
	}
]
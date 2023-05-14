/**
 * My Top 5 Traps I Fell into as a Self-Taught Software Developer.
 */

import React from "react";
import { Heading, TableOfContents } from "../components/TableOfContents";
import styles from "../assets/styles/Blog.module.css";

export default function MyFiveTrapsIFellIntoAsASoftwareDeveloper() {
	const headingsData: Heading[] = [
		{
			id: "first",
			text: "Jumping Straight into a CMS or High-Level Programming Language Framework/Libraries"
		},
		{
			id: "second",
			text: "Not Finding Local Software Developers in Your Area"
		},
		{
			id: "third",
			text: "Jumping Around on Topics and Projects"
		},
		{
			id: "fourth",
			text: "Not Finding a Good Tutor or Teacher to Listen To"
		},
		{
			id: "fifth",
			text: "Knowing When You Have Learned Enough"
		}
	]

	return (
		<div className={styles.postContentContainer}>
			<div className={styles.postContentSection}>
				<p>
					When I began my journey to become a software developer - I knew it was not going to be an easy one. I had currently been operating my own landscaping company, and it was not until I began building my business’s website that I ultimately decided to make the transition to programming. I have not looked back since.
				</p>
				<p>
					Although I do not ultimately regret the decision as a whole, I do slightly regret how I approached certain aspects. This article would never end if I went over all of the mistakes and traps I had fallen into, so instead I am going to list and explain the top ones that I believe hurt me the most and greatly held me back.
				</p>
				<TableOfContents headings={headingsData} />
			</div>
			<div className={styles.postContentSection}>
				<h3>Jumping Straight into a CMS or High-Level Programming Language Framework/Libraries</h3>
				<p>
					CMS stands for “Content Management System,” an application that serves as a way to create and manage digital content. Examples of CMSs include WordPress and Shopify. Examples of high-level programming language frameworks/libraries include React, Laravel, Bootstrap (if you count CSS), etc.
				</p>
				<p>
					I wanted to create a job listing website when I first began programming. As someone who knew next to nothing about web and application building, I did not know where to begin, as there are many different paths to take. WordPress was, by far, one of the most used applications I had seen, and many advocated hard for it. In addition, when watching peoples’ building process, there were many using plugins and themes to achieve great functionality with little-to-no code. With the combination of beautiful-looking websites, plugins/themes, etc. I immediately dived into WordPress.
				</p>
				<p>
					Before I continue, I want to say there is nothing wrong with WordPress. It’s an excellent tool for what it sets out to achieve. However, as someone who wanted to get into programming and was new, I did not do my due diligence and spent over a year using WordPress alone. WordPress is built on top of PHP, and I learned PHP from it because I wanted to customize WordPress and add more advanced features. While learning PHP was great, it was based on WordPress’s own ecosystem, so it had many custom methods exclusive to it.
				</p>
				<p>
					For example, hash() is a hash function that generates a value in PHP. In WordPress, I learned wp_hash(), a WordPress-exclusive function only used within the CMS. That function would be useless outside of WordPress. This is just a tiny example, but it illustrates how going into a CMS first can have drawbacks unless you plan to become a developer exclusively using that platform or have already learned the language it is built on top of.
				</p>
				<p>
					Frameworks/libraries are different from CMSs, but the same logic can also be applied to them. You should first learn the programming language the framework/library is built on top of before you begin using them. For example, you should fundamentally understand JavaScript before using something like React or Angular.
				</p>
			</div>
			<div className={styles.postContentSection}>
				<h3>Not Finding Local Software Developers in Your Area</h3>
				<p>
					Now this trap and pitfall are the only ones on the list that you may not be able to do anything about; however, it can really make everything that much more difficult. I went two years without knowing anyone in my local area who knew programming or was a software developer. Additionally, I did not try to connect to people online or join a community. This is one choice I wish I did not make because it really could have propelled me forward if I had done so. If you do not have any friends or family in your immediate circle that are in programming or computer engineering, here are some ideas to help you address this issue:
				</p>
				<ul className="list-style-type-none">
					<li>- Search for local Meetups in your city.</li>
					<li>- Look for an appropriate programming board in your local area on Reddit. If you cannot find one for your local area, join a general one and participate.</li>
					<li>- Look for Facebook Groups in your local area that is catered toward programming.</li>
				</ul>
				<p>
					They say your mistakes can become your best teacher, but some aspects are generally better if you can avoid them entirely.
				</p>
			</div>
			<div className={styles.postContentSection}>
				<h3>Jumping Around on Topics and Projects</h3>
				<p>
					For someone such as myself who loves trying out different things, this became one of the most significant drawbacks when initially learning to program. There are so many topics in programming, and it takes a long time to truly understand all of the necessary information regarding said topics. For example, if you choose Python as your first language, go all in. This goes for any programming language or topic you choose. You do not have to understand every little piece of data; however, you should feel extremely comfortable using it and its many advanced features.
				</p>
				<p>
					Projects are, in my opinion, the best way to level up your skills as a programmer or software developer. They are also the bread and butter to showcase what you are truly capable of. That said, projects can take a long time to build, especially if you want to optimize them as much as possible. I have so many half-finished projects saved on my local computer that I cannot put them on my portfolio because they are incomplete in the sense that they are unusable applications. It is better to have one finished project than five unfinished ones. Stick to one at a time.
				</p>
			</div>
			<div className={styles.postContentSection}>
				<h3>Not Finding a Good Tutor or Teacher to Listen To</h3>
				<p>
					This point can be an extension of the second point I made in this article but can also serve as its own thing if you cannot find people in your local area or an excellent community to join. Many tutors and teachers online offer to teach programming and computer science topics for free or through a paid course. I have watched many videos and read many articles. While many are reasonable, only a handful taught the concepts exceptionally well and truly understood what they discussed and wrote about themselves.
				</p>
				<p>
					I have curated a list of some of the best online content creators that I personally have come across, whom I believe fit the above criterion:
				</p>
				<ul className="list-style-type-none">
					<li>Node.js - <a href="https://www.youtube.com/@Cododev">Cododev</a></li>
					<li>JavaScript - <a href="https://www.youtube.com/@WebDevSimplified">Web Dev Simplified</a></li>
					<li>TypeScript - <a href="https://www.youtube.com/@mattpocockuk">Matt Pocock</a></li>
					<li>System Design - <a href="https://www.youtube.com/@ByteByteGo">ByteByteGo</a></li>
					<li>PHP - <a href="https://www.youtube.com/@ProgramWithGio">Program With Gio</a></li>
					<li>CSS - <a href="https://www.youtube.com/@KevinPowell">Kevin Powell</a></li>
				</ul>
			</div>
			<div className={styles.postContentSection}>
				<h3>Knowing When You Have Learned Enough</h3>
				<p>
					This last point is actually one of the hardest to give honest advice for. There are two popular terms (although not unique to programming) in the programming space for learning software development, especially for those just starting out. One of those terms is “Imposter Syndrome,” and the other is “Tutorial Hell.”
				</p>
				<p>
					Imposter Syndrome is when you internally feel you are not good enough at a particular skill, even though objectively, you are better than you think. Specifically in programming, this is very common due to how complex of a skill it is. There is so much to learn, so when you look at your code or your applications, you will always feel that it could be better. You will also see other people’s projects and skills online and feel overwhelmed by some of their skill levels. Do not let these aspects deter you. It took me about two years before I felt like I genuinely began getting the hang of everything, but looking back, I already had made a ton of progress, and there was no reason to feel this way. Everyone learns at a different pace and understands that everyone feels they could be better at anything they do.
				</p>
				<p>
					Tutorial Hell is when you continue watching and learning a skill without working on its implementation. This is something I did (and truthfully still do at times), and it caused me to start building projects and applications late into my journey. Projects, as mentioned throughout the article, are a fantastic teacher and show you where and how you can implement all of the topics you have learned thus far. Tutorial Hell can also potentially feed off Imposter Syndrome, making you continue learning more and more due to not feeling adequate in programming.
				</p>
			</div>
			<div className={styles.postContentSection}>
				<h3>Conclusion</h3>
				<p>
					I hope this article helped guide and clarify the self-taught programming journey. This is a challenging space, and if I could go back and do it all over again, I would definitely keep an eye out for these traps and do my best to address them. Keep your head in the game, and do not lose confidence! You can do this, and I wish you the best.
				</p>
			</div>
		</div>
	)
}
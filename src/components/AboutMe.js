import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AboutMe = () => {
	const loading_time = useSelector(state => state.loading_time);
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);

	useEffect(() => {
		const letters = document.querySelectorAll(".name div");
		const web_dev = document.querySelectorAll(".title div");
		letters.forEach((letter, index) => {
			setTimeout(() => {
				letter.classList.add("show");
			}, loading_time + 350 + 150 * index);
		});
		web_dev.forEach((word, index) => {
			setTimeout(() => {
				word.classList.add("show");
			}, loading_time + 350 + 150 * letters.length + index * 150);
		});
		setTimeout(() => {
			document.querySelector(".text").classList.add("show");
			document.querySelector(".side-nav").classList.add("show");
		}, loading_time + 900 + 150 * letters.length);
	}, [loading_time]);

	return (
		<section id="about-me">
			<div className="name">
				<div>P</div>
				<div>a</div>
				<div>w</div>
				<div>e</div>
				<div>ł</div>
				<div className="first-letter-last-name">D</div>
				<div>y</div>
				<div>l</div>
			</div>
			<div className="title">
				<div className="web">Web</div>
				<div className="dev">Developer</div>
			</div>
			<section className='text'>
				<h3 className="section-name">{dictionary[language]["about_me"]}</h3>
				{dictionary[language]["about_me_text"]}
			</section>
		</section>
	)
}

export default AboutMe;
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const About_me = () => {
	const loading_time = useSelector(state => state.loading_time);
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
	}, []);
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
				<h3>Kim jestem</h3>
				Jestem początkującym Web Developerem po technikum informatycznym. Przez rok studiowałem informatykę dzienną na Politechnice Śląskiej lecz zrezygnowałem gdyż studia nie pokryły się z moimi zainteresowaniami. Planuje zostać Front-end lub Full-stack Developerem. Aktualnie głównie uczę się Reacta z Reduxem ale w planach mam także opanowanie Node.js oraz Typescript. Opanowałem także podstawy machine learningu i gdyby była taka możliwość interesuje mnie rozwój także w tym kierunku.
			</section>
		</section>
	)
}

export default About_me;
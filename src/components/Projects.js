import React, { useState } from "react";
import Project from "./Project";

const Projects = () => {
	const [counter, setCounter] = useState(0);
	return (
		<section id="projects">
			<Project
				src="pomidoro-app.jpg"
				link="https://pomodoro-site.netlify.app/"
				title="Pomodoro"
				text="Aplikacja do efektywniejszego dysponowania czasem z minimalistycznym ale eleganckim wyglądem, wbudowaną to-do listą oraz możliwością dostosowania do własnych potrzeb."
				technologies={["HTML", "CSS", "Javascript", "React", "RWD"]}
				which_aos="slide-right"
			/>
			<Project
				src="commercial-site.jpg"
				link="https://commercial-site.netlify.app/"
				title="Komercyjna strona"
				text="Jest to przykład profesjonalnie wyglądającej, responsywnej strony internetowej."
				technologies={["HTML", "CSS", "Javascript", "RWD"]}
				which_aos="slide-left"
			/>
			<Project
				src="sort-app.jpg"
				link="https://sortnet.netlify.app/"
				title="Aplikacja sortująca"
				text="Aplikacja pokazuje działanie wybranych metod sortowania."
				technologies={["HTML", "CSS", "Javascript", "React"]}
				which_aos="slide-right"
			/>
			<Project
				src="paper-rock-scisors.jpg"
				link="https://rockweb.netlify.app/"
				title="Kamień papier nożyce"
				text="Gra w kamień papier nożyce."
				technologies={["HTML", "CSS", "Javascript", "React", "RWD"]}
				which_aos="slide-left"
			/>
			<Project
				src="calculator.jpg"
				link="https://calcweb.netlify.app/"
				title="Kalkulator"
				text="Kalkulator zrobiony z pomocą Reacta."
				technologies={["HTML", "CSS", "Javascript", "React"]}
				which_aos="slide-right"
			/>
			<Project
				src="adobe-color.jpg"
				link="https://www.wp.pl"
				title="Adobe color clone"
				text="Jeden z pierwszych projektów, klon adobe color bez częsci funkcjonalności."
				technologies={["HTML", "CSS", "Javascript"]}
				which_aos="slide-left"
			/>
		</section>
	)
}

export default Projects;
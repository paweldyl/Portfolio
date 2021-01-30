import React from "react";
import Project from "./Project";

const Projects = () => {
	return (
		<section className="projects">
			<Project
				src="pomidoro-app.jpg"
				link="https://www.wp.pl"
				title="Pomodoro"
				text="Aplikacja do efektywniejszego dysponowania czasem z minimalistycznym ale eleganckim wyglądem, wbudowaną to-do listą oraz możliwością dostosowania do własnych potrzeb."
				technologies={["CSS", "HTML", "Javascript", "React"]}
			/>
		</section>
	)
}

export default Projects;
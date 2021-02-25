import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Project from "./Project";
import projects_data from "../projects_data";
import { useSelector } from "react-redux";

const Projects = () => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);

	return (
		<section id="projects">
			{
				projects_data.map((project, index) => {
					return (
						<Project
							key={uuidv4()}
							src={project.src}
							link={project.link}
							title={language === "pl" ? project.title : project.en_title}
							text={language === "pl" ? project.text : project.en_text}
							technologies={project.technologies}
							which_aos={(index % 2 === 0) ? "slide-right" : "slide-left"}
						/>
					)
				})
			}
		</section>
	)
}

export default Projects;
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Project from "./Project";
import projects_data from "../projects_data";

const Projects = () => {
	return (
		<section id="projects">
			{
				projects_data.map((project, index) => {
					return (
						<Project
							key={uuidv4()}
							src={project.src}
							link={project.link}
							title={project.title}
							text={project.text}
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
import React from "react";
import { useSelector } from "react-redux";

const Project = ({ src, link, text, title, technologies, which_aos }) => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);

	return (
		<section className="project" data-aos={which_aos}>
			<div className="photo">
				<a href={link} target="blank"><img alt={title} src={src} /></a>
			</div>
			<div className="right">
				<h3>{title}</h3>
				{text}
				<h4>{dictionary[language]["technologies"]}:</h4>
				<div className="technologies">
					{technologies.map((technology, index) => {
						return <div key={index}>{technology}</div>
					})}
				</div>
			</div>
		</section>
	)
}

export default Project;
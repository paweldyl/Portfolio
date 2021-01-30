import React from "react";

const Project = ({ src, link, text, title, technologies }) => {
	return (
		<section className="project">
			<div className="photo">
				<a href={link} target="blank"><img alt={title} src={src} /></a>
			</div>
			<div className="right">
				<h3>{title}</h3>
				{text}
				<h4>Technologie:</h4>
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
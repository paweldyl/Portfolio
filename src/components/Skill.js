import React from "react";
const Skill = ({ src, name }) => {
	return (
		<section className="skill" data-aos="fade-up">
			<img alt={name} src={src} />
			<p className="skill-name">{name}</p>
		</section>
	)
}

export default Skill;
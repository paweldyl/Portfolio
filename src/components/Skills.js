import React from "react";
import Skill from "./Skill";
import { useSelector } from "react-redux";

const Skills = () => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);

	return (
		<section id="skills">
			<h3 className="section-name" data-aos="fade-up">{dictionary[language]["skills"]}</h3>
			<div className="container">
				<Skill src="html.png" name="HTML" />
				<Skill src="css.png" name="CSS" />
				<Skill src="rwd.webp" name="RWD" />
				<Skill src="sass.png" name="Sass" />
				<Skill src="javascript.webp" name="Javascript" />
				<Skill src="es6.png" name="ES6" />
				<Skill src="logo192.png" name="React" />
				<Skill src="redux.png" name="Redux" />
				<Skill src="python.png" name="Python" />
			</div>
		</section>
	)
}

export default Skills;
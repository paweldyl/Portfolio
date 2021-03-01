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
				<Skill src="images/html.png" name="HTML" />
				<Skill src="images/css.png" name="CSS" />
				<Skill src="images/rwd.webp" name="RWD" />
				<Skill src="images/sass.png" name="Sass" />
				<Skill src="images/javascript.webp" name="Javascript" />
				<Skill src="images/es6.png" name="ES6" />
				<Skill src="images/logo192.png" name="React" />
				<Skill src="images/redux.png" name="Redux" />
				<Skill src="images/python.png" name="Python" />
			</div>
		</section>
	)
}

export default Skills;
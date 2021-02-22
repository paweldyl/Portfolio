import React from "react";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";

const Achievements = () => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);
	return (
		<section id="achievements">
			<h3 className="section-name" data-aos="fade-up">{dictionary[language]["exams_results"]}</h3>
			<div className="container">
				<ProgressBar how_much="100" exam={dictionary[language]["math"]} />
				<ProgressBar how_much="60" exam={dictionary[language]["extended_math"]} />
				<ProgressBar how_much="88" exam={dictionary[language]["english"]} />
				<ProgressBar how_much="90" exam={dictionary[language]["extended_english"]} />
				<ProgressBar how_much="97" exam={dictionary[language]["spoken_english"]} />
				<ProgressBar how_much="70" exam={dictionary[language]["e12_theory"]} />
				<ProgressBar how_much="78" exam={dictionary[language]["e12_practic"]} />
				<ProgressBar how_much="78" exam={dictionary[language]["e13_theory"]} />
				<ProgressBar how_much="92" exam={dictionary[language]["e13_practic"]} />
				<ProgressBar how_much="73" exam={dictionary[language]["e14_theory"]} />
				<ProgressBar how_much="97" exam={dictionary[language]["e14_practic"]} />
			</div>
		</section>
	)
}

export default Achievements;	
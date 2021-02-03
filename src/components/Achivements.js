import React from "react";
import ProgressBar from "./ProgressBar";

const Achievements = () => {
	return (
		<section id="achievements">
			<h3 className="section-name" data-aos="fade-up">wyniki egzaminów:</h3>
			<div className="container">
				<ProgressBar how_much="100" exam="Matematyka podstawowa" />
				<ProgressBar how_much="60" exam="Matematyka rozszerzona" />
				<ProgressBar how_much="88" exam="Angielski podstawowy" />
				<ProgressBar how_much="90" exam="Angielski rozszerzony" />
				<ProgressBar how_much="97" exam="Angielski ustny" />
				<ProgressBar how_much="70" exam="E12 teoria" />
				<ProgressBar how_much="78" exam="E12 praktyka" />
				<ProgressBar how_much="78" exam="E13 teoria" />
				<ProgressBar how_much="92" exam="E13 praktyka" />
				<ProgressBar how_much="73" exam="E14 teoria" />
				<ProgressBar how_much="97" exam="E14 praktyka" />
			</div>
		</section>
	)
}

export default Achievements;	
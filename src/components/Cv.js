import React from "react";
import { useSelector } from "react-redux";

const Cv = () => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);
	return (
		<section id="cv" data-aos="fade-up">
			<a href={language === "pl" ? "CV_Paweł_Dyl.pdf" : "Paweł_Dyl_Resume.pdf"} download>{dictionary[language]["download_resume"]}</a>
		</section>
	)
}

export default Cv;
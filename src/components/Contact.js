import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);
	return (
		<section id="contact" data-aos="fade-up">
			e-mail: Dyl.Pawel99@gmail.com <br />
			{dictionary[language]["phone"]}: 537 392 951 <br />
			github: https://github.com/paweldyl
		</section>
	);
}
export default Contact;
//react visibility sensor, circular progress bar
import React from "react";
import Course from "./Course";
import { useSelector } from "react-redux";

const Courses = () => {
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);
	return (
		<section id="courses">
			<h3 className="section-name" data-aos="fade-up">Kursy</h3>
			<div className="courses-container">
				<Course
					img="mlcourse.png"
					title="Machine learning"
					by="Stanford"
					src="https://www.coursera.org/learn/machine-learning"
					description={dictionary[language]["ml_stanford"]}
				/>
				<Course
					img="cs50.jpg"
					title="CS50: Introduction to Computer Science"
					by="Harvard"
					src="https://www.edx.org/course/cs50s-introduction-to-computer-science"
					description={dictionary[language]["cs_harvard"]}
				/>
				<Course
					img="react1.jpg"
					title="React Course"
					by="Bob Ziroll"
					src="https://youtu.be/DLX62G4lc44"
					description={dictionary[language]["rc_ziroll"]}
				/>
				<Course
					img="react2.png"
					title="Full React Course 2020"
					by="John Smilga"
					src="https://youtu.be/4UZrsTqkcW4"
					description={dictionary[language]["rc_smilga"]}
				/>
				<Course
					img="redux.webp"
					title="Redux"
					by="Mosh Hamedani"
					src="https://youtu.be/poQXNp9ItL4"
					description={dictionary[language]["redux_mosh"]}
				/>
			</div>
		</section>
	)
}

export default Courses;
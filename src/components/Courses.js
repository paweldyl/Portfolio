import React from "react";
import Course from "./Course";

const Courses = () => {
	return (
		<section id="courses">
			<h3 className="section-name" data-aos="fade-up">Kursy</h3>
			<div className="courses-container">
				<Course
					img="mlcourse.png"
					title="Machine learning"
					by="Stanford"
					src="wp.pl"
					description="Kurs tłumaczy Machine Learning od podstaw stawiając duży nacisk na wyjaśnienie jak ML naprawdę działa. Poruszane są tam takie tematy jak Linear Regression, Logistic Regression, Neural Network, Unsupervised Learning i wiele innych zaawansowanych tematów związanych z Machine Learningiem."
				/>
				<Course
					img="cs50.jpg"
					title="CS50: Introduction to Computer Science"
					by="Harvard"
					src="wp.pl"
					description="Kurs jest wprowadzeniem do programowania. Głównym językiem używanym w kursie jest język c ale pojawia się tam także chociażby Python a wraz z nim Flask."
				/>
				<Course
					img="react1.jpg"
					title="React Course"
					by="Bob Ziroll"
					src="wp.pl"
					description="Kurs wprowadzający do Reacta, przedstawia takie zagadnienia jak props,states, renderowanie warunkowe, kontrolowane inputy, przechwytywanie danych z API i wiele innych."
				/>
				<Course
					img="react2.png"
					title="Full React Course 2020"
					by="John Smilga"
					src="wp.pl"
					description="Kurs Reacta przedstawiający nowoczesne zagadnienia aktualnie używane w projektach takie jak Hooks, Context API, React Router, Custom Hooks itd."
				/>
				<Course
					img="react2.png"
					title="Full React Course 2020"
					by="John Smilga"
					src="wp.pl"
					description="Kurs Reacta przedstawiający nowoczesne zagadnienia aktualnie używane w projektach takie jak Hooks, Context API, React Router, Custom Hooks itd."
				/>
				<Course
					img="redux.webp"
					title="Redux"
					by="Mosh Hamedani"
					src="wp.pl"
					description="Kurs przedstawiający podstawowe zagadnienia związane z Reduxem"
				/>
			</div>
		</section>
	)
}

export default Courses;
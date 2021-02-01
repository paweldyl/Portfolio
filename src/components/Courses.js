import React from "react";
import Course from "./Course";

const Courses = () => {
	return (
		<section id="courses">
			<h3 className="section-name" data-aos="fade-up">Kursy</h3>
			<Course
				img="python.png"
				title="Machine learning"
				by="Stanford"
				src="wp.pl"
				description="Kurs tłumaczy Machine Learning od podstaw stawiając duży nacisk na wyjaśnienie jak ML naprawdę działa. Poruszane są tam takie tematy jak Linear Regression, Logistic Regression, Neural Network, Unsupervised Learning i wiele innych zaawansowanych tematów związanych z Machine Learningiem."
			/>
		</section>
	)
}

export default Courses;
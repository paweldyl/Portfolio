import React from "react";

const Course = ({ img, title, by, src, description }) => {
	return (
		<section className="course" data-aos="fade-up">
			<div className="img-container"><a href={src} className="img"><img src={img} /></a></div>
			<div className="container">
				<div className="title">{title}</div>
				<div className="by"><i>-{by}</i></div>
			</div>
			<div className="description">{description}</div>
		</section >
	)
}

export default Course;
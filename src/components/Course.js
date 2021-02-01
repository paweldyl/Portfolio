import React from "react";

const Course = ({ img, title, by, src, description }) => {
	return (
		<section className="course">
			<a href={src} className="img"><img src={img} /></a>
			<div className="container">
				<div className="title">{title}</div>
				<div className="by"><i>-{by}</i></div>
			</div>
			<dilv className="description">{description}</dilv>
		</section >
	)
}

export default Course;
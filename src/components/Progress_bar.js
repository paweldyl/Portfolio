import React, { useEffect, useState } from "react";

const Progress_bar = () => {
	const stroke = 4;
	const radius = 100;
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);
	useEffect(() => {
	}, []);
	return (
		<div className="asd" style={{ backgroundColor: "green" }} data-aos="fade-up">
			<svg
				className="progress-ring"
				height={radius * 2}
				width={radius * 2}
			>
				<circle
					className="circle"
					stroke="red"
					strokeWidth={stroke}
					strokeDasharray={`${circumference} ${circumference}`}
					style={{ strokeDashoffset }}
					strokeWidth={stroke}
					fill="transparent"
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
			</svg>
		</div>
	)
}

export default Progress_bar;
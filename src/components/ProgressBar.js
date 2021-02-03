import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const ProgressBar = ({ how_much, exam }) => {
	return (
		<div className="progress-bar" data-aos="fade-up">
			<VisibilitySensor>
				{({ isVisible }) => {
					const percentage = isVisible ? how_much : 0;
					return (
						<div>
							<AnimatedProgressProvider
								valueStart={0}
								valueEnd={percentage}
								duration={1.4}
								easingFunction={easeQuadInOut}
							>
								{value => {
									const roundedValue = Math.round(value);
									return (
										<CircularProgressbar
											value={value}
											text={`${roundedValue}%`}
											/* This is important to include, because if you're fully managing the
									  animation yourself, you'll want to disable the CSS animation. */
											styles={buildStyles({ pathTransition: "none" })}
										/>
									);
								}}
							</AnimatedProgressProvider>
							<p className="title">{exam}</p>
						</div>
					);
				}}
			</VisibilitySensor>
		</div>
	)
}

export default ProgressBar;
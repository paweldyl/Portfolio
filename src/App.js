import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Loading from "./components/Loading";
import Menu from "./components/Menu";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Achievements from "./components/Achivements";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Cv from "./components/Cv";
import Contact from "./components/Contact";



const App = () => {
	useEffect(() => {
		Aos.init({ duration: 600 });
		document.querySelector(".asd").addEventListener('aos::in', ({ detail }) => {
			console.log('animated in', detail);
		});
		document.addEventListener('aos:out', ({ detail }) => {
			console.log('animated out', detail);
		});
	}, []);
	return (
		<main className="app">
			<Loading />
			<Menu />
			<AboutMe />
			<Achievements />
			<Skills />
			<Projects />
			<Courses />
			<Cv />
			<Contact />
		</main>
	);
}

export default App;
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Aos from "aos";
import "aos/dist/aos.css";
import "react-circular-progressbar/dist/styles.css";

import Loading from "./components/Loading";
import Menu from "./components/Menu";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Achievements from "./components/Achivements";
import Projects from "./components/Projects";
import Books from "./components/Books";
import Courses from "./components/Courses";
import Cv from "./components/Cv";
import Contact from "./components/Contact";



const App = () => {
	const dark_theme = useSelector(state => state.dark_theme);
	useEffect(() => {
		Aos.init({ duration: 600 });
	}, []);
	return (
		<main className={dark_theme ? "app dark-theme" : "app"}>
			<Loading />
			<Menu />
			<AboutMe />
			<Achievements />
			<Skills />
			<Projects />
			<Books />
			<Courses />
			<Cv />
			<Contact />
		</main>
	);
}

export default App;
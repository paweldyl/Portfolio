import React from "react";
import Menu from "./components/Menu";
import About_me from "./components/About_me";
import Skills from "./components/Skills";
import Achivements from "./components/Achivements";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Cv from "./components/Cv";
import Contact from "./components/Contact";

const App = () =>{
	return (
		<main className = "app">
			<Menu />
			<About_me />
			<Skills />
			<Achivements />
			<Projects />
			<Courses />
			<Cv />
			<Contact />
		</main>
	)
}

export default App;
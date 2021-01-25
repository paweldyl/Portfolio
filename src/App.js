import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store, addTodoAction, toggleLoading } from "./Redux";

import Loading from "./components/Loading";
import Menu from "./components/Menu";
import About_me from "./components/About_me";
import Skills from "./components/Skills";
import Achivements from "./components/Achivements";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Cv from "./components/Cv";
import Contact from "./components/Contact";



const App = () => {
	return (
		<main className="app">
			<Loading />
			<Menu />
			<About_me />
			<Skills />
			<Achivements />
			<Projects />
			<Courses />
			<Cv />
			<Contact />
		</main>
	);
}

export default App;
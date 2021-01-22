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
	const isLoading = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		setTimeout(() => {
			dispatch(toggleLoading(false))
		}, 1000);
		setTimeout(() => {
			console.log(isLoading);
		}, 5000);
	}, []);
	return (
		<main className="app">
			{ isLoading && <Loading />}
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
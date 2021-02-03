import React, { useEffect, useState } from "react";
import { toggleTheme } from "../Redux";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {

	const dark_theme = useSelector(state => state.dark_theme);
	const [sideMenu, setSideMenu] = useState(window.innerWidth < 900);
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize)
	}, [sideMenu]);

	const handleResize = () => {
		setSideMenu(window.innerWidth < 900)
		if (window.innerWidth >= 900) {
			const menu = document.querySelector(".menu").classList;
			for (let i = 0; i < menu.length; i++) {
				if (menu[i] === "active") {
					show_menu();
				}
			}
		}
	}

	const show_menu = () => {
		document.querySelector(".menu").classList.toggle("active");
	}

	const change_theme = () => {
		if (sideMenu)
			show_menu();

		dispatch(toggleTheme());
	}

	return (
		<section className={dark_theme ? "menu dark-theme" : "menu"}>
			<div className="dark-field" onClick={show_menu}></div>
			<div className="burger-menu" onClick={show_menu}>
				<div className="line first"></div>
				<div className="line second"></div>
				<div className="line third"></div>
			</div>
			<nav className="top-nav">

			</nav>
			<nav className="side-nav">
				<a href="#about-me" onClick={sideMenu ? show_menu : null}>About me</a>
				<a href="#achievements" onClick={sideMenu ? show_menu : null}>Wyniki</a>
				<a href="#skills" onClick={sideMenu ? show_menu : null}>Umiejętności</a>
				<a href="#projects" onClick={sideMenu ? show_menu : null}>Projekty</a>
				<a href="#books" onClick={sideMenu ? show_menu : null}>Książki</a>
				<a href="#courses" onClick={sideMenu ? show_menu : null}>Kursy</a>
				<a href="#cv" onClick={sideMenu ? show_menu : null}>Cv</a>
				<a href="#contact" onClick={sideMenu ? show_menu : null}>Kontakt</a>
				<a className="theme-switch" onClick={() => change_theme()}>
					<img alt="dark theme" id="sun" src="sun.png" />
					<img alt="dark theme" id="moon" src="moon.png" />
				</a>
			</nav>
		</section >
	)
}

export default Menu;
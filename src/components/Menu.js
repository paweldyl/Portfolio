import React, { useEffect, useState } from "react";
import { toggleTheme } from "../Redux";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageAction } from "../Redux";
const Menu = () => {

	const dark_theme = useSelector(state => state.dark_theme);
	const language = useSelector(state => state.language);
	const dictionary = useSelector(state => state.dictionary);
	const [sideMenu, setSideMenu] = useState(window.innerWidth < 900);
	const dispatch = useDispatch();
	const setLanguage = lang => dispatch(setLanguageAction(lang));
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

	const selectChange = (e) => {
		setLanguage(e.target.value);
		sideMenu && show_menu();
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
				<a href="#about-me" onClick={sideMenu ? show_menu : null}>{dictionary[language]["about_me"]}</a>
				<a href="#achievements" onClick={sideMenu ? show_menu : null}>{dictionary[language]["exams"]}</a>
				<a href="#skills" onClick={sideMenu ? show_menu : null}>{dictionary[language]["skills"]}</a>
				<a href="#projects" onClick={sideMenu ? show_menu : null}>{dictionary[language]["projects"]}</a>
				<a href="#books" onClick={sideMenu ? show_menu : null}>{dictionary[language]["books"]}</a>
				<a href="#courses" onClick={sideMenu ? show_menu : null}>{dictionary[language]["courses"]}</a>
				<a href="#cv" onClick={sideMenu ? show_menu : null}>{dictionary[language]["resume"]}</a>
				<a href="#contact" onClick={sideMenu ? show_menu : null}>{dictionary[language]["contact"]}</a>
				<a className="theme-switch" onClick={() => change_theme()}>
					<img alt="dark theme" id="sun" src="sun.png" />
					<img alt="dark theme" id="moon" src="moon.png" />
				</a>
				<a className="menu-select">
					<select name="lang" value={language} onChange={selectChange}>
						<option value="pl">PL</option>
						<option value="en">ENG</option>
					</select>
				</a>
			</nav>
		</section >
	)
}

export default Menu;
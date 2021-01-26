import React, { useEffect, useState } from "react";

const Menu = () => {
	const [sideMenu, setSideMenu] = useState(window.innerWidth < 900);
	const handleResize = () => {
		setSideMenu(window.innerWidth < 900)
		if(window.innerWidth >= 900){
			const menu = document.querySelector(".menu").classList;
			for(let i = 0; i<menu.length; i++){
				if(menu[i] === "active"){
					show_menu();
				}
			}
		}
		console.log(document.querySelector(".menu").classList[1]);
	}
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize)
	}, [sideMenu]);

	const show_menu = () => {
		document.querySelector(".menu").classList.toggle("active");
	}

	return (
		<section className="menu">
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
				<a href="#courses" onClick={sideMenu ? show_menu : null}>Kursy</a>
				<a href="#cv" onClick={sideMenu ? show_menu : null}>Cv</a>
				<a href="#contact" onClick={sideMenu ? show_menu : null}>Kontakt</a>
			</nav>
		</section >
	)
}

export default Menu;
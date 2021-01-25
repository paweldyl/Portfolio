import React from "react";

const Menu = () => {
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
			<nav className="side-nav">
				<a href="#">About me</a>
				<a href="#">Wyniki</a>
				<a href="#">Umiejętności</a>
				<a href="#">Projekty</a>
				<a href="#">Kursy</a>
				<a href="#">Cv</a>
				<a href="#">Kontakt</a>
			</nav>
		</section >
	)
}

export default Menu;
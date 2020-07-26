import React, { Fragment } from 'react';
import './header.css';
import '../css/styles.css';

export default function Navbar() {
	console.clear();
	window.onload = () => {
		(() => {
			let body;
			let menu;

			const init = () => {
				body = document.querySelector('body');
				menu = document.querySelector('.menu-icon');

				applyListeners();
			};

			const applyListeners = () => {
				menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
			};

			const toggleClass = (element, stringClass) => {
				if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
				else element.classList.add(stringClass);
			};
			const divs = document.querySelectorAll('.nav__list-item');

			divs.forEach((el) => el.addEventListener('click', () => toggleClass(body, 'nav-active')));
			init();
		})();
	};
	return (
		<Fragment>
			<div className="menu-icon">
				<span className="menu-icon__line menu-icon__line-left" />
				<span className="menu-icon__line" />
				<span className="menu-icon__line menu-icon__line-right" />
			</div>
			<div className="menu-social text-white">asdasd</div>
			<div className="nav">
				<div className="nav__content text-center">
					<ul className="nav__list">
						<li className="flex justify-center sm:inline-block nav__list-item">
							<a href="#home">Home</a>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<a href="#about">About</a>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">Skills</li>
						<li className="flex justify-center sm:inline-block nav__list-item">Work</li>
						<li className="flex justify-center sm:inline-block nav__list-item">Contact</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}

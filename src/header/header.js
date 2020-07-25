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

			init();
		})();
	};
	return (
		<Fragment>
			<div class="menu-icon">
				<span class="menu-icon__line menu-icon__line-left" />
				<span class="menu-icon__line" />
				<span class="menu-icon__line menu-icon__line-right" />
			</div>

			<div class="nav">
				<div class="nav__content">
					<ul class="nav__list">
						<li class="nav__list-item">
							<a href="#home">Home</a>
						</li>
						<li class="nav__list-item">
							<a href="#about">About</a>
						</li>
						<li class="nav__list-item">Skills</li>
						<li class="nav__list-item">Work</li>
						<li class="nav__list-item">Contact</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}

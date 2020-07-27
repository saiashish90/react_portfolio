import React, { Fragment } from 'react';
import './header.css';
import '../css/styles.css';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
	console.clear();
	window.onload = () => {
		(() => {
			let body;
			let menu;

			const init = () => {
				body = document.querySelector('body');
				menu = document.querySelector('.menu-icon');
				document.getElementById('nav').style.pointerEvents = 'none';
				applyListeners();
			};

			const applyListeners = () => {
				menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
			};

			const toggleClass = (element, stringClass) => {
				if (element.classList.contains(stringClass)) {
					document.getElementById('nav').style.pointerEvents = 'none';
					element.classList.remove(stringClass);
				} else {
					console.log(element);
					document.getElementById('nav').style.pointerEvents = 'auto';
					element.classList.add(stringClass);
				}
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
				<div id="nav" className="nav__content text-center">
					<ul className="nav__list">
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
								Home
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
								About
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
								Skills
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
								Work
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
								Contact Me
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}

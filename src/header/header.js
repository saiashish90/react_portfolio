import React, { Fragment } from 'react';
import './header.css';
import '../css/styles.css';
import { Link } from 'react-scroll';

export default function Navbar() {
	function leftButton() {
		if (window.location.pathname === '/') {
			return (
				<div className="menu-icon ">
					<span className="menu-icon__line menu-icon__line-left " />
					<span className="menu-icon__line " />
					<span className="menu-icon__line menu-icon__line-right " />
				</div>
			);
		} else {
			return (
				<div className="menu-icon">
					<a href="/">
						<i class="bx bx-arrow-back text-white hover:text-primaryHighlight" />
					</a>
				</div>
			);
		}
	}
	window.onload = () => {
		(() => {
			if (window.location.pathname === '/') {
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
						document.getElementById('nav').style.pointerEvents = 'auto';
						element.classList.add(stringClass);
					}
				};
				const divs = document.querySelectorAll('.nav__list-item');

				divs.forEach((el) => el.addEventListener('click', () => toggleClass(body, 'nav-active')));
				init();
			}
		})();
	};
	return (
		<Fragment>
			{leftButton()}

			<div className="menu-social text-white">
				<a href="https://www.linkedin.com/in/sai-ashish-ba927a1b2/" target="_blank" rel="noopener noreferrer">
					<i className="bx mr-4 bxl-linkedin hover:text-primaryHighlight" />
				</a>
				<a href="https://github.com/saiashish90" target="_blank" rel="noopener noreferrer">
					<i className="bx mr-4 bxl-github hover:text-primaryHighlight" />
				</a>
				<a href="https://profile.codersrank.io/user/saiashish90" target="_blank" rel="noopener noreferrer">
					<i className="bx mr-4 bx-code-alt hover:text-primaryHighlight" />
				</a>
			</div>
			<div className="nav">
				<div id="nav" className="nav__content text-center">
					<ul className="nav__list">
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
								Home
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
								About
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
								Skills
							</Link>
						</li>
						<li className="flex justify-center sm:inline-block nav__list-item">
							<Link activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}>
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

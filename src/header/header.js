import React from 'react';
import '../css/styles.css';

export default function Navbar({ fixed }) {
	const [ navbarOpen, setNavbarOpen ] = React.useState(false);
	return (
		<nav className="fixed w-full bg-pallete-dark items-center px-2 py-3 navbar-expand-lg  mb-3">
			<div className="mx-56 flex flex-wrap items-center justify-between">
				<div className="w-full relative mx-auto flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<a
						className="text-base font-bold leading-relaxed inline-block py-2 whitespace-no-wrap uppercase text-pallete-highlight"
						href="#"
					>
						Sai Ashish
					</a>
					{/* Hamburger icon */}
					<button
						className="text-pallete-highlight cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i className="fas fa-bars" />
					</button>
				</div>
				{/* Menu items */}
				<div
					className={
						'lg:flex flex-grow justify-center items-center' +
						(
							navbarOpen ? ' flex' :
							' hidden')
					}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-pallete-highlight"
								href="#"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-pallete-highlight"
								href="#"
							>
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-pallete-highlight"
								href="#"
							>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-pallete-highlight"
								href="#"
							>
								Work
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-pallete-highlight"
								href="#"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

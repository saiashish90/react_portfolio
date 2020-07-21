import React from 'react';
import '../css/styles.css';

export default function Navbar({ fixed }) {
	const [ navbarOpen, setNavbarOpen ] = React.useState(false);
	return (
		<nav className="sticky top-0 w-full bg-pallete-light items-center justify-between px-2 py-3 navbar-expand-lg  mb-3">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<a
						className="text-base font-bold leading-relaxed inline-block py-2 whitespace-no-wrap uppercase text-white"
						href="#"
					>
						Sai Ashish
					</a>
					{/* Hamburger icon */}
					<button
						className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i className="fas fa-bars" />
					</button>
				</div>
				{/* Menu items */}
				<div
					className={
						'lg:flex flex-grow items-center' +
						(
							navbarOpen ? ' flex' :
							' hidden')
					}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white"
								href="#"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white"
								href="#"
							>
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white"
								href="#"
							>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white"
								href="#"
							>
								Work
							</a>
						</li>
						<li className="nav-item">
							<a
								className="px-3 py-2 ml-6 flex items-center text-base uppercase font-bold leading-snug text-white"
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

import React, { Fragment } from 'react';
import './css/styles.css';

import Particles from 'react-tsparticles';
import { Link } from 'react-scroll';

function home() {
	return (
		<Fragment>
			<Particles
				className="absolute h-screen w-screen"
				style={{ zIndex: -1 }}
				id="tsparticles"
				options={{
					particles     : {
						number      : {
							value   : 30,
							density : {
								enable     : true,
								value_area : 700
							}
						},
						color       : {
							value : '#45a29e'
						},
						shape       : {
							type    : 'circle',
							stroke  : {
								width : 0,
								color : '#000000'
							},
							polygon : {
								nb_sides : 5
							}
						},
						opacity     : {
							value  : 1,
							random : true,
							anim   : {
								enable      : false,
								speed       : 1,
								opacity_min : 0.1,
								sync        : false
							}
						},
						size        : {
							value  : 3,
							random : true,
							anim   : {
								enable   : false,
								speed    : 40,
								size_min : 0.1,
								sync     : false
							}
						},
						line_linked : {
							enable   : true,
							distance : 150,
							color    : '#ffffff',
							opacity  : 0.1,
							width    : 1
						},
						move        : {
							enable    : true,
							speed     : 1,
							direction : 'none',
							random    : true,
							straight  : false,
							out_mode  : 'out',
							bounce    : false,
							attract   : {
								enable  : false,
								rotateX : 600,
								rotateY : 1200
							}
						}
					},
					retina_detect : true
				}}
			/>
			<section className="h-screen w-100 flex flex-row items-center" id="home">
				<div className="w-screen flex flex-wrap overflow-hidden ">
					<div className="w-full overflow-hidden md:w-1/2 text-white flex items-center">
						<div className="mx-auto">
							<h1 className="m-auto text-6xl font-bold">
								Hi,<br />I am <span className="text-primaryHighlight">Ashish</span>
							</h1>
							<button className="bg-primaryHighlight text-black font-semibold text-sm py-3 px-8 rounded-lg relative z-0">
								<Link
									activeClass="active"
									to="about"
									spy={true}
									smooth={true}
									offset={-70}
									duration={500}
								>
									See my work
								</Link>
							</button>
						</div>
					</div>
					<div className="w-full hidden md:block overflow-hidden md:w-1/2">
						<img
							className="w-8/12 mx-auto relative z-0"
							src={require('./assets/img/profile.png')}
							alt="img"
						/>
					</div>
				</div>
			</section>
		</Fragment>
	);
}

export default home;

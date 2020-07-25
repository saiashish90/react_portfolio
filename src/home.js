import React from 'react';
import './css/styles.css';

function home() {
	return (
		<section className="h-screen flex mx-auto my-auto items-center" id="home">
			<div className="w-1/2 flex ">
				<div className="mx-auto">
					<h1 className="text-white text-5xl font-semibold">
						Hi,<br />I am <span className="text-pallete-highlight">Ashish</span>
					</h1>
					<button className="bg-pallete-highlight text-black font-semibold text-sm py-3 px-8 rounded-lg">
						Contact
					</button>
				</div>
			</div>

			<div className="w-1/2 invisible lg:visible">
				<img className=" mx-auto w-2/4" src={require('./assets/img/profile.png')} alt="" />
			</div>
		</section>
	);
}

export default home;

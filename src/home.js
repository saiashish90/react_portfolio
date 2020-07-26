import React from 'react';
import './css/styles.css';

function home() {
	return (
		<section className="h-screen w-100 flex flex-row items-center" id="home">
			<div className="w-screen flex flex-wrap overflow-hidden ">
				<div className="w-full overflow-hidden md:w-1/2 text-white flex items-center">
					<div className="mx-auto">
						<h1 className="m-auto text-6xl font-bold">
							Hi,<br />I am <span className="text-pallete-highlight">Ashish</span>
						</h1>
						<button className="bg-pallete-highlight text-black font-semibold text-sm py-3 px-8 rounded-lg">
							Contact
						</button>
					</div>
				</div>
				<div className="w-full hidden md:block overflow-hidden md:w-1/2">
					<img className="w-8/12 mx-auto" src={require('./assets/img/profile.png')} alt="img" />
				</div>
			</div>
			{/* <div className="w-1/2 flex ">
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
			</div> */}
		</section>
	);
}

export default home;

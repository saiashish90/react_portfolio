import React from 'react';
import './css/styles.css';
function about() {
	return (
		<section className="py-3 px-2 w-11/12 mx-auto bg-pallete-grey rounder smoothAfShadow" id="about">
			<div className="w-100 text-center my-10">
				<h1 className="text-pallete-highlight text-4xl title">About</h1>
			</div>
			<div class="flex flex-wrap overflow-hidden">
				<div className="w-full overflow-hidden md:w-1/2">
					<img
						className="w-5/12 mx-auto rounded-lg object-center"
						src={require('./assets/img/about.jpg')}
						alt="img"
					/>
				</div>

				<div className="w-full overflow-hidden md:w-1/2 text-white flex pr-64 items-center">
					<div>
						<h1 className="m-auto text-3xl font-bold">I am Ashish</h1>
						<p>
							B.Tech in Computer Science and Engineering / Reva University, Bangalore Secondary Schooling
							/ Sindhi High School, Bangalore Percentage: 87% at CBSE with Computer Science as elective
							subject. June ‘15 Primary Schooling / Presidency School, Bangalore Percentage: 91% over all
							in the ICSE Board.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default about;

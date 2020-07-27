import React from 'react';
import './styles.css';
function about() {
	return (
		<section className="py-3 px-2 w-11/12 mx-auto mb-32 bg-secondaryDark rounder smoothAfShadow" id="about">
			<div className="w-100 text-center mt-2 mb-5">
				<h1 className="text-primaryHighlight text-4xl title">About</h1>
			</div>
			<div className="flex flex-wrap overflow-hidden">
				<div className="w-full overflow-hidden lg:w-1/2 mb-5">
					<img
						className="w-5/12 mx-auto rounded-lg object-center"
						src={require('./assets/img/about.jpg')}
						alt="img"
					/>
				</div>

				<div className="w-full overflow-hidden lg:w-1/2 mb-5 text-white flex pr-auto lg:pr-64 items-center">
					<div className="mx-auto lg:mx-0">
						<h1 className="text-center lg:text-left m-auto text-3xl font-bold">I am Ashish</h1>
						<h1 className="m-auto text-xl font-semibold">Education</h1>
						<p className="m-auto mb-5 text-base font-normal">
							<span className="text-secondaryHighlight">B.Tech Computer Science</span> in Reva University.<br />
							<span className="text-secondaryHighlight">Secondary Schooling</span> in Sindhi High
							School(CBSE)<br />
							<span className="text-secondaryHighlight">Primary Schooling</span> in Presidency
							School(ICSE)
						</p>
						<p className="m-auto text-xl font-semibold">Areas of interest</p>
						<ul>
							<li>UI/UX Design</li>
							<li>Machine learning and artificial intelligence.</li>
							<li>Computer vision and image recognition.</li>
							<li>Mobile APP development for android and IOS.</li> <li>Process automation and IOT.</li>
							<li>Full-stack web development.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
export default about;

import React from 'react';

import './css/styles.css';
function skills() {
	return (
		<section className="py-3 px-2 w-11/12 mx-auto bg-secondaryDark rounder smoothAfShadow" id="skills">
			<div className="w-100 text-center mt-2 mb-5">
				<h1 className="text-primaryHighlight text-4xl title">Skills</h1>
			</div>
			<div className="flex flex-wrap overflow-hidden text-white">
				<div className="w-full overflow-hidden text-center md:w-1/2 mb-5">
					{/* skill1 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Web Design</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="fab fa-html5 mr-5" />
								<i className="fab fa-css3-alt mr-5" />
								<i className="fab fa-sass mr-5" />
								<i className="fab fa-js-square mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(html/css/sass/js)
							</p>
						</div>
					</div>
					{/* skill1 end */}
					{/* skill2 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Python</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="fab fa-python mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(python2/python3)
							</p>
						</div>
					</div>
					{/* skill2 end */}
					{/* skill3 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Backend development</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="fab fa-php mr-5" />
								<i className="fab fa-node mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(php/nodeJS/expressjs)
							</p>
						</div>
					</div>
					{/* skill3 end */}
					{/* skill4 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Other Languages</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="icon c mr-5" />
								<i className="icon cpp mr-5" />
								<i className="fab fa-java mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(c/c++/java)
							</p>
						</div>
					</div>
					{/* skill4 end */}
				</div>

				<div className="w-full overflow-hidden md:w-1/2 mb-5">
					{/* skill5 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Web frameworks</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="fab fa-react mr-5" />
								<i className="fab fa-bootstrap mr-5" />
								<i className="icon tailwind mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(reactjs/bootstrap/tailwindcss)
							</p>
						</div>
					</div>
					{/* skill5 end */}
					{/* skill6 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Cross platform development</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="icon flutter mr-5" />
								<i className="icon dart mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(flutter/dart)
							</p>
						</div>
					</div>
					{/* skill6 end */}
					{/* skill7 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Machine learning frameworks</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="icon pytorch mr-5" />
								<i className="icon tensorflow mr-5" />
								<i className="icon opencv mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(pytorch/tensorflow/opencv)
							</p>
						</div>
					</div>
					{/* skill7 end */}
					{/* skill8 */}
					<div className="mx-10 my-2 px-5 py-2 rounded-lg bg-transparent border border-tertiaryDark">
						<h1 className="text-xl self-center ">Database management systems</h1>
						<div className="flex justify-between">
							<div className="text-3xl text-left">
								<i className="icon sql mr-5" />
								<i className="icon mongodb mr-5" />
							</div>
							<p className="uppercase my-1 text-secondaryHighlight text-lg font-semibold text-left self-center">
								(sql/mongodb)
							</p>
						</div>
					</div>
					{/* skill8 end */}
				</div>
			</div>
		</section>
	);
}
export default skills;

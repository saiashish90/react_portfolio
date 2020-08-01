import React, { Fragment } from 'react';
import '../css/styles.css';
import ProgressiveImage from 'react-progressive-image';
function Work1() {
	React.useEffect(() => {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('back').style.display = 'block';
	});
	return (
		<Fragment>
			<div className="py-20 text-center leading-7">
				{/* section 1 */}
				<div className="py-8 w-11/12 h-auto md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow">
					<h1 className="text-white text-2xl font-semibold ">
						Robot exploration using game theory algorithms
					</h1>
					<ProgressiveImage
						src={require('../assets/img/iisc/iisc-internship.jpg')}
						placeholder={require('../assets/img/iisc/iisc-internship_tn.jpg')}
					>
						{(src) => <img className="my-5 mx-auto w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
				</div>
				{/* section 2 */}
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<div className="text-left text-gray-400">
						<ul className="list-disc list-inside">
							<span className="text-xl text-primaryHighlight">Objectives</span>
							<li>
								The project aimed to explore a given region using a set of robots and to generate a map
								of the area.
							</li>
							<li>
								The robots must be able to detect and avoid possible obstacles in real-time without any
								input from the user.
							</li>
							<li>
								A laser sensor and camera should be present on the robot to enable it to map the given
								area and to take images of the region.
							</li>
						</ul>
					</div>
					<div className="my-5 text-left text-gray-400 text-base">
						<span className="text-primaryHighlight text-xl">Approach</span>
						<br />
						The main task of the robot is to create a map of an unexplored area by co-ordinating with other
						robots and sharing information with them.<br />
						It has to explore the entire region without any input from a human and therefore it must have
						obstacle avoidance capabilities and should be able to make a decision on its own.
					</div>
					<div className="my-5 text-left text-gray-400 text-base">
						<ul className="list-disc list-inside">
							<span className="text-xl text-primaryHighlight">Technology Stack</span>
							<li className="mb-3">
								<a
									className="text-secondaryHighlight underline"
									href="https://www.ros.org/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="ros"
								>
									ROS
								</a>
								- Robot Operating System is a flexible framework for writing robot software. It is a
								collection of tools and libraries that aim to simplify the task of creating complex and
								robust robot behavior across a wide variety of robotic platforms.
							</li>
							<li className="mb-5">
								<a
									className="text-secondaryHighlight underline"
									href="https://www.python.org/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="python"
								>
									Python
								</a>- ROS provides a library for python called Rospy. This library has various functions
								that are used to control the robot and the various other sensors that are present on it.
							</li>
							<li className="mb-5">
								<a
									className="text-secondaryHighlight underline"
									href="http://gazebosim.org/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="gazebo"
								>
									Gazebo
								</a>- Gazebo is an open-source 3D robotics simulator. Gazebo can use multiple high-
								performance physics engines, such as ODE and Bullet. It provides realistic rendering of
								environments including high-quality lighting, shadows, and textures. This allows the
								sensors on the robot to be tested in a realistic environment.
							</li>
							<li className="mb-5">
								<a
									className="text-secondaryHighlight underline"
									href="http://wiki.ros.org/rviz"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="rviz"
								>
									RVIZ
								</a>- RVIZ is a ROS graphical interface that allows you to visualize the information
								being gathered by the robot's sensors.
							</li>
						</ul>
					</div>
				</div>
				{/* Section 3 */}
				<div className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow">
					<div className="text-left text-gray-400 text-base">
						<span className="text-xl text-primaryHighlight">Robot</span>
						<br />The robot is a simple 2 wheel differential drive robot with a caster wheel in front.<br />{' '}
						It has a <span className="text-secondaryHighlight">laser sensor</span> for detection and range
						finding and a <span className="text-secondaryHighlight">camera</span> to take images of its
						surroundings.
						<div className="flex-wrap flex md:flex-no-wrap my-4">
							<figure className="w-100 mr-2 md:w-1/2">
								<figcaption className="my-1">Robot model</figcaption>
								<img src={require('../assets/img/iisc/robot.jpg')} alt="" />
							</figure>
							<figure className="w-100 mr-2 md:w-1/2">
								<figcaption className="my-1">Laser sensors</figcaption>
								<img src={require('../assets/img/iisc/sensor.jpg')} alt="" />
							</figure>
						</div>
						The entire code for each robot is modular, this lets us spawn multiple robots just by changing
						the number of robots that we want. The robots broadcast their data using Bluetooth, this data
						can be used by other robots to figure out their next course of action.<br /> Each robot produces
						a map of the area. These maps can be combined using image recognition software to produce a
						higher resolution map than what would have been possible with a single robot.
					</div>
				</div>
				{/* section 4 */}
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<div className="text-left text-gray-400">
						<ul className="list-disc list-inside">
							<span className="text-xl text-primaryHighlight">Algorithms tested</span>
							<ul className="list-disc my-4 list-inside">
								Utility based approach
								<li>
									In this algorithm, once the robot reaches a point, it scans the area and then
									determines which direction to go by looking at an adjacency matrix and looking for
									the least explored areas.
								</li>
							</ul>
							<ul className="list-disc my-4 list-inside">
								Two step approach
								<li>
									In this algorithm, once a robot reaches a point, it can take 2 actions, one is to
									turn toward a direction and other is to go forward, here we do not calculate the
									utility based on the adjacency matrix but rather based on what action the other
									robots are about to perform.
								</li>
							</ul>
						</ul>
						<figure>
							<figcaption className="my-2">Graph</figcaption>
							<img className="self-center" src={require('../assets/img/iisc/stat1.jpg')} alt="" />
							<figcaption>X-Axis:Different start points</figcaption>
						</figure>
					</div>
				</div>
				{/* section 5 */}
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<span className="text-xl text-primaryHighlight">Maps produced</span>
					<img className="my-4" src={require('../assets/img/iisc/map.jpg')} alt="" />
				</div>
				{/* section 6 */}

				<a
					className="w-1/2"
					href="https://github.com/saiashish90/differential_drive_robot"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="code"
				>
					<span className="text-base text-primaryHighlight mr-10">Source code</span>
				</a>
				<a
					className="w-1/2"
					href="https://drive.google.com/file/d/1xeusPJoEbXU9-dHEAH4oOEDjBaOFvMqX/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="readinformation"
				>
					<span className="text-base text-primaryHighlight ml-10">Read full report</span>
				</a>
			</div>
		</Fragment>
	);
}
export default Work1;

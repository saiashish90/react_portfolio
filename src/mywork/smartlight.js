import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
function SmartLight() {
	React.useEffect(() => {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('back').style.display = 'block';
	});
	return (
		<Fragment>
			<div className="py-20 text-center leading-7">
				{/* section 1 */}
				<div className="py-8 w-11/12 h-auto md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow">
					<h1 className="text-white text-2xl font-semibold ">Smart lighting system</h1>
					<ProgressiveImage
						src={require('../assets/img/smartlight/smartlight.jpeg')}
						placeholder={require('../assets/img/smartlight/smartlight_tn.jpg')}
					>
						{(src) => <img className="my-5 mx-auto w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
				</div>

				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<div className="text-left text-gray-400">
						<ul className="list-disc list-inside">
							<span className="text-xl text-primaryHighlight">About the project</span>
							<li>
								This is set of homemade IoT connected smart lights that can be connected to via the
								BLYNK IOT application and/or be voice-controlled using the Google assistant.
							</li>
						</ul>
					</div>
					<div className="my-5 text-left text-gray-400 text-base">
						<h1 className="text-primaryHighlight text-xl">Approach</h1>
						<ul className="list-inside list-disc">
							<li>
								To stay connected to the internet it uses an esp8266 microcontroller which is based on
								the Arduino board and has the ability to stay connected to the internet through a wifi
								connection.
							</li>
							<li>
								Blynk is a premade app that allows your device to stay connected to their servers
								without needing a separate server. It also offers an android app that has several
								interface options that can be used to create a user interface so that you can control
								your smart lights.
							</li>
							<li>
								The lights are also connected to a server called Sinric (run by the GitHub user
								kakopappa). This server has APIs for parsing a google assistant command into a JSON
								object.This JSON object can be accessed by the device and used to activate the command.
							</li>
						</ul>
					</div>
					<div className="my-5 text-left text-gray-400 text-base">
						<h1 className="text-primaryHighlight text-xl">Technology stack</h1>
						<ul className="list-inside list-disc">
							<li>esp8266 microcontroller</li>
							<li>Blynk android App</li>
							<li>Google assistant API</li>
							<li>C programming language written in the Arduino IDE</li>
						</ul>
						<p className="my-5">
							Other smart devices like switches, thermostats, fans, etc can be implemented using the same
							concept with a slight change in code based on the project.
						</p>
					</div>
				</div>
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<span className="text-xl text-primaryHighlight">Architecture</span>
					<ProgressiveImage
						src={require('../assets/img/smartlight/iot.jpg')}
						placeholder={require('../assets/img/smartlight/iot_tn.jpg')}
					>
						{(src) => <img className=" mx-auto my-4 w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
				</div>
				<a
					className="w-1/2"
					href="https://github.com/saiashish90/IOT"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="sourcecode"
				>
					<span className="text-base text-primaryHighlight">Source code</span>
				</a>
			</div>
		</Fragment>
	);
}
export default SmartLight;

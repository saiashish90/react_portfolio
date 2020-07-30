import React from 'react';
import './css/styles.css';
import { Link } from 'react-router-dom';

import ProgressiveImage from 'react-progressive-image';
function work() {
	return (
		<section className="py-3 px-5 w-11/12 mb-32 mx-auto bg-secondaryDark rounder smoothAfShadow" id="work">
			<div className="w-100 text-center mt-2 mb-5">
				<h1 className="text-primaryHighlight text-4xl title">Work</h1>
			</div>
			<div className="flex flex-wrap overflow-hidden text-white">
				<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
					{/* work1 */}
					<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
						<Link to="/work1">
							<ProgressiveImage
								src={require('./assets/img/iisc-internship-thumb.jpg')}
								placeholder={require('./assets/img/iisc-internship-thumb_tn.jpg')}
							>
								{(src) => <img className="hover w-full" src={src} alt="work1" />}
							</ProgressiveImage>
						</Link>
					</div>
					{/* work1 */}
				</div>
				<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
					{/* work2 */}
					<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
						<Link to="/FaceRec">
							<ProgressiveImage
								src={require('./assets/img/facerecog-thumb.jpg')}
								placeholder={require('./assets/img/facerecog-thumb_tn.jpg')}
							>
								{(src) => <img className="hover w-full" src={src} alt="work2" />}
							</ProgressiveImage>
						</Link>
					</div>
					{/* work2 */}
				</div>
				<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
					{/* work3 */}
					<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
						<img className="hover" src={require('./assets/img/work3.jpg')} alt="work3" />
					</div>
					{/* work3 */}
				</div>
				<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
					{/* work4 */}
					<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
						<img className="hover" src={require('./assets/img/work4.jpg')} alt="work4" />
					</div>
					{/* work4 */}
				</div>
				<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
					{/* work5 */}
					<div className="flex m-7 mb-5 rounded-lg overflow-hidden">
						<img className="hover" src={require('./assets/img/work5.jpg')} alt="work5" />
					</div>
					{/* work5 */}
				</div>
				<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
					{/* work6 */}
					<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
						<img className="hover" src={require('./assets/img/work6.jpg')} alt="work6" />
					</div>
					{/* work6 */}
				</div>
			</div>
		</section>
	);
}
export default work;

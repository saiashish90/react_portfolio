import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
import '../css/styles.css';
function FaceRec() {
	React.useEffect(() => {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('back').style.display = 'block';
	});
	return (
		<Fragment>
			<div className="py-20 text-center leading-7">
				{/* section 1 */}
				<div className="py-8 w-11/12 h-auto md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow">
					<h1 className="text-white text-2xl font-semibold ">Facial recognition using open-cv</h1>
					<ProgressiveImage
						src={require('../assets/img/facerec/facerecog.jpg')}
						placeholder={require('../assets/img/facerec/facerecog_tn.jpg')}
					>
						{(src) => <img className="my-5 mx-auto w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
					<a
						href="http://www.ijarcs.info/index.php/Ijarcs/author/submission/6549"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="paper"
					>
						<span className="text-lg text-primaryHighlight">Published paper</span>
					</a>
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
								The objective of this project is to develop a very effective algorithm, in terms of low
								computational complexity, with the maximum number of accurate detections and minimum
								number of false alarms.
							</li>
						</ul>
					</div>
					<div className="my-5 text-left text-gray-400 text-base">
						<span className="text-primaryHighlight text-xl">Approach</span>
						<br />
						We attempt to solve the power limitation by looking at faces and calculating a 128-dimensional
						vector that describes the shape of the face. Once we get these vectors, we can use a simple
						classification neural network to categorize the extracted vectors correctly.
					</div>
				</div>
				{/* Section 3 */}
				<div className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow">
					<div className="text-left text-gray-400 text-base">
						<span className="text-xl text-primaryHighlight">Architecture</span>
						<ProgressiveImage
							src={require('../assets/img/facerec/architecture.png')}
							placeholder={require('../assets/img/facerec/architecture_tn.jpg')}
						>
							{(src) => <img className=" mx-auto my-4 w-10/12" src={src} alt="project" />}
						</ProgressiveImage>
						The FaceNet deep learning model computes a 128-d embedding that quantifies the face itself. To
						train a face recognition model with deep learning, each input batch of data includes three
						images:
						<ul className="list-disc list-inside mb-5">
							<li>The anchor</li>
							<li>The positive image</li>
							<li>The negative image</li>
						</ul>
						The point is that the anchor and positive image both belong to the same person/face while the
						negative image does not contain the same face. The neural network computes the 128-d embeddings
						for each face and then tweaks the weights of the network (via the triplet loss function) such
						that:
						<ul className="list-disc list-inside">
							<li>The 128-d embeddings of the anchor and positive image lie closer together</li>
							<li>While at the same time, pushing the embeddings for the negative image father away</li>
						</ul>
					</div>
				</div>
				{/* section 4 */}
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<span className="text-xl text-primaryHighlight">Result</span>
					<div className="text-left text-gray-400">
						As a result of used vectors to classify faces, we get a very effiecient classifier that can run
						with very high accuracy without the need for powerfull computers.
					</div>
					<ProgressiveImage
						src={require('../assets/img/facerec/result1.jpg')}
						placeholder={require('../assets/img/facerec/result1_tn.jpg')}
					>
						{(src) => <img className=" mx-auto my-4 w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
					<ProgressiveImage
						src={require('../assets/img/facerec/result2.jpg')}
						placeholder={require('../assets/img/facerec/result2_tn.jpg')}
					>
						{(src) => <img className=" mx-auto my-4 w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
				</div>
				{/* section 6 */}

				<a
					className="w-1/2"
					href="https://github.com/saiashish90/opencv-facial-recogniton"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="code"
				>
					<span className="text-base text-primaryHighlight mr-10">Source code</span>
				</a>
				<a
					className="w-1/2"
					href="https://drive.google.com/file/d/16kSW66ndty8f4BiDsUwSzjHWFpwKgpQq/view?usp=sharing"
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
export default FaceRec;

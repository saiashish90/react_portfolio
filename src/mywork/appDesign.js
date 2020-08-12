import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
function AppDesign() {
	React.useEffect(() => {
		document.getElementById('menu').style.display = 'none';
		document.getElementById('back').style.display = 'block';
	});
	return (
		<Fragment>
			<div className="py-20 text-center leading-7">
				{/* section 1 */}
				<div className="py-8 w-11/12 h-auto md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow">
					<h1 className="text-white text-2xl font-semibold ">Grocery App Design</h1>
					<ProgressiveImage
						src={require('../assets/img/appDesign/isometric.jpg')}
						placeholder={require('../assets/img/appDesign/isometric_tn.jpg')}
					>
						{(src) => <img className="my-5 mx-auto w-10/12" src={src} alt="project" />}
					</ProgressiveImage>
				</div>
				{/* section 2 */}
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					<div className="flex flex-wrap overflow-hidden text-white">
						<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
							{/* work5 */}
							<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
								<ProgressiveImage
									src={require('../assets/img/appDesign/Signup.png')}
									placeholder={require('../assets/img/appDesign/Signup_tn.jpg')}
								>
									{(src) => <img className="w-full" src={src} alt="work3" />}
								</ProgressiveImage>
							</div>
							{/* work5 */}
						</div>
						<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
							{/* work3 */}
							<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
								<ProgressiveImage
									src={require('../assets/img/appDesign/Login.png')}
									placeholder={require('../assets/img/appDesign/Login_tn.jpg')}
								>
									{(src) => <img className="w-full" src={src} alt="work3" />}
								</ProgressiveImage>
							</div>
							{/* work3 */}
						</div>
						<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
							{/* work4 */}
							<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
								<ProgressiveImage
									src={require('../assets/img/appDesign/otp.png')}
									placeholder={require('../assets/img/appDesign/otp_tn.jpg')}
								>
									{(src) => <img className="w-full" src={src} alt="work3" />}
								</ProgressiveImage>
							</div>
							{/* work4 */}
						</div>
						<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
							{/* work2 */}
							<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
								<ProgressiveImage
									src={require('../assets/img/appDesign/grocery.png')}
									placeholder={require('../assets/img/appDesign/grocery_tn.jpg')}
								>
									{(src) => <img className="w-full" src={src} alt="work2" />}
								</ProgressiveImage>
							</div>
							{/* work2 */}
						</div>
						<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
							{/* work1 */}
							<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
								<ProgressiveImage
									src={require('../assets/img/appDesign/cart.png')}
									placeholder={require('../assets/img/appDesign/cart_tn.jpg')}
								>
									{(src) => <img className="w-full" src={src} alt="work1" />}
								</ProgressiveImage>
							</div>
							{/* work1 */}
						</div>

						<div className="w-full p-5 overflow-hidden text-center md:w-1/2 lg:w-1/3 mb-5">
							{/* work6 */}
							<div className="shadow m-7 mb-5 rounded-lg overflow-hidden">
								<ProgressiveImage
									src={require('../assets/img/appDesign/store.png')}
									placeholder={require('../assets/img/appDesign/store_tn.jpg')}
								>
									{(src) => <img className="w-full" src={src} alt="work3" />}
								</ProgressiveImage>
							</div>
							{/* work6 */}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
export default AppDesign;

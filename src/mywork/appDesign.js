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

				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					asd
				</div>
				<div
					className="my-5 py-8 px-5 md:px-12 w-11/12 md:w-3/4 mx-auto bg-secondaryDark rounder smoothAfShadow"
					id="work"
				>
					asd
				</div>
			</div>
		</Fragment>
	);
}
export default AppDesign;

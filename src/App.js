import React from 'react';

import Home from './home';
import About from './about';
import Skills from './skills';
import Work from './work';

import './css/styles.css';

function App() {
	React.useEffect(() => {
		document.getElementById('menu').style.display = 'block';
		document.getElementById('back').style.display = 'none';
	});
	return (
		<div>
			<Home />
			<About />
			<Skills />
			<Work />
			<footer className="bg-secondaryDark py-5 rounded-t-lg text-center">
				<div className="text-white">
					<a
						href="https://www.linkedin.com/in/sai-ashish-ba927a1b2/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bx mr-4 bxl-linkedin hover:text-primaryHighlight" />
					</a>
					<a href="https://github.com/saiashish90" target="_blank" rel="noopener noreferrer">
						<i className="bx mr-4 bxl-github hover:text-primaryHighlight" />
					</a>
					<a href="https://profile.codersrank.io/user/saiashish90" target="_blank" rel="noopener noreferrer">
						<i className="bx mr-4 bx-code-alt hover:text-primaryHighlight" />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;

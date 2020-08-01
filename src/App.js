import React from 'react';

import Home from './home';
import About from './about';
import Skills from './skills';
import Work from './work';
import Contact from './contact';

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
			<Contact />
		</div>
	);
}

export default App;

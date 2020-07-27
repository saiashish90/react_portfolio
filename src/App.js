import React from 'react';

import Header from './header/header';
import Home from './home';
import About from './about';
import Skills from './skills';

import './styles.css';

function App() {
	return (
		<div>
			<Header />
			<Home />
			<About />
			<Skills />
		</div>
	);
}

export default App;

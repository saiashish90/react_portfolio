import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/header';
import Home from './home';
import About from './about';
ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Home />
		<About />
	</React.StrictMode>,
	document.getElementById('root')
);

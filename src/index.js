import React from 'react';
import ReactDOM from 'react-dom';
// css
import './index.css';
import './css/styles.css';
// components
import Header from './header/header';
import Home from './home';
import About from './about';

ReactDOM.render(
	<React.StrictMode>
		<Header className="z-10" />
		<Home className="z-10" />
		<About className="z-10" />
	</React.StrictMode>,
	document.getElementById('root')
);

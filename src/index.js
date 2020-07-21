import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/header';
import Home from './home';
ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
);

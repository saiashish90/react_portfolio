import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './home';
import Header from './header/header';
ReactDOM.render(
	<React.StrictMode>
		<Header />
		<home />
	</React.StrictMode>,
	document.getElementById('root')
);

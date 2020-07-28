import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// css
import './css/index.css';
// components
import App from './App';
import Header from './header/header';
import Work1 from './mywork/work1';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Router>
			<Route exact path="/" component={App} />
			<Route exact path="/work1" component={Work1} />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

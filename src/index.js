import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
// css
import './css/index.css';
// components
import App from './App';
import Header from './header/header';
import Work1 from './mywork/work1.js';
import FaceRec from './mywork/facerec';
import Footer from './footer';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<ScrollMemory />
			<Route exact path="/" component={App} />
			<Route exact path="/work1" component={Work1} />
			<Route exact path="/FaceRec" component={FaceRec} />
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

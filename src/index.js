import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
// css
import './css/index.css';
// components
import App from './App';
import Header from './header/header';
import IISC from './mywork/IISC.js';
import FaceRec from './mywork/facerec';
import SmartLight from './mywork/smartlight';
import AppDesign from './mywork/appDesign';
import Footer from './footer';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<ScrollMemory />
			<Route exact path="/" component={App} />
			<Route exact path="/IISC" component={IISC} />
			<Route exact path="/FaceRec" component={FaceRec} />
			<Route exact path="/SmartLight" component={SmartLight} />
			<Route exact path="/AppDesign" component={AppDesign} />
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

import React, { useRef, useEffect, useCallback } from 'react';

import Header from './header/header';
import Home from './home';
import About from './about';
import Skills from './skills';
import useWindowSize from './hooks/useWindowSize';

import './css/styles.css';
import './css/App.css';

function App() {
	const size = useWindowSize();
	const app = useRef();
	const scrollContainer = useRef();

	// Configs
	const data = {
		ease     : 0.1,
		current  : 0,
		previous : 0,
		rounded  : 0
	};
	// Scrolling
	const skewScrolling = useCallback(
		() => {
			//Set Current to the scroll position amount
			data.current = window.scrollY;
			// Set Previous to the scroll previous position
			data.previous += (data.current - data.previous) * data.ease;
			// Set rounded to
			data.rounded = Math.round(data.previous * 100) / 100;

			// Difference between
			const difference = data.current - data.rounded;
			const acceleration = difference / size.width;
			const velocity = +acceleration;
			const skew = velocity * 0;

			//Assign skew and smooth scrolling to the scroll container
			scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

			//loop vai raf
			requestAnimationFrame(() => skewScrolling());
		},
		[ data, size.width ]
	);

	// Run scrollrender once page is loaded.
	useEffect(
		() => {
			requestAnimationFrame(() => skewScrolling());
		},
		[ skewScrolling ]
	);
	//set the height of the body.
	useEffect(
		() => {
			setBodyHeight();
		},
		[ size.height ]
	);

	//Set the height of the body to the height of the scrolling div
	const setBodyHeight = () => {
		document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height + 150}px`;
	};
	return (
		<div ref={app} className="App">
			<Header />
			<div ref={scrollContainer} className="scroll">
				<Home />
				<About />
				<Skills />
			</div>
		</div>
	);
}

export default App;

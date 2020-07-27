import React, { useRef, useEffect } from 'react';

import Header from './header/header';
import Home from './home';
import About from './about';
import Skills from './skills';
import useWindowSize from './hooks/useWindowSize';

import './css/styles.css';
import './css/App.css';

function App() {
	// Hook to grab window size
	const size = useWindowSize();

	// Ref for parent div and scrolling div
	const app = useRef();
	const scrollContainer = useRef();

	// Configs
	const scrollData = {
		ease     : 0.08,
		current  : 0,
		previous : 0,
		rounded  : 0
	};

	// Run scrollrender once page is loaded.
	useEffect(() => {
		requestAnimationFrame(() => skewScrolling());
	}, []);

	//set the height of the body.
	useEffect(
		() => {
			setBodyHeight();
		},
		[ size.height ]
	);

	//Set the height of the body to the height of the scrolling div
	const setBodyHeight = () => {
		document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
	};

	// Scrolling
	const skewScrolling = () => {
		//Set Current to the scroll position amount
		scrollData.current = window.scrollY;
		// Set Previous to the scroll previous position
		scrollData.previous += (scrollData.current - scrollData.previous) * scrollData.ease;
		// Set rounded to
		scrollData.rounded = Math.round(scrollData.previous * 100) / 100;
		scrollContainer.current.style.transform = `translate3d(0, -${scrollData.rounded}px, 0)`;

		//loop vai raf
		requestAnimationFrame(() => skewScrolling());
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

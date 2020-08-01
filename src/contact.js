import React from 'react';
import './css/styles.css';
import './css/contact.css';
function contact() {
	function handleForm(event) {
		event.preventDefault();
		console.log(document.getElementById('name').value);
		console.log(document.getElementById('email').value);
		console.log(document.getElementById('message').value);
		document.getElementById('name').value = '';
		document.getElementById('email').value = '';
		document.getElementById('message').value = '';
	}

	return (
		<section
			className="py-3 px-2 w-11/12 mx-auto mb-32 bg-secondaryDark text-center rounder smoothAfShadow"
			id="contact"
		>
			<h1 className="text-primaryHighlight text-4xl mb-10">Contact</h1>

			<div className="text-white w-5/6 md:w-3/6 lg:w-2/6 p-2 mx-auto mb-4">
				<h1>
					If you would like me to help you with something,<br /> email me at :
					<span className="text-secondaryHighlight">&nbsp;saiashish90@gmail.com</span>
				</h1>
				<h1>Or just leave a message.</h1>
			</div>

			<form onSubmit={handleForm} className="w-5/6 md:w-3/6 lg:w-2/6 mx-auto" autoComplete="off">
				<h1 className="text-primaryHighlight text-2xl text-left mb-8">Leave a message</h1>
				<div className="mx-auto h-12 p-2 border w-full mb-8 rounded-lg text-left">
					<input
						className="block w-full outline-none text-white bg-transparent"
						type="text"
						id="name"
						placeholder=" "
						required
					/>
					<label htmlFor="name" className="block">
						Name
					</label>
				</div>
				<div className="mx-auto h-12 p-2 border w-full mb-8 rounded-lg text-left">
					<input
						className="block w-full outline-none text-white bg-transparent"
						type="text"
						id="email"
						placeholder=" "
						required
					/>
					<label htmlFor="email" className="block">
						Email
					</label>
				</div>
				<div className="mx-auto relative h-full p-2 border w-full mb-8 rounded-lg text-left">
					<textarea
						className="block  w-full outline-none text-white bg-transparent overflow-auto"
						id="message"
						cols="30"
						rows="5"
						placeholder=" "
						required
						autoComplete="new-password"
					/>
					<label htmlFor="message" className="block absolute" style={{ top: '2rem' }}>
						Message
					</label>
				</div>
				<button className="bg-primaryHighlight text-black font-semibold text-sm py-3 px-8 rounded-lg relative focus:outline-none z-0">
					Submit
				</button>
			</form>
		</section>
	);
}
export default contact;

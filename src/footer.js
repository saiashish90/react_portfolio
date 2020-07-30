import React from 'react';
function footer() {
	return (
		<footer className="bg-secondaryDark py-5 rounded-t-lg text-center">
			<div className="text-white">
				<a
					href="https://www.linkedin.com/in/sai-ashish-ba927a1b2/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="linkedin"
				>
					<i className="bx mr-4 bxl-linkedin hover:text-primaryHighlight" />
				</a>
				<a href="https://github.com/saiashish90" target="_blank" rel="noopener noreferrer" aria-label="github">
					<i className="bx mr-4 bxl-github hover:text-primaryHighlight" />
				</a>
				<a
					href="https://profile.codersrank.io/user/saiashish90"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="coderank"
				>
					<i className="bx mr-4 bx-code-alt hover:text-primaryHighlight" />
				</a>
			</div>
		</footer>
	);
}
export default footer;

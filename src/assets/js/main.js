/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show');
		});
	}
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	/*Active link*/
	navLink.forEach((n) => n.classList.remove('active'));
	this.classList.add('active');

	/*Remove menu mobile*/
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin   : 'top',
	distance : '80px',
	duration : 2000,
	reset    : true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__description', {});
sr.reveal('.skills__data', { delay: 200 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });

$(document).ready(function() {
	$(document).on('scroll', onScroll);
	particlesJS('particles-js', {
		particles     : {
			number      : { value: 60, density: { enable: true, value_area: 800 } },
			color       : { value: '#000000' },
			shape       : {
				type    : 'circle',
				stroke  : { width: 0, color: '#000000' },
				polygon : { nb_sides: 5 },
				image   : { src: 'img/github.svg', width: 100, height: 100 }
			},
			opacity     : {
				value  : 0.5,
				random : false,
				anim   : { enable: false, speed: 1, opacity_min: 0.1, sync: false }
			},
			size        : { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
			line_linked : { enable: true, distance: 150, color: '#000000', opacity: 0.4, width: 1 },
			move        : {
				enable    : true,
				speed     : 6,
				direction : 'none',
				random    : false,
				straight  : false,
				out_mode  : 'out',
				bounce    : false,
				attract   : { enable: false, rotateX: 600, rotateY: 1200 }
			}
		},
		interactivity : {
			detect_on : 'canvas',
			events    : {
				onhover : { enable: false, mode: 'repulse' },
				onclick : { enable: false, mode: 'push' },
				resize  : true
			},
			modes     : {
				grab    : { distance: 400, line_linked: { opacity: 1 } },
				bubble  : { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
				repulse : { distance: 200, duration: 0.4 },
				push    : { particles_nb: 4 },
				remove  : { particles_nb: 2 }
			}
		},
		retina_detect : true
	});
});

function onScroll(event) {
	var scrollPos = $(document).scrollTop() + document.getElementById('nav').offsetHeight * 2;
	$('#nav-menu a').each(function() {
		var currLink = $(this);
		var refElement = $(currLink.attr('href'));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('#nav-menu ul li a').removeClass('active');
			currLink.addClass('active');
		} else {
			currLink.removeClass('active');
		}
	});
}

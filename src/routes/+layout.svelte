<script>
	import { onMount } from 'svelte';
	import Header from '$lib/header/Header.svelte';
	import ContactFooter from '$lib/components/contact-footer/ContactFooter.svelte';
	import { debounce } from 'lodash';

	import '../app.css';

	// Utility functions
	const select = (selector, scope = document) => scope.querySelector(selector);
	const addClass = (ele, cls) => ele.classList.add(...(Array.isArray(cls) ? cls : [cls]));
	const removeClass = (ele, cls) => ele.classList.remove(...(Array.isArray(cls) ? cls : [cls]));

	// Constants
	const TODAY = new Date().getDay();
	const HIGHLIGHT_CLASSES = ['font-bold', 'text-white'];

	// Configuration
	const ADDRESS = `
  <p>343 S 2nd Ave</p>
  <p>Mount Vernon, NY 10550</p>            
  <a href="tel:9144194033">Tel: (914)419-4033</a>
`;

	const HOURS = `
  <p data-id="1">Mon. 	11:30am – 2:45pm & 5pm – 10pm</p>
  <p data-id="2">Tue. 	11:30am – 2:45pm & 5pm – 10pm</p>
  <p data-id="3">Wed. 	11:30am – 2:45pm & 5pm – 10pm</p>
  <p data-id="4">Thu. 	11:30am – 2:45pm & 5pm – 10pm</p>
  <p data-id="5">Fri. 	11:30am – 2:45pm & 5pm – 10pm</p>
  <p data-id="6">Sat. 	12pm – 10pm</p>
  <p data-id="0">Sun. 	12pm – 10pm</p>
  <p>Holidays:   11:30am – 10pm</p>
`;

	// Navigation functions
	function moveDown() {
		const current = select('section.active');
		const index = current.dataset.index;
		const next = select(`section[data-index='${parseInt(index) + 1}']`);

		if (next) {
			smoothScrollToSection(next);
			updateActiveSection(current, next);
		}
	}

	function moveUp() {
		const current = select('section.active');
		const index = current.dataset.index;
		const next = select(`section[data-index='${parseInt(index) - 1}']`);

		if (next) {
			smoothScrollToSection(next);
			updateActiveSection(current, next);
		}
	}

	function smoothScrollToSection(section) {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		section.scrollIntoView({
			behavior: prefersReducedMotion ? 'auto' : 'smooth'
		});
	}

	function updateActiveSection(current, next) {
		addClass(next, 'active');
		removeClass(current, 'active');
	}

	// Event handlers
	const handleScroll = debounce((event) => {
		const delta = event.deltaY;
		if (delta < 0) {
			moveUp();
		} else {
			moveDown();
		}
	}, 100);

	// Touch handling
	let touchStart = 0;
	let touchEnd = 0;

	function handleTouchStart(event) {
		touchStart = event.changedTouches[0].screenY;
	}

	function handleTouchEnd(event) {
		touchEnd = event.changedTouches[0].screenY;
		if (touchStart - touchEnd > 50) {
			moveDown();
		} else if (touchEnd - touchStart > 50) {
			moveUp();
		}
	}

	onMount(() => {
		const sections = document.querySelectorAll('section');
		sections.forEach((section, index) => {
			section.dataset.index = index;
		});

		const todayHours = select(`[data-id='${TODAY}']`);
		addClass(todayHours, HIGHLIGHT_CLASSES);

		// Add touch event listeners
		document.addEventListener('touchstart', handleTouchStart);
		document.addEventListener('touchend', handleTouchEnd);

		return () => {
			document.removeEventListener('touchstart', handleTouchStart);
			document.removeEventListener('touchend', handleTouchEnd);
		};
	});
</script>

<div class="flex flex-col scroll-smooth">
	<Header />
	<main on:wheel={handleScroll}>
		<slot />
	</main>
	<ContactFooter address={ADDRESS} hours={HOURS} />
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap');

	main {
		font-family: 'Lato', sans-serif;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

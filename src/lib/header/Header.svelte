<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import logo from './svelte-logo.svg';
	import l from './bananatastic.png'

	let menu;
	let mobile = false;


	onMount(async() =>{
		menu = document.querySelector('#menu')
		const mobileDevice = window.matchMedia('(max-width: 768px)');
		mobileDevice.addEventListener('change', handleDeviceChange);
		function handleDeviceChange(e) {
			if (e.matches) mobile = true;
			else mobile = false;
		}
		// Run it initially
		handleDeviceChange(mobileDevice);

	})



	function toggleMenu(){
		if (mobile){
			menu.classList.toggle('hidden')
			menu.classList.toggle('w-full')
			menu.classList.toggle('h-screen')
		}
	}

</script>


<header class="w-full h-16 drop-shadow-lg bg-black">
	<div class="container lg:px-4 md:px-0 h-full mx-auto flex justify-between items-center px-4">
		<!-- Logo Here -->
		<a class="text-yellow-400 text-xl font-bold italic md:z-0 z-50" href="/">GOOD<span
				class="text-white">FOOD</span></a>

		<nav data-sveltekit-prefetch>

			<!-- Menu links here -->
			<ul id="menu" class="hidden fixed top-0 right-0 px-10 py-16 bg-gray-800 z-40
				md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">

				<li class="md:hidden z-90 fixed top-4 right-6">
					<a href="#" class="text-right text-white text-4xl"
						on:click={toggleMenu}>&times;</a>
				</li>

				<li class:active={$page.url.pathname === '/'}>
					<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/" on:click={toggleMenu}>Home</a>
				</li>
				<li class:active={$page.url.pathname === '/about'}>
					<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/about" on:click={toggleMenu}>About</a>
				</li>
				<li class:active={$page.url.pathname === '/menu'}>
					<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/menu" on:click={toggleMenu}>Menu</a>
				</li>

				<li class:active={$page.url.pathname === '/gallery'}>
					<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/gallery" on:click={toggleMenu}>Gallery</a>
				</li>
				<li class:active={$page.url.pathname === '#contact'}>
					<a class="text-white opacity-70 hover:opacity-100 duration-300" href="#contact" on:click={toggleMenu}>Contact</a>
				</li>
			</ul>

		</nav>

		<!-- This is used to open the menu on mobile devices -->
		<div class="flex items-center md:hidden">
			<button class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300 fixed top-4 right-6"
				on:click={toggleMenu}>
				&#9776;
			</button>
		</div>

</header>

<!-- <header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={l} alt="SvelteKit" />
		</a>
	</div>

	<nav data-sveltekit-prefetch>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul id="menu" class="hidden fixed top-0 right-0 px-10 py-16 z-50 md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6">
			<li class="md:hidden z-90 fixed top-4 right-6">
				<a href="#" class="text-right text-white text-4xl"
				on:click={toggleMenu}>&times;</a>
			</li>
			
			<li class:active={$page.url.pathname === '/'}>
				<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/menu'}>
				<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/menu">Menu</a>
			</li>
			<li class:active={$page.url.pathname === '/gallery'}>
				<a class="text-white opacity-70 hover:opacity-100 duration-300" href="/gallery">Gallery</a>
			</li>
			<li class:active={$page.url.pathname === '#contact'}>
				<a class="text-white opacity-70 hover:opacity-100 duration-300" href="#contact">Contact</a>
			</li>
		
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div>
		<ul>
			<li class:active={$page.url.pathname === '/order'} 
				class="flex items-center justify-center">
				<a href="/order" class="order">Order Online</a>
			</li>
		</ul>
	</div>
	<div class="flex items-center md:hidden">
		<div class="space-y-2">
			<div class="w-8 h-0.5 bg-gray-600"></div>
			<div class="w-8 h-0.5 bg-gray-600"></div>
			<div class="w-8 h-0.5 bg-gray-600"></div>
		</div>
	</div>
</header> -->

<!-- <style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: black;
		width: 100%;
		z-index: 1;
		position: fixed;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		position: relative;
		left: 175%;
		width: 250em;
		height: 2em;
		object-fit: contain;
		max-width: none;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: transparent;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--heading-color);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--pure-white);
		
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	.order{
		position: relative;
		right: 20%;
		padding: 0.25em 1em;
		color: var(--pure-white);
		border: 1px solid var(--pure-white);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
 -->
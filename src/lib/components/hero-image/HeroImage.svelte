<script>
	export let text = '';
	export let image =
		'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
	import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(async () => {
		animate = true;
	});
</script>

<div class="hero-image" style="background-image: url({image});">
	<div class="hero-text">
		{#if animate}
			<!-- content here -->

			<div class="container">
				<div class="overflow">
					{#each text as letter, i}
						<span
							class="letter"
							in:fly={{
								y: 200,
								delay: 300 * i,
								easing: backOut
							}}>{letter}</span
						>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

	.overflow {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
	}

	.letter {
		padding: 0 0 200px;
		font-family: 'Pacifico', cursive;
		font-size: 2.5rem;
		font-weight: 900;
		display: inline-block;
		margin: 0.2rem;
		text-transform: uppercase;
		text-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
	}

	/* The hero image */
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */

		background-color: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100vh;

		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	/* Place text in the middle of the image */
	.hero-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}

	/* .container {
	width: 100%;
	margin: auto;
	font-weight: 900;
	text-transform: uppercase;
	text-align: center;
	padding: 0 0 200px;
	font-family: 'Pacifico', cursive;
	font-size: 14px;

	word-wrap:break-word;
} */

	@media screen and (max-width: 768px) {
		.hero-text {
			width: 100%;
		}

		.container {
			text-transform: none;
		}
	}

	a,
	a:link,
	a:visited {
		text-decoration: none;
		padding: 9px 15px;
		border: 1px solid #ececec;
		border-radius: 5px;
		color: gray;
	}

	.animate {
		font-size: 80px;
		margin: 100px 0 0;
		border-bottom: 2px solid #ccc;
	}

	.animate span {
		display: inline-block;
	}

	/* Animation Seven */

	.seven span {
		color: #fff;
		opacity: 0;
		transform: translate(-150px, 0) scale(0.3);
		animation: leftRight 1.5s forwards;
	}

	@keyframes leftRight {
		40% {
			transform: translate(50px, 0) scale(0.7);
			opacity: 1;
			color: #348c04;
		}

		60% {
			color: #0f40ba;
		}

		80% {
			transform: translate(0) scale(2);
			opacity: 0;
		}

		100% {
			transform: translate(0) scale(1);
			opacity: 1;
		}
	}

	.animate {
		font-size: 50px;
		margin: 100px 0 0;
		border-bottom: 2px solid #ccc;
	}

	.animate span {
		display: inline-block;
	}

	a.repeat {
		display: inline-block;
		font-size: 12px;
		text-transform: none;
		text-decoration: none;
		color: orange;
		padding: 5px 12px;
		border: 1px solid rgba(0, 0, 0, 0.15);
		font-weight: normal;
		margin: 0 0 0 50px;
		border-radius: 3px;
		position: relative;
		bottom: 15px;
	}

	a.repeat:hover {
		background: rgba(0, 0, 0, 0.7);
		color: white;
	}

	.animate span:nth-of-type(2) {
		animation-delay: 0.05s;
	}
	.animate span:nth-of-type(3) {
		animation-delay: 0.1s;
	}
	.animate span:nth-of-type(4) {
		animation-delay: 0.15s;
	}
	.animate span:nth-of-type(5) {
		animation-delay: 0.2s;
	}
	.animate span:nth-of-type(6) {
		animation-delay: 0.25s;
	}
	.animate span:nth-of-type(7) {
		animation-delay: 0.3s;
	}
	.animate span:nth-of-type(8) {
		animation-delay: 0.35s;
	}
	.animate span:nth-of-type(9) {
		animation-delay: 0.4s;
	}
	.animate span:nth-of-type(10) {
		animation-delay: 0.45s;
	}
	.animate span:nth-of-type(11) {
		animation-delay: 0.5s;
	}
	.animate span:nth-of-type(12) {
		animation-delay: 0.55s;
	}
	.animate span:nth-of-type(13) {
		animation-delay: 0.6s;
	}
	.animate span:nth-of-type(14) {
		animation-delay: 0.65s;
	}
	.animate span:nth-of-type(15) {
		animation-delay: 0.7s;
	}
	.animate span:nth-of-type(16) {
		animation-delay: 0.75s;
	}
	.animate span:nth-of-type(17) {
		animation-delay: 0.8s;
	}
	.animate span:nth-of-type(18) {
		animation-delay: 0.85s;
	}
	.animate span:nth-of-type(19) {
		animation-delay: 0.9s;
	}
	.animate span:nth-of-type(20) {
		animation-delay: 0.95s;
	}
</style>

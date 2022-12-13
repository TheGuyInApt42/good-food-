<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	//TODO: https://www.quay.com.au/ 
</script>


<div class="flex flex-col">
	<Header />


	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

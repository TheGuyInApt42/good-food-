<script>
	import TwoCol from '$lib/components/two-col/TwoCol.svelte'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<TwoCol 
	title='About' 
	textHeader='About Us' 
	text='
Welcome to Banana Bistro, the premier restaurant specializing in banana dishes! We are a family-owned and operated restaurant located in the heart of the city.

At Banana Bistro, we believe that bananas are a versatile and delicious ingredient that can be used in a variety of dishes. Our menu features a wide selection of banana-based dishes, from savory entrees to sweet desserts. We also offer a selection of vegan and vegetarian options.

Our chefs are passionate about creating unique and flavorful dishes that will tantalize your taste buds. We use only the freshest ingredients and strive to provide a memorable dining experience.

We invite you to come and experience the delicious flavors of Banana Bistro. Whether you’re looking for a quick lunch or a romantic dinner, we have something for everyone. We look forward to serving you soon!' 
	btnText='Read More'
/>


<div class="content">
	
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

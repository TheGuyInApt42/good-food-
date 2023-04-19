<script>
	// Components
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import TwoCol from '$lib/components/two-col/TwoCol.svelte'

	// Start: Local component properties
	const metaData = {
		title: `About Good Food`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		keywords: ['about', 'about good food', 'good food story'],
		content : 'About Good Food'
	};
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->


<TwoCol 
	title='About' 
	textHeader='About Us' 
	text='
Welcome to Banana Bistro, the premier restaurant specializing in banana dishes! We are a family-owned and operated restaurant located in the heart of the city.

At Banana Bistro, we believe that bananas are a versatile and delicious ingredient that can be used in a variety of dishes. Our menu features a wide selection of banana-based dishes, from savory entrees to sweet desserts. We also offer a selection of vegan and vegetarian options.

Our chefs are passionate about creating unique and flavorful dishes that will tantalize your taste buds. We use only the freshest ingredients and strive to provide a memorable dining experience.

We invite you to come and experience the delicious flavors of Banana Bistro. Whether you’re looking for a quick lunch or a romantic dinner, we have something for everyone. We look forward to serving you soon!' 
	bgImage='https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
/>

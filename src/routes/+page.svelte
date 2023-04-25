<script>
	// Components
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import HeroImage from '$lib/components/hero-image/HeroImage.svelte';
	import TwoCol from '../lib/components/two-col/TwoCol.svelte';
	// Start: Local component properties
	const metaData = {
		title: `Good Food | Home`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		keywords: ['food', 'good food', 'good eating'],
	};

	//TODO: add ordering system e.g. https://www.youtube.com/watch?v=Z-hACIsjv4E
	// https://dev.to/stripe/sky-cart-an-open-source-cloud-agnostic-shopping-cart-using-stripe-checkout-o5k
	// https://github.com/vercel/sveltekit-commerce
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<section class="active">
	<HeroImage text={'Good Food'}/>
</section>
<TwoCol 
	title='menu' 
	textHeader='Menu' 
	text='A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. 
		Delve into the Quay dining experience with Peter Gilmore’s Menu and thoughtfully curated Wine List by Fink Wine Director, 
		Amanda Yallop.' 
	btnText='View Menu'
	link='/menu'
	showImageonMobile={false}
	bgImage='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
/>

<TwoCol 
	title='about' 
	textHeader='About Us' 
	text='Peter’s appreciation of nature’s diversity and his endless experimentation in the kitchen and garden 
		are the driving forces in his cooking. Peter leads the Quay team with a focus on excellence, innovation and hospitality.' 
	imageOnRight={false}
	btnText='Learn More'
	link='/about'
	showImageonMobile={false}
	bgImage='https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
/>

<TwoCol 
	title='owner' 
	textHeader='Ralph Gorham' 
	text='Peter’s appreciation of nature’s diversity and his endless experimentation in the kitchen and garden 
		are the driving forces in his cooking. Peter leads the Quay team with a focus on excellence, innovation and hospitality.' 
	imageOnRight={true}
	btnText='Read More'
	showImageonMobile={false}
	bgImage='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
/>


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	
</style>

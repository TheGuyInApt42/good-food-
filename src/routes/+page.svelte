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
/>

<TwoCol 
	title='about' 
	textHeader='About Us' 
	text='Peter’s appreciation of nature’s diversity and his endless experimentation in the kitchen and garden 
		are the driving forces in his cooking. Peter leads the Quay team with a focus on excellence, innovation and hospitality.' 
	imageOnRight={false}
	btnText='Learn More'
	link='/about'
/>

<TwoCol 
	title='owner' 
	textHeader='Ralph Gorham' 
	text='Peter’s appreciation of nature’s diversity and his endless experimentation in the kitchen and garden 
		are the driving forces in his cooking. Peter leads the Quay team with a focus on excellence, innovation and hospitality.' 
	imageOnRight={true}
	btnText='Read More'
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

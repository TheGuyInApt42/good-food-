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

<section>
	<HeroImage text={'Good Food'}/>
</section>
<TwoCol title='menu' textHeader='Menu' text='A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Quay dining experience with Peter Gilmore’s Menu and thoughtfully curated Wine List by Fink Wine Director, Amanda Yallop.' />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>

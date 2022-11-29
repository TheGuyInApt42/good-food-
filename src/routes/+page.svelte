<script>
	// Components
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import Counter from '$lib/Counter.svelte';
	import HeroImage from '$lib/components/hero-image/HeroImage.svelte';
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

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>

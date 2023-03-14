<script>
	// Components
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import Gallery from './components/Gallery.svelte';

	// Start: Local component properties
	const metaData = {
		title: `Gallery | Good Food`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		keywords: ['gallery', 'photos', 'pics', 'good food pics'],
		content : 'Good Food Gallery'
	};

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<section class="py-12">
	<Gallery title1={'Responsive'} title2={'Image Gallery'} images={data.images}/>
</section>


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

	const aboutText = 
		`<p>Welcome to Good Food, where we believe that the key to a happy life lies in sharing scrumptious meals with the people you love. Established in 2023, our restaurant has been serving up a delightful array of dishes that tantalize taste buds and create lasting memories. Nestled in the heart of Mount Vernon, Good Food is a culinary haven for food enthusiasts who crave exceptional flavors and a warm, inviting atmosphere.</p>
		<br>
		<p>Our passion for creating unforgettable dining experiences is rooted in our commitment to using only the freshest, locally-sourced ingredients. Our talented team of chefs, led by lifelong food lover Ralph Gorham, meticulously crafts each dish to showcase the natural flavors and textures that make our cuisine truly unique. From our mouth-watering appetizers to our delectable desserts, every bite at Good Food is a celebration of culinary artistry.</p>
		<br>
		<p>Our warm and welcoming staff is dedicated to providing exceptional service, ensuring that every guest feels like a cherished part of the Good Food family. From the moment you step through our doors, you'll be greeted with genuine smiles and a commitment to making your dining experience truly special.</p>`
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->


<TwoCol 
	title='About' 
	textHeader='About Us' 
	text={aboutText}
	showImageonMobile={true}
	bgImage='https://source.unsplash.com/nA6Xhnq2Od8/'
/>

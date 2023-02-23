<script>
	// Components
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import TwoCol from '$lib/components/two-col/TwoCol.svelte'
	import Tabs from './components/tabs/Tabs.svelte'


	// Start: Local component properties
	const metaData = {
		title: `About Good Food`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		keywords: ['about', 'about good food', 'good food story'],
		content : 'About Good Food'
	};

	const menuContent = [
		{text: 'test1', type: 'Lunch'},
        {text: 'test2', type: 'Dinner'},
		{text: 'test23', type: 'Dessert'}

	]


	let menu = [
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Duck Confit Tacos',
            price: 11,
            description: 'Chihuahua cheese, avocado, cilantro, pickled onions'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Duck Confit Tacos',
            price: 11,
            description: 'Chihuahua cheese, avocado, cilantro, pickled onions'
        },
    ]

    let dessert = [
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Duck Confit Tacos',
            price: 11,
            description: 'Chihuahua cheese, avocado, cilantro, pickled onions'
        }
     
    ]
    let dinner = [
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Good Burger',
            price: 12,
            description: 'Delicious Burger with Cheese, Bacon, Lettuce, Tomatoes and Pickles'
        },
        {
            name: 'Duck Confit Tacos',
            price: 11,
            description: 'Chihuahua cheese, avocado, cilantro, pickled onions'
        }
     
    ]

	let menus = [
        {
            title: 'Lunch',
            content: menu
        },
        {
            title: 'Dessert',
            content: dessert
        },
        {
            title: 'Dinner',
            content: dinner
        }
    ]

	// NOTE: https://beyondsushi.com/#menu
	//NOTE: https://www.bengaltigerindianfood.com/
	//NOTE: https://www.coloniaverdenyc.com/menus

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
	btnText='Read More'
/>


<section>
	<Tabs list={menus} buttonStyle={'filterBtn'}/>
</section>


<!-- <div class="content">
	
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
</div> -->

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>

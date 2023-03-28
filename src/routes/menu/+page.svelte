<script>
	// Components
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import TwoCol from '$lib/components/two-col/TwoCol.svelte'
	import Tabs from './components/tabs/Tabs.svelte'


	// Start: Local component properties
	const metaData = {
		title: `Menu | Good Food`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		keywords: ['menu', 'good food menu', 'food'],
		content : 'Good Food Menu'
	};

	const menuContent = [
		{text: 'test1', type: 'Lunch'},
        {text: 'test2', type: 'Dinner'},
		{text: 'test23', type: 'Dessert'}

	]

    const { log } = console;
    log('hello')


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
	title='Menu Description' 
	textHeader='Our Food' 
	text='
Welcome to Banana Bistro, the premier restaurant specializing in banana dishes! We are a family-owned and operated restaurant located in the heart of the city.

At Banana Bistro, we believe that bananas are a versatile and delicious ingredient that can be used in a variety of dishes. Our menu features a wide selection of banana-based dishes, from savory entrees to sweet desserts. We also offer a selection of vegan and vegetarian options.

Our chefs are passionate about creating unique and flavorful dishes that will tantalize your taste buds. We use only the freshest ingredients and strive to provide a memorable dining experience.

We invite you to come and experience the delicious flavors of Banana Bistro. Whether you’re looking for a quick lunch or a romantic dinner, we have something for everyone. We look forward to serving you soon!' 
	
/>

<section class="mt-20">
	<Tabs list={menus} buttonStyle={'filterBtn'}/>
</section>
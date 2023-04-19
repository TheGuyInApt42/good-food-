<script>
	// Components
    import { Tabs, TabItem } from 'flowbite-svelte';
	import HeadTags from '$lib/components/head-tags/HeadTags.svelte';
	import TwoCol from '$lib/components/two-col/TwoCol.svelte'
    import Menu from './components/menu/Menu.svelte';

	//import Tabs from './components/tabs/Tabs.svelte'
    


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

    const headerBtn = 'text-2xl px-5'

	// NOTE: https://beyondsushi.com/#menu
	//NOTE: https://www.bengaltigerindianfood.com/
	//NOTE: https://www.coloniaverdenyc.com/menus

</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->


<TwoCol 
	title='Menu Description' 
	textHeader='Menu' 
    btnText='View Menu'
	link='#food'
	text='
Welcome to Banana Bistro, the premier restaurant specializing in banana dishes! We are a family-owned and operated restaurant located in the heart of the city.

At Banana Bistro, we believe that bananas are a versatile and delicious ingredient that can be used in a variety of dishes. Our menu features a wide selection of banana-based dishes, from savory entrees to sweet desserts. We also offer a selection of vegan and vegetarian options.

Our chefs are passionate about creating unique and flavorful dishes that will tantalize your taste buds. We use only the freshest ingredients and strive to provide a memorable dining experience.

We invite you to come and experience the delicious flavors of Banana Bistro. Whether you’re looking for a quick lunch or a romantic dinner, we have something for everyone. We look forward to serving you soon!' 
	bgImage='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
/>

<section id="food" class="mt-20">
	<!-- <Tabs list={menus} buttonStyle={'filterBtn'}/> -->
    <Tabs style="pill" defaultClass='items-center justify-center w-full flex' contentClass='p-4 rounded-lg mt-4' >
        {#each menus as menu, index}
            {#if index == 0}
                <TabItem open>
                    <span slot="title" class={headerBtn}>{menu.title}</span>
                    <Menu sectionTitle={menu.title} menuItems={menu.content} />
                </TabItem>
            {:else}
                <TabItem>
                    <span slot="title" class={headerBtn}>{menu.title}</span>
                    <Menu sectionTitle={menu.title} menuItems={menu.content} />
                </TabItem>

            {/if}
            
        {/each}
    </Tabs>

</section>

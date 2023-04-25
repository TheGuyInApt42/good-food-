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

    const menuText = `
        <p>At Good Food, we pride ourselves on offering a diverse menu that caters to a variety of tastes and dietary preferences. Whether you're a meat lover, a vegetarian, or a vegan, our extensive selection of dishes ensures that there's something for everyone to enjoy. Our ever-evolving menu is inspired by global flavors and seasonal ingredients, ensuring that each visit to Good Food is a new and exciting gastronomic adventure.</p>
		<br>
		<p>At Good Food, we believe that great food has the power to bring people together and create lasting connections. We invite you to join us for a meal that will not only satisfy your hunger but also nourish your soul. So gather your friends, family, and loved ones, and let us take you on a culinary journey that you'll never forget. Welcome to Good Food, where every meal is a celebration of life, love, and the simple joy of sharing good food with good company.</p>`


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
	text={menuText}
    showImageonMobile={true}
	bgImage='https://source.unsplash.com/vJsj-hgOEG0/'
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

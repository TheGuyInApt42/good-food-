<script>
    export let sectionTitle = ''
    export let menuItems = []
    import { fade, fly } from 'svelte/transition';

</script>

<div class="flex flex-col justify-center w-screen items-center gap-8 pt-8">
    <h3 class="text-4xl font-bold pb-5">{sectionTitle}</h3>
<section in:fly="{{ y: 200, duration: 2000 }}" out:fade class="flex flex-col md:flex-row w-full md:flex-wrap md:w-full gap-7 pb-8 lg:h-[450px] md:justify-center">
    {#each menuItems as item}
        <div class="menu-item md:w-[400px] w-[95%] text-center md:text-left">
            <h4>{item.name} | {item.price}</h4>
            <p>{item.description}</p>
        </div>
    {/each}

</section>

</div>


<style>
    
    
    

    .menu-item h4{
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
    }
</style>

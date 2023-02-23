<script>
    export let sectionTitle = ''
    export let menuItems = []

</script>

<div class="flex flex-col justify-center w-screen items-center gap-8 pt-8">
    <h3 class="text-4xl font-bold">{sectionTitle}</h3>
<section class="flex flex-col md:flex-row w-full md:flex-wrap md:w-[850px] gap-7 pb-8">
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

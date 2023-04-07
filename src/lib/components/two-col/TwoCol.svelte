<script>
    export let title = ''
    export let textHeader = ''
    export let text = ''
    export let imageOnRight = true;
    export let btnText = ''
    export let link = ''
    export let bgImage = ''
    //TODO: https://stackoverflow.com/questions/25839487/auto-scroll-to-next-anchor-at-mouse-wheel 
</script>

<style>
    .image{
        grid-area: image;
        /* background: url("https://www.washingtonpost.com/resizer/ZUrlI2mJsVl7uHWmmyFKiJJ7Y7Y=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FDFHHRVMNQ2JXFMPYNW3B3IYY4.jpg");
         */
    }

    @media screen and (max-width: 1023px){
        section{
            height: auto;
            flex-direction: column;
        }

        .image{
            order: unset;
            height: 400px;
            background-size: cover;
        }
    }


    @media screen and (max-width: 767px){
        .image{
            height: 250px;

        }
    }
</style>

<section id={`${title}-section`} class="flex h-[900px] w-screen">
    <div class="text-container {imageOnRight ? 'order-1' : 'order-2'} lg:h-screen flex justify-center items-center flex-col lg:w-1/2 py-8 lg:py-0">
        <div class="text-content w-[85%]">
            <h2 class="text-[50px]">{textHeader}</h2>
            <p class="mb-2">{text}</p>
            {#if btnText}
                <a class="mt-6 px-10 py-2 border border-black" href={link}>{btnText}</a>
            {/if}
            
        </div>
        
    </div>

    <div style="background-image: url('{bgImage}')" class="image {imageOnRight ? 'order-2' : 'order-1'} bg-cover bg-no-repeat bg-center bg-top lg:w-1/2 ">
    </div>
</section>
<script>
    export let title = ''
    export let textHeader = ''
    export let text = ''
    export let imageOnRight = true;
</script>

<style>
    .image{
        grid-area: image;
        background: url("https://www.washingtonpost.com/resizer/ZUrlI2mJsVl7uHWmmyFKiJJ7Y7Y=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FDFHHRVMNQ2JXFMPYNW3B3IYY4.jpg");
        
    }
</style>

<section id={title} class="grid grid-cols-2 h-[900px] w-screen">
    <div class="text {imageOnRight ? 'col-start-1' : 'col-start-2'} w-50%">
        <h2>{textHeader}</h2>
        <p>{text}</p>
        <a href="#">View Menu</a>
    </div>

    <div class="image {imageOnRight ? 'col-start-2' : 'col-start-1'} bg-cover bg-no-repeat bg-center bg-top w-[50vw]">
    </div>
</section>
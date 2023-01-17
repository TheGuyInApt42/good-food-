<script>
    import ExternalLink from '$lib/components/external-link/ExternalLink.svelte'

    const linkClass = 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition';
</script>

<style>
    .mr-1{
        margin-right: .5rem;
    }
    .facebook-icon {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        background: url('facebook.png');
        display: inline-table;
    }
    .twitter-icon {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        background: url('twitter.png');
        display: inline-table;
    }
    .youtube-icon {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        background: url('youtube.png');
        display: inline-block;
    }
    .instagram-icon {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        background: url('instagram.png');
        display: inline-block;
    }
    div{
        text-align: center;
    }
</style>

<footer class="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
    <div>
        <h4>Connect With Us</h4>
        <div id="footer-social-icons">
            <ExternalLink 
                href="https://www.facebook.com/GameStop"
                cssClasses="{linkClass}"
                ariaLabel={"Footer Facebook link"}
            >
                <span class="facebook-icon mb-1"></span>
            </ExternalLink>

            <a  class="mr-1" target="_blank">
                
            </a>
    
            <a href="https://www.twitter.com/GameStop" class="mr-1" target="_blank">
                <span class="twitter-icon mb-1"></span>
            </a>
    
            <a href="https://www.youtube.com/GameStopVideo" class="mr-1" target="_blank">
                <span class="youtube-icon mb-1"></span>
            </a>
    
            <a href="https://www.instagram.com/gamestop/?hl=en" class="mr-1" target="_blank">
                <span class="instagram-icon mb-1"></span>
            </a>
        </div>
    </div>
</footer>
<script>
	export let title1, title2;
	export let images = [];
</script>

<div class="container">
	<h2 class="heading-text">{title1} <span>{title2}</span></h2>

	<ul class="image-gallery">
		{#each images as image}
			<li>
				<img src={image.src} alt={image.alt} />
				<div class="overlay"><span>{image.title}</span></div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		padding: 40px 5%;
	}

	.heading-text {
		margin-bottom: 2rem;
		font-size: 2rem;
		text-align: center;
	}

	.heading-text span {
		font-weight: 100;
	}

	ul {
		list-style: none;
	}

	/* Responsive image gallery rules begin*/

	.image-gallery {
		text-align: center;
	}

	.image-gallery > li {
		/* fallback */
		display: inline-block;
		width: 350px;
		margin: 0 5px 10px 5px;
		/* end fallback */
		position: relative;
		cursor: pointer;
	}

	@supports (display: flex) {
		.image-gallery {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 10px;
		}

		.image-gallery > li {
			flex-basis: 350px; /*width: 350px;*/
			margin: 0;
		}

		.image-gallery::after {
			content: '';
			flex-basis: 350px;
		}
	}

	.image-gallery li img {
		object-fit: cover;
		max-width: 100%;
		height: auto;
		vertical-align: middle;
		border-radius: 5px;
	}

	.overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(57, 57, 57, 0.502);
		top: 0;
		left: 0;
		transform: scale(0);
		transition: all 0.2s 0.1s ease-in-out;
		color: #fff;
		border-radius: 5px;
		/* center overlay text */
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* hover */
	.image-gallery li:hover .overlay {
		transform: scale(1);
	}
</style>

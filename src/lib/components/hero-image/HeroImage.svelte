<script>
    export let text = '';
	

</script>

<div class="hero-image">
	
    <div class="hero-text">
        <div class="container">
            <div class="animate seven">
                {#each text as letter}
                    {#if letter == " "}
                        &nbsp;
                    {/if}
                    <span>{letter}</span>
                {/each}
                    
              
        
                </div>
        </div>
    </div>
  </div>


  <style>
    @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');


    /* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://th.bing.com/th/id/R.6d4491c4d0b3fb270e12d33904323c9f?rik=N6%2bWgpyjTAxPMw&riu=http%3a%2f%2fwww.presagepro.com%2fsy-photos%2f2014%2f08%2f22%2f16%2flarge_1d83f2a22_JAK_8210Sized.jpg&ehk=%2b7dnbbeS5yWi6CStoMt6hZqwuugiTasxHkNA0DtF5II%3d&risl=&pid=ImgRaw&r=0");

    width: 100%;
  height: 100vh;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
	
	.container {
	width: 100%;
	margin: auto;
	font-weight: 900;
	text-transform: uppercase;
	text-align: center;
	padding: 0 0 200px;
	font-family: 'Pacifico', cursive;
	font-size: 14px;

	word-wrap:break-word;
}
	
	a, a:link, a:visited {
  text-decoration: none;
  padding: 9px 15px;
  border: 1px solid #ececec;
  border-radius: 5px;
  color: gray;
}

.animate {
	font-size: 80px;
	margin: 100px 0 0;
	border-bottom: 2px solid #ccc;
}

.animate span {
	display: inline-block;
}

	
	/* Animation Seven */


.seven span {
	color: #fff;
	opacity: 0;
	transform: translate(-150px, 0) scale(.3);
	animation: leftRight 1.5s forwards;
}


@keyframes leftRight {
	40% {
		transform: translate(50px, 0) scale(.7);
		opacity: 1;
		color: #348c04;
	}

	60% {
		color: #0f40ba;
	}

	80% {
		transform: translate(0) scale(2);
		opacity: 0;
	}

	100% {
		transform: translate(0) scale(1);
		opacity: 1;
	}
}
	
	
	.animate {
	font-size: 50px;
	margin: 100px 0 0;
	border-bottom: 2px solid #ccc;
}

.animate span {
	display: inline-block;
}

a.repeat {
  display: inline-block;
  font-size: 12px;
  text-transform: none;
  text-decoration: none;
  color: orange;
  padding: 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: normal;
  margin: 0 0 0 50px;
  border-radius: 3px;
  position: relative;
  bottom: 15px;
}

a.repeat:hover {
  background: rgba(0, 0, 0, 0.7);
  color: white;
}

.animate span:nth-of-type(2) {
	animation-delay: .05s;
}
.animate span:nth-of-type(3) {
	animation-delay: .1s;
}
.animate span:nth-of-type(4) {
	animation-delay: .15s;
}
.animate span:nth-of-type(5) {
	animation-delay: .2s;
}
.animate span:nth-of-type(6) {
	animation-delay: .25s;
}
.animate span:nth-of-type(7) {
	animation-delay: .3s;
}
.animate span:nth-of-type(8) {
	animation-delay: .35s;
}
.animate span:nth-of-type(9) {
	animation-delay: .4s;
}
.animate span:nth-of-type(10) {
	animation-delay: .45s;
}
.animate span:nth-of-type(11) {
	animation-delay: .5s;
}
.animate span:nth-of-type(12) {
	animation-delay: .55s;
}
.animate span:nth-of-type(13) {
	animation-delay: .6s;
}
.animate span:nth-of-type(14) {
	animation-delay: .65s;
}
.animate span:nth-of-type(15) {
	animation-delay: .7s;
}
.animate span:nth-of-type(16) {
	animation-delay: .75s;
}
.animate span:nth-of-type(17) {
	animation-delay: .8s;
}
.animate span:nth-of-type(18) {
	animation-delay: .85s;
}
.animate span:nth-of-type(19) {
	animation-delay: .9s;
}
.animate span:nth-of-type(20) {
	animation-delay: .95s;
}

  </style>
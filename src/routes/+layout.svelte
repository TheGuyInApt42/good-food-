<script>
	import { onMount } from 'svelte';
	import Header from '$lib/header/Header.svelte';
	
	import '../app.css';

	//NOTE: https://www.quay.com.au/ 


	let start = 0
	let move = 0

	let current, index, next;
	

	const addClass = (ele, cls) =>{
		ele.classList.add(cls)
	}

	const removeClass = (ele, cls) =>{
		ele.classList.remove(cls)
	}

	function whichTransitionEvent(){
		let t;
		let el = document.createElement('fakeelement');
		let transitions = {
		'transition':'transitionend',
		'OTransition':'oTransitionEnd',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
		}

		for(t in transitions){
			if( el.style[t] !== undefined ){
				return transitions[t];
			}
		}
	}


	function transformPage(el2, pos, index, next_el){
		let animationTime = 1000;
		let easing = 'ease'
		let transformCSS = "-webkit-transform: translate3d(0, " + pos + "%, 0); -webkit-transition: -webkit-transform " + animationTime + "ms " + easing + "; -moz-transform: translate3d(0, " + pos + "%, 0); -moz-transition: -moz-transform " + animationTime + "ms " + easing + "; -ms-transform: translate3d(0, " + pos + "%, 0); -ms-transition: -ms-transform " + animationTime + "ms " + easing + "; transform: translate3d(0, " + pos + "%, 0); transition: transform " + animationTime + "ms " + easing + ";";
    
		el2.style.cssText = transformCSS;
		
		var transitionEnd = _whichTransitionEvent();
		el2.addEventListener(transitionEnd, endAnimation, false);
		
		function endAnimation() {
		
			el2.removeEventListener(transitionEnd, endAnimation)
		}
	}





	const moveDown = () =>{
		current = document.querySelector('section.active')
		index = current.dataset.index
		next = document.querySelector(`section[data-index='${parseInt(index) + 1}']`)
		console.log(next);
		let sections = document.querySelectorAll('section')
		let pos = 0;

		if (next){
			/* next.scrollIntoView({
				behavior: 'smooth'
			}) */
			pos = (index * 100) * -1;
			addClass(next, 'active')
			removeClass(current, 'active')
		}
		else{
			//scroll to top
			/* current = document.querySelector(`section[data-index='0']`)
			current.scrollIntoView({
				behavior: 'smooth'
			})
			for (let i = 0; i < sections.length; i++){
				removeClass(sections[i], 'active')
			} */
			addClass(current, 'active')
			
		}
		let next_index = next.dataset.index;


		//transformPage(current, pos, next_index, next);
	}

	const moveUp = () =>{
		current = document.querySelector('section.active')
		index = current.dataset.index
		next = document.querySelector(`section[data-index='${parseInt(index) - 1}']`)
		console.log(next);
		let sections = document.querySelectorAll('section')

		if (next){
			next.scrollIntoView({
				behavior: 'smooth'
			})
			addClass(next, 'active')
			removeClass(current, 'active')
		}
		else{
			//scroll to top
			current = document.querySelector(`section[data-index='0']`)
			current.scrollIntoView({
				behavior: 'smooth'
			})
			for (let i = 0; i < sections.length; i++){
				removeClass(sections[i], 'active')
			}
			addClass(current, 'active')
			
		}
	}

	function autoscroll(event){
		console.log(event.deltaY);
		start = event.layerY

			if (start > move){
				moveDown()
				console.log('scroll down');
			}
			else if(start < move){
				moveUp()
				console.log('scroll up');
			}
			else console.log('same');
			move = start
		}
	
	

	

	onMount(async() =>{
		let sections = document.querySelectorAll('section')

		for (let i = 0; i < sections.length; i++){
			sections[i].dataset.index = i
		}


		
		
		
	})
	
</script>


<div class="flex flex-col">
	<Header />


	<main on:wheel={e=> autoscroll(e)}>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

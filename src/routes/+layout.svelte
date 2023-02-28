<script>
	import { onMount } from 'svelte';
	import Header from '$lib/header/Header.svelte';
	import  ContactFooter from '$lib/components/contact-footer/ContactFooter.svelte'
	
	import '../app.css';

	//NOTE: https://www.quay.com.au/ 

	let address = `<p>343 S 2nd Ave</p>
                    <p>Mount Vernon, NY 10550</p>            
                    <a href="tel:9144194033">Tel: (914)419-4033</a>`



	let hours = `<p data-id="1">Mon. 	11:30am – 2:45pm & 5pm – 10pm</p>
        <p data-id="2">Tue. 	11:30am – 2:45pm & 5pm – 10pm</p>
            <p data-id="3">Wed. 	11:30am – 2:45pm & 5pm – 10pm</p>
                <p data-id="4">Thu. 	11:30am – 2:45pm & 5pm – 10pm</p>
                    <p data-id="5">Fri. 	11:30am – 2:45pm & 5pm – 10pm</p>
                        <p data-id="6">Sat. 	12pm – 10pm</p>
                            <p data-id="0">Sun. 	12pm – 10pm</p>

                                <p>Holidays:   11:30am – 10pm</p>`


	let start = 0
	let move = 0
	let pos = 0

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
			console.log(t);
			if( el.style[t] !== undefined ){
				return transitions[t];
			}
		}
	}


	function transformPage(el2, pos, index, next_el){
		console.log('transforming');
		let animationTime = 1000;
		let easing = 'ease'
		let transformCSS = `
		-webkit-transform: translate3d(0, ${pos}%, 0); -webkit-transition: -webkit-transform ${animationTime}ms ${easing}; 
		-moz-transform: translate3d(0, ${pos}%, 0); -moz-transition: -moz-transform ${animationTime}ms ${easing}; 
		-ms-transform: translate3d(0, ${pos}%, 0); -ms-transition: -ms-transform ${animationTime}ms ${easing}; 
		transform: translate3d(0, ${pos}%, 0); transition: transform ${animationTime}ms ${easing};`;
    
		console.log(transformCSS);
		el2.style.cssText = transformCSS;
		
		console.log(el2);
		
		var transitionEnd = whichTransitionEvent();
		el2.addEventListener(transitionEnd, endAnimation, false);
		
		function endAnimation() {
		
			el2.removeEventListener(transitionEnd, endAnimation)
		}
	}





	const moveDown = () =>{
		current = document.querySelector('section.active')
		index = current.dataset.index
		next = document.querySelector(`section[data-index='${parseInt(index) + 1}']`)
		//console.log(next);
		let sections = document.querySelectorAll('section')
		

		if (next){
			next.scrollIntoView({
				behavior: 'smooth'
			})  
			pos = (index * 100) * -1;
			addClass(next, 'active')
		
			removeClass(current, 'active')
		}
		else{
			//scroll to top
			/* current = document.querySelector(`section[data-index='0']`)
			pos = 0
			current.scrollIntoView({
				behavior: 'smooth'
			})  
			for (let i = 0; i < sections.length; i++){
				removeClass(sections[i], 'active')
			}
			addClass(current, 'active') */
			
		}
		let next_index = next.dataset.index;


		//transformPage(current, pos, next_index, next);
	}

	const moveUp = () =>{
		current = document.querySelector('section.active')
		index = current.dataset.index
		next = document.querySelector(`section[data-index='${parseInt(index) - 1}']`)
		console.log(next, index);
		let sections = document.querySelectorAll('section')
		let total = sections.length

		if (next){
			next.scrollIntoView({
				behavior: 'smooth'
			}) 
			
			addClass(next, 'active')
			removeClass(current, 'active')
		}
		else{
			/* //scroll to top
			current = document.querySelector(`section[data-index='0']`)
			current.scrollIntoView({
				behavior: 'smooth'
			})
			for (let i = 0; i < sections.length; i++){
				removeClass(sections[i], 'active')
			}
			addClass(current, 'active') */
			
		}

		let next_index = next.dataset.index;


		//transformPage(current, pos, next_index, next);
	}

	function autoscroll(event){
		let delta = event.deltaY
		console.log('delta is ' + delta);

		if (delta < 0) {
			moveUp()
		} else {
			moveDown()
		} 
	}
	

	

	onMount(async() =>{
		let sections = document.querySelectorAll('section')

		for (let i = 0; i < sections.length; i++){
			sections[i].dataset.index = i
		}
		
		
	})
	
</script>


<div class="flex flex-col scroll-smooth">
	<Header />
	<main on:wheel={e=> autoscroll(e)}>
		<slot />
	</main>

	<ContactFooter address={address} hours={hours}/>
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

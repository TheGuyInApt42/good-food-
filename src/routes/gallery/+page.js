export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
    const galleryImages = [
		{
			src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
			title: 'Curry'
		},
		{
			src: 'https://source.unsplash.com/WHtVB-RiW2I/640x416',
			title: 'Meat Satay'
		},
		{
			src: 'https://source.unsplash.com/Yr4n8O_3UPc/640x416',
			title: 'Chicken and Potatoes'
		},
		{
			src: 'https://source.unsplash.com/lP5MCM6nZ5A/640x416',
			title: 'Tacos'
		},
		{
			src: 'https://source.unsplash.com/ND3edEmzcdQ/640x416',
			title: 'Fish Curry'
		},
		{
			src: 'https://source.unsplash.com/_GM0Zvw3PzY/640x416',
			title: 'Basil & Mozzarella'
		},
		{
			src: 'https://source.unsplash.com/1H30uRC1plc/640x416',
			title: 'Inside'
		},
		{
			src: 'https://source.unsplash.com/CAhjZmVk5H4/640x416',
			title: 'Vibe'
		}
	]
    
	return {
        images: galleryImages
      };
  }

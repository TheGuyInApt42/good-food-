export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
    const galleryImages = [
		{
			src: 'https://source.unsplash.com/e6FMMambeO4/640x416',
			alt: '',
			title: 'Image Title'
		},
		{
			src: 'https://source.unsplash.com/klCiPmzUw0Y/640x416',
			alt: '',
			title: 'title'
		},
		{
			src: 'https://source.unsplash.com/IdNOTjPeHrE/640x416',
			alt: '',
			title: ''
		},
		{
			src: 'https://source.unsplash.com/O0N9MF--hK4/640x416',
			alt: '',
			title: ''
		},
		{
			src: 'https://source.unsplash.com/FV3GConVSss/640x416',
			alt: '',
			title: ''
		},
		{
			src: 'https://source.unsplash.com/0ESjL-Nw22Y/640x416',
			alt: '',
			title: ''
		},
		{
			src: 'https://source.unsplash.com/KTVn62x6fFw/640x416',
			alt: '',
			title: ''
		},
		{
			src: 'https://source.unsplash.com/VSeVhmW4_JQ/640x416',
			alt: '',
			title: ''
		}
	]
    
      return {
        images: galleryImages
      };
  }

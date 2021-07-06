// import netlify from '@sveltejs/adapter-netlify';
import begin from './adapter-begin/index.mjs';

export default {
	kit: {
		// adapter: netlify(),
		adapter: begin(),
		target: '#svelte'
	}
};

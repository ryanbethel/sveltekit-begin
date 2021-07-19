// import netlify from '@sveltejs/adapter-netlify';
import begin from './adapter-begin/index.mjs';
// import begin from '@ryanbethel/sveltekit-begin-adapter';

export default {
	kit: {
		// adapter: netlify(),
		adapter: begin(),
		target: '#svelte'
	}
};

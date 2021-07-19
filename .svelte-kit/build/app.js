import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!doctype html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"viewport\" content=\"width=device-width\">\n\t<meta name=\"theme-color\" content=\"#333333\">\n\n\t<script>\n\t\ttry {\n\t\t\tif (!('theme' in localStorage)) {\n\t\t\t\tlocalStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches\n\t\t\t\t\t? 'dark'\n\t\t\t\t\t: 'light';\n\t\t\t}\n\n\t\t\tdocument.querySelector('html').classList.add(localStorage.theme);\n\t\t} catch (e) {\n\t\t\tconsole.error(e);\n\t\t}\n\t</script>\n\n\t<link rel=\"manifest\" href=\"/manifest.json\">\n\t<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

const default_settings = { paths: {"base":"","assets":"/."} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-b95c9324.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-b95c9324.js","/./_app/chunks/vendor-43d3d372.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: /** @param {Error & {frame?: string}} error */ (error) => {
			if (error.frame) {
				console.error(error.frame);
			}
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":3210,"type":"image/png"},{"file":"logo-192.png","size":4918,"type":"image/png"},{"file":"logo-512.png","size":14047,"type":"image/png"},{"file":"manifest.json","size":352,"type":"application/json"},{"file":"robots.txt","size":25,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/item\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/item/[id].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/user\/([^/]+?)\/?$/,
						params: (m) => ({ name: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/user/[name].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/rss\/?$/,
						params: empty,
						load: () => import("../../src/routes/rss.js")
					},
		{
						type: 'endpoint',
						pattern: /^\/([^/]+?)\/rss\/?$/,
						params: (m) => ({ list: d(m[1])}),
						load: () => import("../../src/routes/[list]/rss.js")
					},
		{
						type: 'page',
						pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
						params: (m) => ({ list: d(m[1]), page: d(m[2])}),
						a: ["src/routes/__layout.svelte", "src/routes/[list]/[page].svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte"),"src/routes/item/[id].svelte": () => import("../../src/routes/item/[id].svelte"),"src/routes/user/[name].svelte": () => import("../../src/routes/user/[name].svelte"),"src/routes/[list]/[page].svelte": () => import("../../src/routes/[list]/[page].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-a9df7509.js","css":["/./_app/assets/pages/__layout.svelte-3079ad39.css"],"js":["/./_app/pages/__layout.svelte-a9df7509.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null},"src/routes/__error.svelte":{"entry":"/./_app/pages/__error.svelte-e5f8c95f.js","css":["/./_app/assets/pages/__error.svelte-e61e382f.css"],"js":["/./_app/pages/__error.svelte-e5f8c95f.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-60a79eea.js","css":[],"js":["/./_app/pages/index.svelte-60a79eea.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-274a1902.js","css":[],"js":["/./_app/pages/about.svelte-274a1902.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null},"src/routes/item/[id].svelte":{"entry":"/./_app/pages/item/[id].svelte-eef9093d.js","css":["/./_app/assets/pages/item/[id].svelte-1f013471.css"],"js":["/./_app/pages/item/[id].svelte-eef9093d.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null},"src/routes/user/[name].svelte":{"entry":"/./_app/pages/user/[name].svelte-1afe9ee0.js","css":[],"js":["/./_app/pages/user/[name].svelte-1afe9ee0.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null},"src/routes/[list]/[page].svelte":{"entry":"/./_app/pages/[list]/[page].svelte-252ef9e9.js","css":["/./_app/assets/pages/[list]/[page].svelte-c7a38061.css"],"js":["/./_app/pages/[list]/[page].svelte-252ef9e9.js","/./_app/chunks/vendor-43d3d372.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}
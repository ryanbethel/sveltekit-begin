'use strict';

import url from 'url';
import '@sveltejs/kit/install-fetch'
// import app from '@architect/shared/app.js'; // eslint-disable-line import/no-unresolved
//import app from '../output/server/app.js'; // eslint-disable-line import/no-unresolved
import { init, render } from '../output/server/app.js'; // eslint-disable-line import/no-unresolved
import arc from '@architect/functions'
import theThing from '../../proxy-test/proxy'
const { proxy }=theThing

init();
//const url = require('url')
//const app = require('@architect/shared/app.js')

// TODO: run init() on the app before handling routes
// 

async function checkStatic(req){ proxy(req, {passthru:true})}
// async function render(req) { svelteRender(req)}
exports.handler = arc.http.async(checkStatic, handler)

// export async function handler(event) {
async function handler(event) {
	const { host, rawPath: path, httpMethod, rawQueryString, headers, body } = event;
	
	// try {
	// 	console.log({path})
	// 	console.log(arc.static(path))
	// 	let staticPath = arc.static(path)
	// 	return {
	// 		statusCode: 302,
	// 		headers: {'location':staticPath}
	// 	}
	// } catch (e) {
		console.log('falling to server render')
		console.log({path})
		

	const query = new url.URLSearchParams(rawQueryString);

	const rendered = await render({
		host,
		method: httpMethod,
		headers,
		path,
		body,
		query
	});

	if (rendered) {
		return {
			isBase64Encoded: false,
			statusCode: rendered.status,
			headers: rendered.headers,
			body: rendered.body
		};
	}

	return {
		statusCode: 404,
		body: 'Not Found'
	};
}

// }


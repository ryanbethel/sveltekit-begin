'use strict';

import url from 'url';
import '@sveltejs/kit/install-fetch'
// import app from '@architect/shared/app.js'; // eslint-disable-line import/no-unresolved
//import app from '../output/server/app.js'; // eslint-disable-line import/no-unresolved
import { init, render } from '../output/server/app.js'; // eslint-disable-line import/no-unresolved

init();
//const url = require('url')
//const app = require('@architect/shared/app.js')

// TODO: run init() on the app before handling routes

async function handler(event) {
	const { host, rawPath: path, httpMethod, rawQueryString, headers, body } = event;

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

export default handler

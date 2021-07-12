import { readFileSync, existsSync } from 'fs';
import parse from '@architect/parser';
import path from 'path';
import { fileURLToPath } from 'url'
import esbuild from 'esbuild'
const { resolve, join } = path
const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @param {string} file */
function parse_arc(file) {
	if (!existsSync(file)) {
		throw new Error(`No ${file} found. See the documentation.`);
	}

	try {
		const text = readFileSync(file).toString();
		const arc = parse(text);

		return {
			static: arc.static[0][1]
		};
	} catch (e) {
		throw new Error(`Error parsing ${file}. Please consult the documentation for correct syntax.`);
	}
}

export default function () {
	/** @type {import('@sveltejs/kit').Adapter} */
	const adapter = {
		name: '@sveltejs/adapter-begin',

		async adapt({ utils }) {
			
			const files = fileURLToPath(new URL('./src', import.meta.url))
			utils.copy(join(files, 'entry.js'), '.svelte-kit/begin/entry.js');
			await esbuild.build({
				entryPoints: ['.svelte-kit/begin/entry.js'],
				outfile: join('.begin', 'render/index.js'),
				bundle: true,
				platform: 'node'
			})

			utils.log.minor('Parsing app.arc file');
			//const { static: static_mount_point } = parse_arc('app.arc');

			const lambda_directory = resolve(join('.begin','src', 'http', 'get-index'));
			const static_directory = resolve('.begin','public');
			const server_directory = resolve(join('.begin','src', 'shared'));

			utils.log.minor('Writing client application...');
			console.log(static_directory)
			utils.copy_static_files(static_directory);
			utils.copy_client_files(static_directory);

			utils.log.minor('Building lambda...');
			const local_lambda_dir = join(__dirname, 'files');
			utils.copy(local_lambda_dir, lambda_directory);

			utils.log.minor('Writing server application...');
			utils.copy_server_files(server_directory);

			utils.log.minor('Prerendering static pages...');
			await utils.prerender({
				dest: static_directory
			});
		}
	};

	return adapter;
}

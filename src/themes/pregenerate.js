import fs from 'fs';
import path from 'path';
import { themes } from './index';

const themeNames = Object.keys(themes).filter(
	theme => !['defaultTheme', 'lightTheme', 'kk'].includes(theme)
);

const prefix = 'module.exports = ';
const themeLibDir = path.join(__dirname, '..', '..', 'lib', 'themes');

themeNames.forEach((name) => {
	const indexFile = path.join(
		themeLibDir,
		name,
		'index.js'
	);
	fs.writeFileSync(indexFile, prefix + JSON.stringify(themes[name]));
	// eslint-disable-next-line no-console
	console.log(`creating a prebuild: ${indexFile}`);
});

const kkIndexFile = path.join(themeLibDir,  'kk', 'index.js');
fs.writeFileSync(kkIndexFile, `${prefix}{}`);

import fs from 'fs';
import path from 'path';
import { themes } from  './index';


const themeNames = Object.keys(themes).filter(theme => !['defaultTheme', 'lightTheme', 'kk'].includes(theme));

const prefix = 'module.exports = ';

themeNames.forEach((name) => {
	const indexFile = path.join(__dirname, '..', '..', 'lib', 'themes', name, 'index.js');
	fs.writeFileSync(indexFile, prefix +  JSON.stringify(themes[name]));
	console.log(`creating a prebuild: ${indexFile}`);
});


const kkIndexFile = path.join(__dirname, 'kk', 'index.js');
fs.writeFileSync(kkIndexFile, `${prefix}{}`);

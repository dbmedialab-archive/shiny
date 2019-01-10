import fs from 'fs';
import path from 'path';
import { themes } from './index';

const themeNames = Object.keys(themes).filter(
	theme => !['defaultTheme', 'lightTheme', 'dagbladetDark'].includes(theme)
);

const themeFolderNames = [...themeNames, 'default-theme', 'light-theme', 'dagbladet-dark'];

const prefix = 'module.exports = ';
const themeLibDir = path.join(__dirname, '..', '..', 'lib', 'themes');

themeFolderNames.forEach((folder) => {
	const indexFile = path.join(themeLibDir, folder, 'index.js');
	const themeName = getThemeName(folder);
	fs.writeFileSync(indexFile, prefix + JSON.stringify(themes[themeName]));
	// eslint-disable-next-line no-console
	console.log(`creating a prebuild: ${indexFile}`);
});

function getThemeName(folder) {
	if (folder === 'default-theme') {
		return 'defaultTheme';
	}
	if (folder === 'light-theme') {
		return 'lightTheme';
	}
	if (folder === 'dagbladet-dark') {
		return 'dagbladetDark';
	}
	return folder;
}

// kk index file is big, for performance reasons we create a fake empty index file
const kkIndexFile = path.join(themeLibDir, 'kk', 'index.js');
fs.writeFileSync(kkIndexFile, `${prefix}{}`);

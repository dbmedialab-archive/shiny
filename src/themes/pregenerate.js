import fs from 'fs';
import path from 'path';
import { themes } from './index';

const themeNames = Object.keys(themes).filter(
	theme => !['defaultTheme', 'lightTheme', 'dagbladetDark', 'elbil24Dark'].includes(theme)
);

const themeFolderNames = [...themeNames, 'default-theme', 'light-theme', 'dagbladet-dark', 'elbil24-dark'];

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
	if (folder === 'elbil24-dark') {
		return 'elbil24Dark';
	}
	return folder;
}

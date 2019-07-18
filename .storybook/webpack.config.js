module.exports = async ({ config }) => {
	config.entry.unshift('./src/utils/polyfills.js');

	// config.optimization.splitChunks.cacheGroups = {
	// 	vendors: /[\\/]node_modules[\\/]/
	// }

	// console.log('entries', config)
	return config
}

// const originalEntry = config.entry
// config.entry = async () => {
// 	const entries = await originalEntry()

// 	if (entries['main.js'] && !entries['main.js'].includes('./src/utils/polyfills.js')) {
// 		entries['main.js'].unshift('./src/utils/polyfills.js')
// 	}
// 	return entries
// }
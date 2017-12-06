const unshadeColorString = color => color
	.replace(/Dark$/, '')
	.replace(/Light$/, '')
	.replace(/Lighter$/, '');

export default unshadeColorString;
export { unshadeColorString };

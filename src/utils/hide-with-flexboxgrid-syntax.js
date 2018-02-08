/**
 * Hide a styled-component with syntax familiar to users of react-styled-flexboxgrid.
 *
 * Example usage:
 * const Foo = styled.div`
 *   ${hideWithFlexboxgridSyntax('inline-block')}
 * `
 * Foo.defaultProps = {
 *   xs: null,
 *   sm: null,
 *   md: null,
 *   lg: null,
 * }
 */
const hideWithFlexboxgridSyntax = (display) => {
	return (props) => {
		const {
			xs, sm, md, lg,
			theme: {
				flexboxgrid: {
					breakpoints: {
						xs: xsBreak, sm: smBreak, md: mdBreak, lg: lgBreak,
					},
				},
			},
		} = props;

		const acc = [];

		acc.push(`display: ${display};`);
		xs !== null && acc.push(`@media only screen and (min-width: ${xsBreak}em) { display: ${xs ? display : 'none'}}`);
		sm !== null && acc.push(`@media only screen and (min-width: ${smBreak}em) { display: ${sm ? display : 'none'}}`);
		md !== null && acc.push(`@media only screen and (min-width: ${mdBreak}em) { display: ${md ? display : 'none'}}`);
		lg !== null && acc.push(`@media only screen and (min-width: ${lgBreak}em) { display: ${lg ? display : 'none'}}`);

		return acc.join('\n');
	};
};

export { hideWithFlexboxgridSyntax };

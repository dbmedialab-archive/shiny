import { css } from 'styled-components';
import { extraSmallUp, smallUp, mediumUp, largeUp } from './media-queries';

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
 *
 * <Foo xs>
 * <Foo xs={false} md />
 */
const hideWithFlexboxgridSyntax = (display) => {
	return (props) => {
		const {
			xs, sm, md, lg,
		} = props;

		const acc = [];

		acc.push(`display: ${display};`);
		xs !== null && acc.push(css`@media ${extraSmallUp} { display: ${xs ? display : 'none'}}`);
		sm !== null && acc.push(css`@media ${smallUp}      { display: ${sm ? display : 'none'}}`);
		md !== null && acc.push(css`@media ${mediumUp}     { display: ${md ? display : 'none'}}`);
		lg !== null && acc.push(css`@media ${largeUp}      { display: ${lg ? display : 'none'}}`);

		return acc.join('\n');
	};
};

export { hideWithFlexboxgridSyntax };

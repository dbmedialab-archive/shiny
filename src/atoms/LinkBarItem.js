import styled from 'styled-components';
import propTypes from 'prop-types';

const display = 'inline-block';

const LinkBarItem = styled.li`
	position: relative;
	display: ${display};
	vertical-align: middle;
	line-height: 0;
	margin: 0;

	&:last-child {
		margin-right: calc(2 * ${props => props.theme.variables.horizontalBase});
	}

	/* This whole block deals with hiding the LinkBarItem */
	/* with syntax from react-styled-flexboxgrid */
	${(props) => {
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

		xs !== null && acc.push(`@media only screen and (min-width: ${xsBreak}em) { display: ${xs ? display : 'none'}}`);
		sm !== null && acc.push(`@media only screen and (min-width: ${smBreak}em) { display: ${sm ? display : 'none'}}`);
		md !== null && acc.push(`@media only screen and (min-width: ${mdBreak}em) { display: ${md ? display : 'none'}}`);
		lg !== null && acc.push(`@media only screen and (min-width: ${lgBreak}em) { display: ${lg ? display : 'none'}}`);

		return acc.join('\n');
	}}
	`;

LinkBarItem.propTypes = {
	xs: propTypes.bool,
	sm: propTypes.bool,
	md: propTypes.bool,
	lg: propTypes.bool,
};

LinkBarItem.defaultProps = {
	xs: null,
	sm: null,
	md: null,
	lg: null,
};

export { LinkBarItem };

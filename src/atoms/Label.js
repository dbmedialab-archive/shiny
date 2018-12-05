import styled from '@emotion/styled';
import propTypes from 'prop-types';

import { getColor, getVariable } from '../utils';

const Label = styled.span`
	background-color: ${props => getColor(props.backgroundColor)};
	color: ${props => getColor(props.textColor)};
	display: inline-block;
	font-family: ${getVariable('headingsFont')};
	font-size: 1.1rem;
	font-weight: 300;
	letter-spacing: .1rem;
	line-height: 1;
	margin-bottom: auto;
	margin-right: .1rem;
	padding: 0.25rem 0.5rem 0.25rem;
	position: relative;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	white-space: nowrap;
`;
Label.propTypes = {
	backgroundColor: propTypes.string,
	backgroundHoverShade: propTypes.oneOf(['', 'dark', 'light', 'lighter']),
	textColor: propTypes.string,
};
Label.defaultProps = {
	backgroundColor: 'primary',
	backgroundHoverShade: 'dark',
	textColor: 'white',
};

export { Label };

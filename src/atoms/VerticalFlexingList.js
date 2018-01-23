import styled from 'styled-components';
import { LinkBarDropdown } from './LinkBarDropdown';

// Originally written for the VerticalLinkBar molecule
const VerticalFlexingList = styled.ul`
	display: inline-block;
	margin: 0;
	padding: 0;
	font-family: ${props => props.theme.variables.mainFont};
	background: ${props => props.background};
	position: relative;

	${LinkBarDropdown} + * & {
		display: ${props => (props.hide ? 'none' : 'flex')};
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		box-shadow: 0 0 4rem 0 rgba(0,0,0,.15);

		::before {
			content: '';
			display: block;
			width: ${props => props.theme.variables.verticalBase};
			height: ${props => props.theme.variables.verticalBase};
			background: ${props => props.background};
			position: absolute;
			left: calc(1/4 * ${props => props.theme.variables.verticalBase});
			transform: rotate(45deg);
		}
	}
`;

export { VerticalFlexingList };

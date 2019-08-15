import styled from 'styled-components';
import { getVariable, getColor } from '../utils';

// z-index: 1 - for overlaying over elements with same z-index
export const CarouselButton = styled.button`
	-webkit-tap-highlight-color: transparent;
	border: none;
	outline: none;
	z-index: 1;
	position: absolute;
	${(props) => {
		const buttonLength = `calc(${getVariable('uiRegularSize')(props)} * 2)`;

		if (props.vertical) {
			return `
				top: ${props.next ? 'auto' : '0'};
				bottom: ${props.next ? '0' : 'auto'};
				height: ${buttonLength};
				width: 100%;
			`;
		}
		return `
			top: 0;
			left: ${props.next ? 'auto' : '0'};
			right: ${props.next ? '0' : 'auto'};
			height: 100%;
			width: ${buttonLength};
		`;
	}}
	background-color: ${getColor('transparent')};
	display: ${props => (props.hide ? 'none' : 'flex')};
	align-items: center;
	justify-content: center;
	cursor: pointer;
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}rem) {
		background-color: ${getColor('background')};
	}

	span {
		font-size: ${getVariable('uiLargeSize')};
		transform: ${props => (props.vertical ? 'rotate(90deg)' : '')};
		color: ${getColor('white')};
		text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.6);
		margin-top: ${props => (props.vertical ? '0' : props.horizontalArrowOffset)};
	}
`;

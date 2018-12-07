import styled from '@emotion/styled';
import { getVariable, getColor } from '../../utils';

export const CarouselButton = styled.button`
	-webkit-tap-highlight-color: transparent;
	border: none;
	outline: none;
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
	background-color: rgba(255, 255, 255, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	span {
		font-size: ${getVariable('uiLargeSize')};
		transform: ${props => (props.vertical ? 'rotate(90deg)' : '')};
		color: ${getColor('white')};
		text-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.6);
		margin-top: ${props => (props.vertical ? '0' : props.horizontalArrowOffset)};
	}
`;

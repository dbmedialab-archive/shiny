import styled from '@emotion/styled';
import { getVariable, getColor } from '../../utils';

export const CarouselButton = styled.button`
	-webkit-tap-highlight-color: transparent;
	border: none;
	outline: none;
	position: absolute;
	top: ${props => (props.next && props.vertical ? 'auto' : '0')};
	bottom: ${props => (props.next || !props.vertical ? '0' : 'auto')};
	left: ${props => (props.next || props.vertical ? 'auto' : '0')};
	right: ${props => (props.next && !props.vertical ? '0' : 'auto')};
	width: ${props => (props.vertical ? '100%' : `calc(${getVariable('uiRegularSize')(props)} * 2)`)};
	height: ${props => (props.vertical ? `calc(${getVariable('uiRegularSize')(props)} * 2)` : '100%')};
	background-color: rgba(255, 255, 255, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	span {
		font-size: 2rem;
		transform: ${props => (props.vertical ? 'rotate(90deg)' : '')};
		color: ${getColor('white')};
		text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
		margin-top: ${props => (props.vertical ? '0' : '-6rem')};
	}
`;

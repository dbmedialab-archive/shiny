import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { getVariable, getColor } from '../../utils';
import { Col } from '../../atoms/Col';


const CarouselButton = styled.button`
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

const CarouselSection = styled.section`
	width: 100%;
	position: relative;
	overflow: hidden;
	height: ${props => (props.vertical ? props.verticalHeight : '')};
	article {
		margin: 0;
	}
`;

const CarouselSlotList = styled.div`
	${(props) => {
		const base = css`
			width: 100%;
			display: flex;
			scroll-behavior: ${props.pageIsTurning ? 'smooth' : 'auto'};
			-ms-overflow-style: none;

			&::-webkit-scrollbar {
				display: none;
			}

			* {
				user-select: none;
				-webkit-app-region: no-drag;
				-webkit-user-drag: none;
				cursor: pointer;
				outline: none;
			}

			img {
				pointer-events: none;
			}
		`;

		let directional;

		if (props.vertical) {
			directional = css`
				height: 100%;
				top: 0;
				overflow-y: auto;
				position: absolute;
				flex-direction: column;
				display: flex;
				height: 100%;
			`;
		} else {
			directional = css`
				overflow-x: auto;
				white-space: nowrap;
				flex-wrap: nowrap;
			`;
		}

		return css`
			${base};
			${directional};
		`;
	}}
`;

const CarouselSlot = styled(Col)`
	${(props) => {
		if (!props.vertical) {
			return css`
				padding: 0 0.25rem;

				&:first-child {
					padding-left: 0;
				}
			
				&:last-child {
					padding-right: 0;
				}
			`;
		}

		return css`
			padding: 0;
		`;
	}}
	
`;

export {
	CarouselButton,
	CarouselSection,
	CarouselSlotList,
	CarouselSlot,
};

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SmallHeading } from '../../atoms/Heading';
import { getVariable } from '../../utils';

const CarouselContainer = styled.div`
	${(props) => {
		const base = css`
			& .carousel-slot-list {
				display: flex;
				scroll-behavior: ${props.pageIsTurning ? 'smooth' : 'auto'};
				-ms-overflow-style: none;

				&::-webkit-scrollbar {
					display: none;
				}

				& * {
					user-select: none;
					-webkit-app-region: no-drag;
					-webkit-user-drag: none;
					cursor: pointer;
					outline: none;
				}
	
				& img {
					pointer-events: none;
				}
	
				& h1 {
					margin-top: 0.5rem;
					font-size: 1.5rem;
					line-height: 1.2;
				}
			}
		`;

		if (!props.vertical) {
			return css`
				& .carousel-slot-list {
					margin: 0 0 2rem 0;
					overflow-x: auto;
					white-space: nowrap;
					display: flex;
					flex-wrap: nowrap;
					scroll-behavior: ${props.pageIsTurning ? 'smooth' : 'auto'};
					-ms-overflow-style: none;

					&::-webkit-scrollbar {
						display: none;
					}
				}

				& * {
					user-select: none;
					-webkit-app-region: no-drag;
					-webkit-user-drag: none;
					cursor: pointer;
					outline: none;
				}

				& img {
					pointer-events: none;
				}

				& h1 {
					margin-top: 1.5rem;
					font-size: 1.5rem;
					line-height: 1.2;
				}
			`;
		}
		return css`
			& {
				height: 100%;

				& > div {
					display: flex;
					height: 100%;
				}
			}
			& .carousel-slot-list {
				height: 100%;
				top: 0;
				overflow-y: auto;
				display: flex;
				position: absolute;
				flex-direction: column;
				scroll-behavior: ${props.pageIsTurning ? 'smooth' : 'auto'};
				-ms-overflow-style: none;

				&::-webkit-scrollbar {
					display: none;
				}
			}

			& * {
				user-select: none;
				-webkit-app-region: no-drag;
				-webkit-user-drag: none;
				cursor: pointer;
				outline: none;
			}

			& img {
				pointer-events: none;
			}

			& h1 {
				margin-top: 0.5rem;
				font-size: 1.5rem;
				line-height: 1.2;
			}
		`;
	}};
`;

const CarouselHeading = styled(SmallHeading)`
	${(props) => {
		if (props.vertical) {
			return css`
				@media screen and (min-width: 768px) {
					& {
						background: red;
						color: white;
						display: flex;
						justify-content: center;
						padding: 0.5rem;
						font-size: 1.45rem;
						margin: 0;
						margin-bottom: 1rem;
					}
				}
			`;
		}

		return css``;
	}};
`;

const CarouselButton = styled.div`
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	position: absolute;
	top: ${props => (props.next && props.vertical ? 'auto' : '0')};
	bottom: ${props => (props.next || !props.vertical ? '0' : 'auto')};
	left: ${props => (props.next || props.vertical ? 'auto' : '0')};
	right: ${props => (props.next && !props.vertical ? '0' : 'auto')};
	width: ${props => (props.vertical ? '100%' : '3rem')};
	height: ${props => (props.vertical ? '3rem' : '100%')};
	background-color: rgba(255, 255, 255, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	span {
		font-size: 2rem;
		transform: ${props => (props.vertical ? 'rotate(90deg)' : '')};
		color: #fff;
		text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
		margin-top: ${props => (props.vertical ? '0' : '-7rem')};
	}
`;

const Wrapper = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	height: ${props => (props.vertical ? '64rem' : '')};
	article {
		margin: 0;
	}
	h1 {
		font-size: 1.4rem;
		margin: 0 0 0 0.2rem;
		display: -webkit-box;
		max-height: 6.2rem;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		-webkit-line-clamp: 2;
		text-transform: uppercase;
		@media screen and (min-width: ${getVariable('largeWidth')}) {
			font-size: 1.8rem;
		}
	}
`;

const CarouselSlot = styled.div`
	flex: 0;
	flex-shrink: 0;
	flex-basis: ${props => (props.vertical ? '17rem' : '25rem')};
	margin-right: ${props => (props.vertical ? '0' : '0.5rem')};
`;

export {
	CarouselContainer,
	CarouselButton,
	Wrapper,
	CarouselSlot,
	CarouselHeading,
};

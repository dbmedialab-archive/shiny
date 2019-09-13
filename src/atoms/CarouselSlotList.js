import styled from 'styled-components';
import { css } from 'styled-components';

export const CarouselSlotList = styled.div`
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

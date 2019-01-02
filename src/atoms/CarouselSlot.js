import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Col } from './Col';
import { getVariable } from '../utils/get-variable';

export const CarouselSlot = styled(Col)`
	${(props) => {
		const base = css`
			padding: 0;

			&:last-child {
				margin: 0;
			}
		`;

		const directional = (!props.vertical)
			? css`
				margin-right: calc(1/2 * ${getVariable('horizontalBase')(props)});
			` : css`
				margin-bottom: calc(1/2 * ${getVariable('verticalBase')(props)});
			`;

		return css`
			${base};
			${directional};
		`;
	}}

`;

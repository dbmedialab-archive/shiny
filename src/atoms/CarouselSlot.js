import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Col } from './Col';
import { getVariable } from '../utils/get-variable';

export const CarouselSlot = styled(Col)`
	${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const verticalBase = getVariable('verticalBase')(props);

		const marginRight = (!props.vertical) ? `calc(1/2 * ${horizontalBase})` : '0';
		const marginBottom = (props.vertical) ? `calc(1/2 * ${verticalBase})` : '0';

		return css`
			margin-right: ${marginRight};
			margin-bottom: ${marginBottom};
			padding: 0;

			&:last-child {
				margin: 0;
			}
		`;
	}}
`;

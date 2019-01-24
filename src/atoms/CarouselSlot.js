import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Col } from './Col';
import { getVariable } from '../utils/get-variable';

export const CarouselSlot = styled(Col)`
	${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const marginRight = (!props.vertical) ? `calc(1/2 * ${horizontalBase})` : '0';

		return css`
			margin-right: ${marginRight};
			padding: 0;
			&& > * {
				margin-bottom: 0;
			}

			&:last-child {
				margin: 0;
			}
		`;
	}}
`;

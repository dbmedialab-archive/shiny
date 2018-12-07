import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Col } from '../Col';

export const CarouselSlot = styled(Col)`
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

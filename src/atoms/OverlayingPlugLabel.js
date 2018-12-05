import styled from '@emotion/styled';
import { getVariable } from '../utils';

import { Label } from './Label';

const OverlayingPlugLabel = styled(Label)`
	&& {
		display: inline-block;
		margin: 0 calc(1/2 * ${getVariable('horizontalBase')});
		padding: calc(1/8 * ${getVariable('verticalBase')}) ${getVariable('horizontalBase')};
		font-size: ${getVariable('uiSmallSize')};
		line-height: ${getVariable('uiSmallLineHeight')};
		font-weight: ${getVariable('uiWeightSemiBold')};

		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`;

export { OverlayingPlugLabel };

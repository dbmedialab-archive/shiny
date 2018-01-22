import styled from 'styled-components';

import { HorizontalLinkBar } from './HorizontalLinkBar';

const FullWidthLinkBar = styled(HorizontalLinkBar)`
	position: ${props => (props.fixed && 'fixed') || 'absolute'};
	width: 100%;
	top: 0;
	left: 0;
`;

export { FullWidthLinkBar };

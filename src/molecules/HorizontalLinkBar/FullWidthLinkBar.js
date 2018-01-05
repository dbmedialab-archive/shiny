import { HorizontalLinkBar } from './HorizontalLinkBar';

const FullWidthLinkBar = HorizontalLinkBar.extend`
	position: ${props => (props.fixed && 'fixed') || 'absolute'};
	width: 100%;
	top: 0;
	left: 0;
`;

export { FullWidthLinkBar };

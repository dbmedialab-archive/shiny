import { DontPushTheAdBoundaries } from '../..';

const DesktopWidthConstrainer = DontPushTheAdBoundaries.extend`
	&& {
		padding-top: 0;
		background: transparent;
		align-items: center;
		z-index: ${props => props.zIndex};
		overflow: ${props => (props.shouldUseScrollArrows? 'hidden' : 'visible')};
	}
`;

export { DesktopWidthConstrainer };

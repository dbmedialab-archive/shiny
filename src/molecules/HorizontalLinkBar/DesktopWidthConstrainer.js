import { DontPushTheAdBoundaries } from '../../atoms/DontPushTheAdBoundaries';

const DesktopWidthConstrainer = DontPushTheAdBoundaries.extend`
	&& {
		padding-top: 0;
		background: transparent;
		align-items: center;
		z-index: ${props => props.zIndex};
		overflow: hidden;
	}
`;

export { DesktopWidthConstrainer };

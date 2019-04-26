import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { getColor, getVariable } from '../utils';

const getBackgroundColor = ({ backgroundColor }) => getColor(backgroundColor);
const MenuLayer = styled.div`
	&& {
		display: block;
		margin: 0;
		padding: 0;
		font-family: ${getVariable('mainFont')};
		background: ${getBackgroundColor};
		position: fixed;
		left: ${({ left }) => left};
		right: ${({ right }) => right};
		top: ${({ top }) => top};
		bottom: ${({ bottom }) => bottom};
		box-shadow: 0 3.5rem 5rem 0 rgba(0, 0, 0, 0.4);
		width: ${({ width }) => width};
		justify-content: space-between;
		animation: fadeSlideDown 0.2s;
		@keyframes fadeSlideDown {
			0% {
				display: block;
				opacity: 0;
				transform: translateY(1rem);
			}
			10% {
				opacity: 0.25;
			}
			100% {
				opacity: 1;
			}
		}
	}
`;

MenuLayer.propTypes = {
	/** Color name from theme, default "primary" */
	backgroundColor: PropTypes.string,
	/** Width of layer, can be set in px, em, rem, %, "auto" */
	width: PropTypes.string,
	/** equal to css rule "left" */
	left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** equal to css rule "right" */
	right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** equal to css rule "top" */
	top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** equal to css rule "bottom" */
	bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuLayer.defaultProps = {
	backgroundColor: 'primary',
	width: '100%',
	left: 'inherit',
	right: 'inherit',
	top: 'inherit',
	bottom: 'inherit',
};

export { MenuLayer };

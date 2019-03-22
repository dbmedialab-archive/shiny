import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { getColor, getVariable } from '../utils';

const getBackgroundColor = ({ backgroundColor }) => getColor(backgroundColor);
const MenuLayer = styled.div`
	display: block;
	margin: 0;
	padding: 0;
	font-family: ${getVariable('mainFont')};
	background: ${getBackgroundColor};
	position: fixed;
	left: ${({ left }) => left || 0};
	right: ${({ right }) => right || 'inherit'};
	top: ${({ top }) => top || 'inherit'};
	bottom: ${({ bottom }) => bottom || 'inherit'};
	box-shadow: 0 2rem 2rem 0 rgba(0, 0, 0, 0.15);
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
`;

MenuLayer.propTypes = {
	/** Color name from theme, default "primary" */
	backgroundColor: PropTypes.string,
	/** Width of layer, can be set in px, em, rem, %, "auto" */
	width: PropTypes.string,
	/** equal to css rule "left" */
	left: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	/** equal to css rule "right" */
	right: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	/** equal to css rule "top" */
	top: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
	/** equal to css rule "bottom" */
	bottom: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

MenuLayer.defaultProps = {
	backgroundColor: 'primary',
	width: '100%',
	left: 0,
	right: 'inherit',
	top: 'inherit',
	bottom: 'inherit',
};

export { MenuLayer };

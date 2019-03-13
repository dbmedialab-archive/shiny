import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { getColor, getVariable } from '../utils';

const getBackgroundColor = ({ backgroundColor }) => (backgroundColor ? getColor(backgroundColor) : getColor('primary'));
const MenuLayer = styled.div`
	display: block;
	margin: 0;
	padding: 0;
	font-family: ${getVariable('mainFont')};
	background: ${getBackgroundColor};
	position: fixed;
	left: 0;
	box-shadow: 0 2rem 2rem 0 rgba(0, 0, 0, 0.15);
	width: ${({ width }) => (width ? width : '100%')};
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
	backgroundColor: PropTypes.string, // Color name from theme,
	width: PropTypes.string,
};
MenuLayer.defaultProps = {
	backgroundColor: null,
};

export { MenuLayer };

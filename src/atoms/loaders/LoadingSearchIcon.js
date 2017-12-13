import styled, { keyframes } from 'styled-components';
import propTypes from 'prop-types';

const transition = keyframes`
	from {
		transform: rotate( 0deg );
	}

	to {
		transform: rotate( 360deg );
	}
`;

const LoadingSearchIcon = styled.div`
	display: inline-block;
	position: relative;
	left: -.03em;
	width: .5em;
	height: .5em;
	border: .08em solid $cssIconSearchColor;
	border-radius: .35em;
	font-size: 3.6rem; // This controls the size.
	border: .3rem solid transparent;
	border-top-color: ${props => (props.color ? props.color : props.theme.colors.primary)};
	animation-name: ${transition};
	animation-duration: 1000ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

LoadingSearchIcon.defaultProps = {
	color: '',
};

LoadingSearchIcon.propTypes = {
	color: propTypes.string,
};

export { LoadingSearchIcon };

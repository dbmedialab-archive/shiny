import styled from 'styled-components';
import PropTypes from 'prop-types';

// Utils
import { unshadeColorString } from '../utils/unshade-color-string';

// Atoms
import { BlockLink } from '../atoms/BlockLink';

const BlockLinkWithBackground = styled(BlockLink)`
	flex: 1;
	margin:
		0
		calc(1/2 * ${props => props.theme.variables.horizontalBase})
		${props => props.theme.variables.verticalBase}
	;
	padding: calc(1/2 * ${props => props.theme.variables.horizontalBase});
	border-bottom: .2rem solid ${props => props.theme.colors[
		unshadeColorString(props.background) + props.borderShade
	]};
	border-radius: .4rem;
	background-color: ${props => props.theme.colors[props.background]};
`;
BlockLinkWithBackground.propTypes = {
	theme: PropTypes.shape({
		background: PropTypes.string.isRequired,
		borderShade: PropTypes.oneOf(['', 'Dark', 'Light', 'Lighter']),
		colors: PropTypes.shape(),
		variables: PropTypes.shape({
			verticalBase: PropTypes.string,
			horizontalBase: PropTypes.string,
		}),
	}),
};

export { BlockLinkWithBackground };

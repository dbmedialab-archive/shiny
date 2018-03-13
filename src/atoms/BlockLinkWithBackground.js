import PropTypes from 'prop-types';

// Utils
import { getColor, getVariable } from '../utils';

// Atoms
import { BlockLink } from '../atoms/BlockLink';

const BlockLinkWithBackground = BlockLink.extend`
	flex: 1;
	margin:
		0
		calc(1/2 * ${getVariable('horizontalBase')})
		${getVariable('verticalBase')}
	;
	padding: calc(1/2 * ${getVariable('horizontalBase')});
	border-bottom: .2rem solid ${props => getColor(props.background, props.borderShade)};
	border-radius: .4rem;
	background-color: ${props => getColor(props.background)};
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

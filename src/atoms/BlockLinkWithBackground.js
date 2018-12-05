import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// Utils
import { getColor, getVariable } from '../utils';

// Atoms
import { BlockLink } from './BlockLink';

const BlockLinkWithBackground = styled(BlockLink)`
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
		borderShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
		colors: PropTypes.shape(),
		variables: PropTypes.shape({
			verticalBase: PropTypes.string,
			horizontalBase: PropTypes.string,
		}),
	}),
};

export { BlockLinkWithBackground };

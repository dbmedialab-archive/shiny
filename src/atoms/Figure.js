import styled from 'react-emotion';
import PropTypes from 'prop-types';

/**
 * A plain Figure element.
 */
const Figure = styled.figure`
	margin: 0;
	padding-bottom: ${props => props.paddingBottom};
	width: ${props => props.width};
	position: relative;
	overflow: visible;

	${props => props.float && `
		float: ${props.float};
	`}

	${props => props.float === 'left' && `
		margin-right: ${props => props.theme.variables.horizontalBase};
	`}

	${props => props.float === 'right' && `
		margin-left: ${props => props.theme.variables.horizontalBase};
	`}
`;
Figure.propTypes = {
	float: PropTypes.oneOf(['', 'left', 'right']),
	paddingBottom: PropTypes.string,
	width: PropTypes.string,
};
Figure.defaultProps = {
	float: '',
	paddingBottom: '0',
	width: 'auto',
};

export { Figure };

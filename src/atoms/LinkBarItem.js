import styled from 'styled-components';
import propTypes from 'prop-types';
import { hideWithFlexboxgridSyntax } from '../utils/hide-with-flexboxgrid-syntax';

const LinkBarItem = styled.li`
	position: relative;
	vertical-align: middle;
	line-height: 0;
	margin: 0;
	flex: ${props => (props.flex)};
	z-index: 8;

	/* This whole block deals with hiding the LinkBarItem */
	/* with syntax from react-styled-flexboxgrid */
	${hideWithFlexboxgridSyntax('inline-block')}
	`;

LinkBarItem.propTypes = {
	xs: propTypes.bool,
	sm: propTypes.bool,
	md: propTypes.bool,
	lg: propTypes.bool,
	flex: propTypes.string,
};

LinkBarItem.defaultProps = {
	xs: null,
	sm: null,
	md: null,
	lg: null,
	flex: '0 0 auto',
};

export { LinkBarItem };

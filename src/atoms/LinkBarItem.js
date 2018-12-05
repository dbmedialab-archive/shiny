import styled from '@emotion/styled';
import propTypes from 'prop-types';
import { hideWithFlexboxgridSyntax } from '../utils/hide-with-flexboxgrid-syntax';

const LinkBarItem = styled.li`
	position: ${props => (props.position)};
	vertical-align: middle;
	line-height: 0;
	margin: 0;
	flex: ${props => props.flex};
	z-index: ${props => props.zIndex};

	/* This whole block deals with hiding the LinkBarItem */
	/* with syntax from react-emotion-flexboxgrid */
	${hideWithFlexboxgridSyntax('inline-block')}
	`;

LinkBarItem.propTypes = {
	xs: propTypes.bool,
	sm: propTypes.bool,
	md: propTypes.bool,
	lg: propTypes.bool,
	flex: propTypes.string,
	position: propTypes.string,
	zIndex: propTypes.number,
};

LinkBarItem.defaultProps = {
	xs: null,
	sm: null,
	md: null,
	lg: null,
	flex: '0 0 auto',
	position: 'relative',
	zIndex: 8,
};

export { LinkBarItem };

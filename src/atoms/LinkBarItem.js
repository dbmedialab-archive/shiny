import styled from '@emotion/styled';
import PropTypes from 'prop-types';
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
	xs: PropTypes.bool,
	sm: PropTypes.bool,
	md: PropTypes.bool,
	lg: PropTypes.bool,
	flex: PropTypes.string,
	position: PropTypes.string,
	zIndex: PropTypes.number,
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

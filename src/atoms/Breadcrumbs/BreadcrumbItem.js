import React from 'react';
import styled from 'react-emotion';
import propTypes from 'prop-types';
import { hideWithFlexboxgridSyntax } from '../../utils/hide-with-flexboxgrid-syntax';

const BreadcrumbItem = styled.li`
	${(props) => {
		if (!props.preventSeparator) {
			return `
                :before {
                    content: "${props.before.content}";
                    color: ${props.before.color};
				}
        	`;
		}
		return '';
	}}
	position: ${props => (props.position)};
	vertical-align: middle;
	line-height: 0;
	margin: 0;
	flex: ${props => (props.flex)};
	z-index: 8;
	padding: 5px 0;
	/* This whole block deals with hiding the BreadcrumbItem */
	/* with syntax from react-emotion-flexboxgrid */
	${hideWithFlexboxgridSyntax('inline-block')}
	`;

BreadcrumbItem.propTypes = {
	xs: propTypes.bool,
	sm: propTypes.bool,
	md: propTypes.bool,
	lg: propTypes.bool,
	flex: propTypes.string,
	position: propTypes.string,
};

BreadcrumbItem.defaultProps = {
	xs: null,
	sm: null,
	md: null,
	lg: null,
	flex: '0 0 auto',
	position: 'relative',
};


export const XSmallLinkBarLink = props => <BreadcrumbItem size="xsmall" {...props} />;
export const SmallLinkBarLink = props => <BreadcrumbItem size="small" {...props} />;
export { BreadcrumbItem };
export const LargeLinkBarLink = props => <BreadcrumbItem size="large" {...props} />;

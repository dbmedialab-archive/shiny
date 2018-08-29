import React from 'react';
import styled from 'react-emotion';

import { LinkBarItem } from '../LinkBarItem';

const BreadcrumbItem = styled(LinkBarItem)`
    ${(props) => {
		if (!props.preventSeparator) {
			return `
                :before {
                    content: ${props.content};
                    color: ${props.color};
                }
        	`;
		}
		return '';
	}}
`;

export const XSmallLinkBarLink = props => <BreadcrumbItem size="xsmall" {...props} />;
export const SmallLinkBarLink = props => <BreadcrumbItem size="small" {...props} />;
export { BreadcrumbItem };
export const LargeLinkBarLink = props => <BreadcrumbItem size="large" {...props} />;

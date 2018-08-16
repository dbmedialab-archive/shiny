import React from 'react';
import propTypes from 'prop-types';

import { LinkBarLinkBase } from './LinkBarLinkBase';

const LinkBarLink = ({
	children,
	linkText,
	url,
	...rest
}) => {
	return (
		<LinkBarLinkBase
			href={url}
			skin={linkText.toLowerCase()}
			{...rest}
		>{children || linkText}
		</LinkBarLinkBase>
	);
};

LinkBarLink.propTypes = {
	isActive: propTypes.bool,
	linkText: propTypes.string,
	children: propTypes.node,
	activeBackground: propTypes.string,
	size: propTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	url: propTypes.string,
	useUnderline: propTypes.bool,
};

LinkBarLink.defaultProps = {
	children: null,
	isActive: false,
	linkText: 'Manglende lenketekst',
	activeBackground: 'transparent',
	size: 'medium',
	url: '#',
	useUnderline: true,
};

export const XSmallLinkBarLink = props => <LinkBarLink size="xsmall" {...props} />;
export const SmallLinkBarLink = props => <LinkBarLink size="small" {...props} />;
export { LinkBarLink };
export const LargeLinkBarLink = props => <LinkBarLink size="large" {...props} />;

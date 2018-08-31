import React from 'react';
import propTypes from 'prop-types';

import { BreadcrumbItemBase } from './BreadcrumbItemBase';

const BreadcrumbLink = ({
	children,
	linkText,
	url,
	...rest
}) => {
	return (
		<BreadcrumbItemBase
			href={url}
			skin={linkText.toLowerCase()}
			{...rest}
		>{children || linkText}
		</BreadcrumbItemBase>
	);
};

BreadcrumbLink.propTypes = {
	isActive: propTypes.bool,
	linkText: propTypes.string,
	children: propTypes.node,
	size: propTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	url: propTypes.string,
	useUnderline: propTypes.bool,
};

BreadcrumbLink.defaultProps = {
	children: null,
	isActive: false,
	linkText: 'Manglende lenketekst',
	size: 'medium',
	url: '#',
	useUnderline: true,
};

export const XSmallLinkBarLink = props => <BreadcrumbLink size="xsmall" {...props} />;
export const SmallLinkBarLink = props => <BreadcrumbLink size="small" {...props} />;
export { BreadcrumbLink };
export const LargeLinkBarLink = props => <BreadcrumbLink size="large" {...props} />;

import React from 'react';
import PropTypes from 'prop-types';

import { LinkBarButtonBase } from './LinkBarButtonBase';

const LinkBarButton = ({ children, ...rest }) => {
	return (
		<LinkBarButtonBase
			{...rest}
		>
			{children}
		</LinkBarButtonBase>
	);
};

LinkBarButton.propTypes = {
	isActive: PropTypes.bool,
	children: PropTypes.node.isRequired,
	activeBackground: PropTypes.string, // Deprecated actual css color string
	activeBackgroundColor: PropTypes.string, // Color name from theme
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	useUnderline: PropTypes.bool,
};

LinkBarButton.defaultProps = {
	isActive: false,
	activeBackground: 'transparent', // Deprecated actual css color string
	activeBackgroundColor: null, // Color name from theme
	size: 'medium',
	useUnderline: true,
};

export const XSmallLinkBarButton = props => <LinkBarButton size="xsmall" {...props} />;
export const SmallLinkBarButton = props => <LinkBarButton size="small" {...props} />;
export { LinkBarButton };
export const LargeLinkBarButton = props => <LinkBarButton size="large" {...props} />;

XSmallLinkBarButton.displayName = 'XSmallLinkBarButton';
SmallLinkBarButton.displayName = 'SmallLinkBarButton';
LinkBarButton.displayName = 'LinkBarButton';
LargeLinkBarButton.displayName = 'LargeLinkBarButton';

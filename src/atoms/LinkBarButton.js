import React from 'react';
import propTypes from 'prop-types';

import { LinkBarButtonBase } from '..';

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
	isActive: propTypes.bool,
	children: propTypes.node.isRequired,
	activeBackground: propTypes.string,
	size: propTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	useUnderline: propTypes.bool,
};

LinkBarButton.defaultProps = {
	isActive: false,
	activeBackground: 'transparent',
	size: 'medium',
	useUnderline: true,
};

export const XSmallLinkBarButton = props => <LinkBarButton size="xsmall" {...props} />;
export const SmallLinkBarButton = props => <LinkBarButton size="small" {...props} />;
export { LinkBarButton };
export const LargeLinkBarButton = props => <LinkBarButton size="large" {...props} />;

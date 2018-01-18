import React from 'react';
import propTypes from 'prop-types';

import { LinkBarButtonBase } from '../..';

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
	size: propTypes.oneOf(['small', 'large']),
	useUnderline: propTypes.bool,
};

LinkBarButton.defaultProps = {
	isActive: false,
	activeBackground: 'transparent',
	size: 'large',
	useUnderline: true,
};

export const SmallLinkBarButton = props => <LinkBarButton size="small" {...props} />;
export { LinkBarButton };

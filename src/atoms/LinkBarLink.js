import React from 'react';
import PropTypes from 'prop-types';

import { LinkBarElementBase } from './LinkBarElementBase';

const LinkBarLink = ({
	children,
	linkText,
	url,
	...rest
}) => {
	return (
		<LinkBarElementBase
			href={url}
			skin={linkText.toLowerCase()}
			{...rest}
		>{children || linkText}
		</LinkBarElementBase>
	);
};

LinkBarLink.propTypes = {
	/** Flag a selected or otherwise active link item. */
	isActive: PropTypes.bool,
	/** Text to display in the link. Can be overriden with the _children_ prop. */
	linkText: PropTypes.string,
	/** Will override linkText if it is specified. */
	children: PropTypes.node,
	/** Deprecated actual css color string. Use activeBackgroundColor instead. */
	activeBackground: PropTypes.string,
	/** Color name from theme. Color of the background on links that have the isActive flag set. */
	activeBackgroundColor: PropTypes.string,
	/** _LinkBarLink_ comes in different sizes, matching other _LinkBar*_ item sizes.
	 * For instance: A _SmallLinkBarLink_ and a _SmallLinkBarButton_ will have
	 * the same height and horizontal spacing.
	 */
	size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	/** Where the user will be sent if they follow the link. */
	url: PropTypes.string,
	/** Flag to display fancy underline animation on hover */
	useUnderline: PropTypes.bool,
};

LinkBarLink.defaultProps = {
	children: null,
	isActive: false,
	linkText: 'Manglende lenketekst',
	activeBackground: 'transparent', // Deprecated actual css color string
	activeBackgroundColor: null, // Color name from theme
	size: 'medium',
	url: '#',
	useUnderline: true,
};

export const XSmallLinkBarLink = props => <LinkBarLink size="xsmall" {...props} />;
export const SmallLinkBarLink = props => <LinkBarLink size="small" {...props} />;
export { LinkBarLink };
export const LargeLinkBarLink = props => <LinkBarLink size="large" {...props} />;

XSmallLinkBarLink.displayName = 'XSmallLinkBarLink';
SmallLinkBarLink.displayName = 'SmallLinkBarLink';
LinkBarLink.displayName = 'LinkBarLink';
LargeLinkBarLink.displayName = 'LargeLinkBarLink';

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
	/** Flag a selected or otherwise active link item. */
	isActive: propTypes.bool,
	/** Text to display in the link. Can be overriden with the _children_ prop. */
	linkText: propTypes.string,
	/** Will override linkText if it is specified. */
	children: propTypes.node,
	/** Deprecated actual css color string. Use activeBackgroundColor instead. */
	activeBackground: propTypes.string,
	/** Color name from theme. Color of the background on links that have the isActive flag set. */
	activeBackgroundColor: propTypes.string,
	/** _LinkBarLink_ comes in different sizes, matching other _LinkBar*_ item sizes.
	 * For instance: A _SmallLinkBarLink_ and a _SmallLinkBarButton_ will have
	 * the same height and horizontal spacing.
	 */
	size: propTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
	/** Where the user will be sent if they follow the link. */
	url: propTypes.string,
	/** Flag to display fancy underline animation on hover */
	useUnderline: propTypes.bool,
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

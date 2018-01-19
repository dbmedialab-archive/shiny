import React from 'react';
import propTypes from 'prop-types';

import { LinkBarLinkBase } from '..';

const LinkBarLink = ({ linkText, url, ...rest }) => {
	return (
		<LinkBarLinkBase
			href={url}
			skin={linkText.toLowerCase()}
			{...rest}
		>{linkText}
		</LinkBarLinkBase>
	);
};

LinkBarLink.propTypes = {
	isActive: propTypes.bool,
	linkText: propTypes.string,
	activeBackground: propTypes.string,
	size: propTypes.oneOf(['small', 'large']),
	url: propTypes.string,
	useUnderline: propTypes.bool,
};

LinkBarLink.defaultProps = {
	isActive: false,
	linkText: 'Manglende lenketekst',
	activeBackground: 'transparent',
	size: 'large',
	url: '#',
	useUnderline: true,
};

export { LinkBarLink };

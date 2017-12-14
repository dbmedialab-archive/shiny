/* eslint-disable import/no-named-default */

import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';

import Prism from '@maji/react-prism';

require('prismjs');
require('prismjs/plugins/line-numbers/prism-line-numbers');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('prism-themes/themes/prism-hopscotch.css');

const Code = ({
	language,
	children,
	...rest
}) => (
	<Prism language={`${language} line-numbers`} {...rest}>
		{children}
	</Prism>
);
Code.propTypes = {
	children: PropTypes.oneOf([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	language: PropTypes.string,
};
Code.defaultProps = {
	children: '',
	language: 'javascript',
};

export { Code };

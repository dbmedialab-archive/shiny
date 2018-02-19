/* eslint-disable import/no-named-default */

import { default as React } from 'react';
import { default as PropTypes } from 'prop-types';

import Prism from '@maji/react-prism';

import 'prismjs';

// Other than javascript, we'll have to import
// the language definition we need.
// TODO: Consider creating a fork component and
// a directory with language components. There is
// close to 150 possible languages in prism,
// we might need a prettier solution...
import 'prismjs/components/prism-jsx';

import 'prism-themes/themes/prism-hopscotch.css';

const Code = ({
	language,
	children,
	...rest
}) => {
	return (
		<Prism language={language} {...rest}>
			{children}
		</Prism>
	);
};
Code.propTypes = {
	children: PropTypes.node,
	language: PropTypes.string,
};
Code.defaultProps = {
	children: '',
	language: 'javascript',
};

export { Code };

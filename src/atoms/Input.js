import React from 'react';
import PropTypes from 'prop-types';
import createDebug from 'debug';

import { TextInput } from './TextInput';

const debug = createDebug('Input');

const Input = ({ type, ...rest }) => {
	if (type === 'text') {
		return <TextInput type={type} {...rest} />;
	}

	debug('This input type is not properly supported yet.');

	return <TextInput type={type} {...rest} />;
};
Input.propTypes = {
	type: PropTypes.oneOf([
		'button',
		'checkbox',
		'image',
		'radio',
		'color',
		'date',
		'datetime',
		'datetime-local',
		'email',
		'file',
		'hidden',
		'month',
		'number',
		'password',
		'range',
		'reset',
		'search',
		'submit',
		'tel',
		'text',
		'url',
		'week',
	]),
};
Input.defaultProps = {
	type: 'text',
};

export { Input };

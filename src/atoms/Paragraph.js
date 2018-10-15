import React from 'react';
import styled from 'react-emotion';
import propTypes from 'prop-types';
import { getVariable } from '../utils/get-variable';

const P = styled.p`
	font-size: ${getVariable('uiRegularSize')};
	font-weight: ${getVariable('uiWeight')};
	margin-bottom: ${getVariable('verticalBase')};
	text-rendering: optimizeLegibility;
	width: 100%;
	strong {
		font-weight: ${getVariable('uiWeightBold')};
	}
`;

const Paragraph = (props) => {
	const { children } = props;

	return (
		<P>{children}</P>
	);
};

Paragraph.propTypes = {
	children: propTypes.node.isRequired,
};

export { Paragraph };

/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getColor, getVariable } from '../../src/utils';

export const DemoContainer = styled.article`
	padding: calc(1/2 * ${getVariable('verticalBase')}) ${getVariable('horizontalBase')};
	margin: 0 0 ${getVariable('verticalBase')};
	background: ${getColor('calmBackground')};

	&:after {
		content: " ";
		clear: both;
		display: table;
	}
`;
DemoContainer.displayName = 'DemoContainer';

DemoContainer.defaultProps = {
	backgroundColor: 'calmBackground',
};

DemoContainer.propTypes = {
	backgroundColor: PropTypes.string,
};

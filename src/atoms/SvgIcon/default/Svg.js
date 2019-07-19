import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { getColor } from '../../../utils';

const StyledSvg = styled('svg')`
	/* Workaround for old webkit browsers */
	/* https://bugs.webkit.org/show_bug.cgi?id=82489 */
	max-height: 100%;
`;

const Svg = ({ color, ...rest }) => {
	const fill = getColor(color)(rest);
	const stroke = getColor(color)(rest);

	return <StyledSvg fill={fill} stroke={stroke} {...rest} />;
};
Svg.propTypes = {
	color: PropTypes.string,
};
Svg.defaultProps = {
	color: 'type',
};

export default withTheme(Svg);

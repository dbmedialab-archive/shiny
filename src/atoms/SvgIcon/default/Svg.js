import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { getColor } from '../../../utils';

const Svg = ({ color, ...rest }) => {
	const fill = getColor(color)(rest);
	const stroke = getColor(color)(rest);

	return <svg fill={fill} stroke={stroke} {...rest} />;
};
Svg.propTypes = {
	color: PropTypes.string,
};
Svg.defaultProps = {
	color: 'type',
};

export default withTheme(Svg);

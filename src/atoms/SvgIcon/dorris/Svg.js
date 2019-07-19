import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import { getColor } from '../../../utils/get-color';

const Svg = ({ color, ...rest }) => {
	const stroke = getColor(color)(rest);

	return (<svg
		viewBox="0 0 33 33"
		color={stroke}
		fill="none"
		stroke={stroke}
		strokeWidth={1.5}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeMiterlimit={10}
		{...rest}
	/>);
};
Svg.propTypes = {
	color: PropTypes.string,
};
Svg.defaultProps = {
	color: 'splashBackground',
};

export default withTheme(Svg);

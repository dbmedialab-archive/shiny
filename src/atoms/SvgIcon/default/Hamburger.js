import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Svg from './Svg';
import { getColor } from '../../../utils';

const Hamburger = ({ opened, ...props }) => (
	<Svg width="100%" height="100%" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" {...props}>
		<rect x="0" y="0" width="23" height="5" />
		<rect x="0" y="9" width="23" height="5" />
		<rect x="0" y="18" width="23" height="5" />
	</Svg>
);
Hamburger.propTypes = {
	opened: PropTypes.bool,
	color: PropTypes.string,
};
Hamburger.defaultProps = {
	opened: false,
	color: 'primary',
};

export default styled(Hamburger)`
	rect {
		fill: ${props => getColor(props.color)(props)};
		transition: .1s transform;
		${({ opened }) => opened && css`
			& :nth-of-type(1) {
				transform: rotate(45deg) scale(1.17, 1) translateY(-2.5px) translateX(2.5px);
			}
			& :nth-of-type(2) {
				transform: scale(0.2, 1) translateX(47px);
			}
			& :nth-of-type(3) {
				transform: rotate(-45deg) scale(1.17, 1) translateY(-4px) translateX(-11.5px);
			}
		`}
	}
`;

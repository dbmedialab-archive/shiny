import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getColor } from '../utils';

const Svg = styled.svg`
  box-sizing: border-box;
	
	& .primary {
		fill: ${props => (props.inverted ? getColor('secondary') : getColor('white'))}
	}

	& .secondary {
		fill: ${props => (props.inverted ?getColor('white') : getColor('secondary'))}
	}
`;

/* eslint-disable max-len */
const Elbil24Logo = props => (
	<Svg
		role="img"
		aria-labelledby="title"
		viewBox="0 0 364 97"
		{...props}
	>
		<title>Elbil24Logo</title>
		<path
			className="primary"
			d="M63,81a1.93,1.93,0,0,1,1.29,2.41C61.16,93.86,51.23,100.51,41,101.87c-15.2,2-29.14-5.42-34.86-18.6-6.49-14.94-2.61-33,9.11-42.43,10.51-8.46,27.25-9.11,38.31-1.42,8.1,5.65,11.31,14,12.19,23.37a72.33,72.33,0,0,1,.06,7.69,2,2,0,0,1-2,2H20.94c.2,7.3,4.39,12.47,11,14.17,6.22,1.76,14.18,0,18.2-7.79a1.89,1.89,0,0,1,2.23-.95ZM48.46,60.38C47.19,52,42.32,48.07,34,48.39c-7,.27-12.09,5-12.58,12Z"
			transform="translate(-3.03 -5.63)"
		/>
		<path
			className="primary"
			d="M178.56,30.24h14.56a3.08,3.08,0,0,1,3.08,3.08V94.75a0,0,0,0,1,0,0H182.1a3.55,3.55,0,0,1-3.55-3.55v-61a0,0,0,0,1,0,0Z"
		/>
		<circle className="primary" cx="187.38" cy="13.6" r="8.82" />
		<path
			className="primary"
			d="M213,5.63v94.75h4.42a13.22,13.22,0,0,0,13.22-13.22V19.58a14,14,0,0,0-14-13.95Z"
			transform="translate(-3.03 -5.63)"
		/>
		<path
			className="primary"
			d="M76.9,5.63V87.16a13.22,13.22,0,0,0,13.22,13.22h4.42V17.87A12.25,12.25,0,0,0,82.29,5.63Z"
			transform="translate(-3.03 -5.63)"
		/>
		<path
			className="primary"
			d="M141.29,35.87a32.17,32.17,0,0,0-15.41,3.91V18.42A12.78,12.78,0,0,0,113.09,5.63h-4.85v94.75h4.42a13.19,13.19,0,0,0,10.71-5.49,32.23,32.23,0,1,0,17.92-59Zm-2.48,47A15,15,0,1,1,156,65.51,15,15,0,0,1,138.81,82.88Z"
			transform="translate(-3.03 -5.63)"
		/>
		<path
			className="secondary"
			d="M301.39,83H274.53a1.15,1.15,0,0,1-.9-1.86l18.25-22.89,3.73-4.65a26.55,26.55,0,0,0,3.07-5.18A25.92,25.92,0,0,0,301,37.6c-.08-7.64-2.7-14-7.77-19S281.63,11,273.64,10.88a27.13,27.13,0,0,0-9.48,1.78,24.81,24.81,0,0,0-8.72,5.83c-4.83,5.05-7.47,11.5-7.8,19.19l0,1a1.14,1.14,0,0,0,1.14,1.19h14.89a.5.5,0,0,0,.5-.48c.05-2.07.82-10.07,10-10.07,9.75,0,10.77,11.14,7.48,15.25l-33.42,41.9a2.81,2.81,0,0,0-.61,1.76l.06,9.41a2.79,2.79,0,0,0,2.79,2.77h51a1.14,1.14,0,0,0,1.14-1.14V84.17A1.14,1.14,0,0,0,301.39,83Z"
			transform="translate(-3.03 -5.63)"
		/>
		<path
			className="secondary"
			d="M364.06,57.45h-4.89V44a2.39,2.39,0,0,0-2.4-2.4H343.55a2.39,2.39,0,0,0-2.4,2.4V57.45H328.6V38a15.88,15.88,0,0,0-15.88-15.88h0a2.15,2.15,0,0,0-2.15,2.14V73.12a2.14,2.14,0,0,0,1.78,2.11,2.85,2.85,0,0,0,1.17.25h27.63V98a2.39,2.39,0,0,0,2.4,2.4h13.22a2.39,2.39,0,0,0,2.4-2.4V75.48h4.89a3,3,0,0,0,2.94-3V60.39A2.94,2.94,0,0,0,364.06,57.45Z"
			transform="translate(-3.03 -5.63)"
		/>
	</Svg>
);
/* eslint-enable max-len */

Elbil24Logo.displayName = 'Elbil24Logo';

Elbil24Logo.propTypes = {
	inverted: PropTypes.bool,
};

Elbil24Logo.defaultProps = {
	inverted: false,
};

export { Elbil24Logo };

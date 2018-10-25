import React, { Fragment } from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Svg = styled.svg`
	& .st0 {
		fill: ${props => props.fill};
	}
`;

/* eslint-disable max-len */

/** Aller Main Logo */
const AllerLogo = ({ fill }) => (
	<Svg role="img" aria-labelledby="title" id="AllerLogo" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 566.9 283.5" fill={fill}>
		<Fragment>
			<g>
				<g>
					<polygon className="st0" points="229.3,91.9 229.3,188.7 257.1,188.7 257.1,91.9 		" />
					<polygon className="st0" points="272.2,91.9 272.2,188.7 300,188.7 300,91.9 		" />
					<g>
						<path
							className="st0"
							d="M332.4,156.1c0.6,14,7.7,20.4,20.4,20.4c9.2,0,16.6-5.4,18-10.4H391c-6.4,19-20.1,27.1-39,27.1
				c-26.2,0-42.5-17.4-42.5-42.3c0-24.1,17.2-42.5,42.5-42.5c28.3,0,42,23,40.4,47.8H332.4z M369.6,142.1
				c-2.1-11.2-7.1-17.1-18.2-17.1c-14.5,0-18.7,10.9-19,17.1H369.6z"
						/>
					</g>
					<g>
						<path
							className="st0"
							d="M403.3,114.8h24.8v13.7h0.4c4.8-9.3,17.6-15.7,30.3-15.7c1.8,0,4,0.3,5.7,0.7v18.9c-2.4-0.4-6.2-0.7-9.4-0.7
				c-19.1,0-25.7,10.7-25.7,23.7v33.3h-26.1V114.8z"
						/>
					</g>
				</g>
				<path
					className="st0"
					d="M164.6,190.6l22.5-24.9l10.4,23.1h28.4l-0.1-0.1h0.1l-41.2-96.7h-40.1l-41.2,96.7h0.1l-0.1,0.1h28.4l10.4-23.1
		L164.6,190.6z M151.5,143.9l13.1-30.3l13.1,30.3l-13.1,18.5L151.5,143.9z"
				/>
			</g>

		</Fragment>
	</Svg>
);
/* eslint-enable max-len */

AllerLogo.propTypes = {
	/** Custom fill color for the svg */
	fill: PropTypes.string,
};

AllerLogo.defaultProps = {
	fill: '#bb121a',
};

export { AllerLogo };

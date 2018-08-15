import React from 'react';
import propTypes from 'prop-types';

const Star = ({ color, ...rest }) => (
	<svg width="100%" height="100%" viewBox="0 0 31 29" {...rest}>
		{/* eslint-disable max-len */}
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g transform="translate(-755.000000, -541.000000)" fill={color || '#333333'}>
				<g transform="translate(567.000000, 230.000000)">
					<g transform="translate(52.000000, 311.000000)">
						<path d="M151.706522,0 L156.292349,9.61545136 L166.706522,11.0770118 L159.126389,18.4812498 L160.976986,29 L151.706522,23.9606213 L142.436057,29 L144.286655,18.4812498 L136.706522,11.0770118 L147.120694,9.61545136 L151.706522,0 Z" />
					</g>
				</g>
			</g>
		</g>
		{/* eslint-enable max-len */}
	</svg>
);

Star.propTypes = {
	color: propTypes.string.isRequired,
};

export { Star };

import React from 'react';
import PropTypes from 'prop-types';

const DoubleArrow = props => (
	<svg width="100%" height="100%" viewBox="0 0 16 16" >
		{/* eslint-disable max-len */}
		<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g fill={props.color}>
				<path d="M 1.7246094 2.0175781 L 1.0253906 2.7324219 L 7.5 9.0742188 L 13.974609 2.7324219 L 13.275391 2.0175781 L 7.5 7.6757812 L 1.7246094 2.0175781 z M 1.7246094 6.0175781 L 1.0253906 6.7324219 L 7.5 13.074219 L 13.974609 6.7324219 L 13.275391 6.0175781 L 7.5 11.675781 L 1.7246094 6.0175781 z" />
			</g>
		</g>
		{/* eslint-enable max-len */}
	</svg>
);

DoubleArrow.propTypes = {
	color: PropTypes.string,
};

DoubleArrow.defaultProps = {
	color: '#000',
};

export { DoubleArrow };

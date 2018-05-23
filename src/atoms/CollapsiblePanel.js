import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';

import { getColor } from '../utils';

const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(-40px);
	}
	
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const OverlayContent = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	background: ${getColor('white')};
	padding: ${props => props.padding};
	box-shadow: 0 2px 11px 0 rgba(142, 137, 137, 0.5);
	animation: ${fadeIn} 300ms cubic-bezier(0.165, 0.84, 0.44, 1) normal;
`;

const CollapsiblePanel = props => (
	<React.Fragment>
		{props.opened &&
		<OverlayContent {...props}>
			{props.children}
		</OverlayContent>}
	</React.Fragment>
);

CollapsiblePanel.defaultProps = {
	padding: '2em 5em',
};

CollapsiblePanel.propTypes = {
	children: PropTypes.element.isRequired,
	opened: PropTypes.bool.isRequired,
	padding: PropTypes.string,
};

export { CollapsiblePanel };

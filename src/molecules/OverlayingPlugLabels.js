import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getVariable } from '../utils';

import { OverlayingPlugLabel } from '../atoms/OverlayingPlugLabel';

const Footer = styled.footer`
	order: ${props => props.order};
	display: flex;
	justify-content: center;
	z-index: 1;
	margin-top: calc(-1/2 * (${getVariable('uiSmallLineHeight')} + 2/8 * ${getVariable('verticalBase')}));
`;
Footer.propTypes = {
	order: PropTypes.number,
};
Footer.defaultProps = {
	order: 0,
};

const OverlayingPlugLabels = ({ labels, ...rest }) => (
	<Footer {...rest}>
		{labels.map(label => (
			<OverlayingPlugLabel>{label.text}</OverlayingPlugLabel>
		))
		}
	</Footer>
);
OverlayingPlugLabels.propTypes = {
	labels: PropTypes.arrayOf(
		PropTypes.shape({ text: PropTypes.string })
	),
};
OverlayingPlugLabels.defaultProps = {
	labels: [],
};

export { OverlayingPlugLabels };

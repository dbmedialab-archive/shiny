import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LinkBarHeading } from './LinkBarHeading';

const Arrow = styled(LinkBarHeading)`
	line-height: 0;
	font-weight: 800;
	padding-left: ${props => (props.pointsTo === 'left'
		? `calc(1/4 * ${props.theme.variables.horizontalBase})`
		: `calc(1/2 * ${props.theme.variables.horizontalBase})`
	)};
	padding-right: ${props => (props.pointTo === 'left'
		? `calc(1/2 * ${props.theme.variables.horizontalBase})`
		: `calc(1/4 * ${props.theme.variables.horizontalBase})`
	)};
`;

const ScrollArrow = ({
	pointsTo,
}) => {
	if (pointsTo === 'left') {
		return <Arrow pointsTo={pointsTo}>&#8826;</Arrow>;
	}
	return <Arrow pointsTo={pointsTo}>&#8827;</Arrow>;
};

ScrollArrow.propTypes = {
	pointsTo: PropTypes.oneOf(['left', 'right']).isRequired,
};

export { ScrollArrow };

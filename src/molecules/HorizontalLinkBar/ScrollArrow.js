import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LinkBarHeading } from './LinkBarHeading';

const Arrow = styled(LinkBarHeading)`
	font-weight: 800;
	padding-left: ${props => (props.pointTo === 'left'
		? `calc(1/4 * ${props.theme.variables.horizontalBase})`
		: `calc(1/2 * ${props.theme.variables.horizontalBase})`
	)};
	padding-right: ${props => (props.pointTo === 'left'
		? `calc(1/2 * ${props.theme.variables.horizontalBase})`
		: `calc(1/4 * ${props.theme.variables.horizontalBase})`
	)};
`;

const ScrollArrow = ({
	pointTo,
}) => {
	if (pointTo === 'left') {
		return <Arrow>&#8826;</Arrow>;
	}
	return <Arrow>&#8827;</Arrow>;
};

ScrollArrow.propTypes = {
	pointTo: PropTypes.oneOf(['left', 'right']).isRequired,
};

export { ScrollArrow };

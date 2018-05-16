import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { FontIcon, getColor } from '..';

const Bullet = styled.a`
    color: ${getColor('type')};
    font-size: ${props => props.theme.variables.headingMediumSize};
    line-height: ${props => props.theme.variables.headingMediumLineHeight}
    font-family: ${props => props.theme.variables.mainFont};
    transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    display: inline-block;
    cursor: pointer;

    &:hover {
        color: ${getColor('primary')};
        transform: translateX(1em);
    }
`;

const StyledFontIcon = styled(FontIcon)`
	margin-right: ${props => props.arrowSpacing};
`;

const ArrowBullet = props => (
	<Bullet>
		<StyledFontIcon
			arrowSpacing={props.arrowSpacing}
			name="arrow-alt-right"
			size={1.2}
		/>
		{props.children}
	</Bullet>
);

ArrowBullet.defaultProps = {
	arrowSpacing: '1.2em',
};

ArrowBullet.propTypes = {
	arrowSpacing: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export { ArrowBullet };

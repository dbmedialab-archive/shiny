import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { FontIcon } from './FontIcon';

import { getColor } from '../utils';

const Bullet = styled.a`
    color: ${getColor('type')};
    font-size: ${props => props.theme.variables.headingMediumSize};
    line-height: ${props => props.theme.variables.headingMediumLineHeight};
    font-family: ${props => props.theme.variables.mainFont};
    transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    display: block;
	overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;

    &:hover {
        color: ${getColor('primary')};
        transform: translateX(1em);
    }
`;

const StyledFontIcon = styled(FontIcon)`
	margin-right: ${props => props.arrowSpacing};
`;

const UnstyledArrowBullet = props => (
	<Bullet href={props.href} className={props.className}>
		<StyledFontIcon
			arrowSpacing={props.arrowSpacing}
			name="arrow-alt-right"
			size={1.2}
		/>
		{props.children}
	</Bullet>
);

UnstyledArrowBullet.defaultProps = {
	arrowSpacing: '1.2em',
	className: null,
	href: null,
};

UnstyledArrowBullet.propTypes = {
	arrowSpacing: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
};

const ArrowBullet = styled(UnstyledArrowBullet)``;

export { ArrowBullet };

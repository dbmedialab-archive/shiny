import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { FontIcon } from './FontIcon';

import { getColor, getVariable } from '../utils';

const Bullet = styled.a`
    color: ${getColor('type')};
    font-size: ${getVariable('headingMediumSize')};
    line-height: ${getVariable('headingMediumLineHeight')};
    font-family: ${getVariable('mainFont')};
    transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;

    &:hover {
        color: ${getColor('primary')};
        transform: translateX(${getVariable('horizontalBase')});
    }
`;

const StyledFontIcon = styled(FontIcon)`
	margin-right: ${getVariable('horizontalBase')};
`;

const UnstyledArrowBullet = props => (
	<Bullet href={props.href} className={props.className}>
		<StyledFontIcon
			name="arrow-alt-right"
			size={1.2}
		/>
		{props.children}
	</Bullet>
);

UnstyledArrowBullet.defaultProps = {
	className: null,
	href: null,
};

UnstyledArrowBullet.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
};

const ArrowBullet = styled(UnstyledArrowBullet)``;

export { ArrowBullet };

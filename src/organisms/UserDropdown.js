import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { LinkBarHeading } from '../atoms/LinkBarHeading';
import { LinkBarLink } from '../atoms/LinkBarLink';
import { getVariable } from '../utils/get-variable';
import { MenuLayer } from '../atoms/MenuLayer';
import { VerticalLinkBar } from '../molecules/VerticalLinkBar';
import { getColor } from '../utils/get-color';

const LinkBarButtonProfile = styled(LinkBarLink)`
	${(props) => {
		const { secondary } = props;
		const background = secondary ? getColor('secondary')(props) : 'transparent';
		return css`
			&& {
				background: ${background};
				text-align: center;
				font-weight: ${getVariable('uiWeightBold')(props)};
				& :hover {
					background: ${getColor('grayTint')(props)};
				}
			}
		`;
	}}
`;
// display: flex, because by default it is inline-block
const StyledVerticalLinkBar = styled(VerticalLinkBar)`
	display: flex;
	flex-direction: column;
	& > li {
		padding: calc(${getVariable('verticalBase')} / 2) ${getVariable('horizontalBase')};
	}
	& > li:first-child {
		border-bottom: .1rem solid ${getColor('secondary')};
	}
	& > li:last-child {
		padding-top: 0;
	}
`;

const ProfileMenuLayer = styled(MenuLayer)`
	&& {
		width: calc(${getVariable('horizontalBase')} * 20);
		@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
			width: 100%;
		}
	}
`;

const linkProps = {
	useUnderline: false,
	activeBackgroundColor: 'primaryDark',
	textColor: 'darkness',
	activeTextColor: 'darkness',
	ALLCAPS: true,
};

const StyledText = styled(LinkBarHeading)`
	&& {
		padding: 0;
	}
`;
const SpanWithAIDIcon = styled.span`
	position: relative;
	& :after {
		content: '';
		position: absolute;
		display: block;
		background: url(https://styleguide.dagbladet.no/assets/logo/aid-logo.svg) center center
			no-repeat;
		background-size: contain;
		width: 2.8rem;
		height: 2.8rem;
		right: 0;
		top: 0;
		-webkit-transform: translate(120%, -25%);
		-ms-transform: translate(120%, -25%);
		transform: translate(120%, -25%);
	}
`;
const UserDropDown = ({ user, ...rest }) => (
	<ProfileMenuLayer backgroundColor="white" {...rest}>
		<StyledVerticalLinkBar background="white">
			<StyledText marginBottomFactor={1 / 2} marginTopFactor={1 / 2}>
				{user.name}
			</StyledText>
			<LinkBarButtonProfile
				secondary
				{...linkProps}
				linkText="Min Side"
				url="//www.dagbladet.no/app/minside-front"
			/>
			<LinkBarButtonProfile {...linkProps} url="//www.dagbladet.no/app/dug/v1/client/logout">
				<SpanWithAIDIcon>Logg Ut</SpanWithAIDIcon>
			</LinkBarButtonProfile>
		</StyledVerticalLinkBar>
	</ProfileMenuLayer>
);

UserDropDown.propTypes = {
	user: PropTypes.shape({
		user_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
};

export default UserDropDown;

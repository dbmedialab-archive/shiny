import React from 'react';
import styled, { css } from 'react-emotion';
import { getColor, getVariable } from '../../src';

import {
	HorizontalLinkBar,
	SeHerLogo,
	FontIcon,
	HugeHeading,
	LinkBarItem,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
	LargeLinkBarDropdown,
	LargeLinkBarSearchField,
	LinkBarButton,
	LinkBarHeading,
	VerticalLinkBar,
} from '../../src';

const logoWidth = '5.9rem';
const smLogoWidth = '7.2rem';

const LinkBarBleedingLogo = styled(LinkBarItem)`
	align-self: flex-start;
	width: ${logoWidth};
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		width: ${smLogoWidth};
	}
`;

const SeHerButton = styled(LinkBarButton)`
	font-size: 2.0rem;
	line-height: 2.4rem;
`;

const SeHerDropdownButton = (props) => {
	const { linkText, hide, ...rest } = props;
	const icon = (hide === true) ? 'list' : 'close';

	return (
		<SeHerButton {...rest}>
			{linkText}{' '}
			<FontIcon name={icon} />
		</SeHerButton>
	);
};

const SecondaryBar = styled(HorizontalLinkBar)`
	${(props) => {
		const horizontalBase = getVariable('horizontalBase')(props);
		const smBreakpoint = props.theme.flexboxgrid.breakpoints.sm;

		return css`
			margin-left: ${logoWidth};
			width: calc(100% - ${logoWidth});

			@media screen and (min-width: ${smBreakpoint}em) {
				margin-left: calc(${smLogoWidth} + ${horizontalBase});
				width: calc(100% - ${smLogoWidth} - ${horizontalBase});
			}
		`;
	}}
`;

const TopAlignBar = styled(HorizontalLinkBar)`
	flex: 1 0 auto;
	align-items: flex-start;
`;

const SecondaryLinkBarHeading = styled(LinkBarHeading)`
	border-right: .1rem solid ${getColor('grayTint', 'light')};
	font-weight: ${getVariable('uiWeightSemiBold')};
`;

const LogoLink = styled(LargeLinkBarLink)`
	position: absolute;
	top:0;
	transition: .2s width;
	width: ${logoWidth};

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		width: ${smLogoWidth};
	}
`;

const GrowingListItem = styled(LinkBarItem)`
	flex: 1 0 auto;
`;

const linkProps = {
	useUnderline: true,
	activeBackgroundColor: 'transparent',
	textColor: 'type',
	skin: 'splashBorder',
	ALLCAPS: true,
};

const secondaryLinkProps = Object.assign({}, linkProps, { textColor: 'primary' });

const socialLinkProps = {
	isListItem: true,
	size: 'small',
	useUnderline: false,
	textColor: 'type',
	xs: false,
	md: true,
};
const StyledSocialLink = styled(LinkBarLink)`
	font-size: 3.0rem;
	line-height: 1;
`;
const SocialItem = styled(LinkBarItem)`
	align-self: center;
`;
const SocialLink = ({ xs, md, ...props }) => <SocialItem {...{ xs, md }}><StyledSocialLink {...props} /></SocialItem>;
const MobileMenu = styled(LargeLinkBarDropdown)`
	margin-right: calc(-1/2 * ${getVariable('horizontalBase')});
`;

// Give the dropdown menu some padding where it overlaps with the seher logo
const StyledVerticalLinkBar = styled(VerticalLinkBar)`
	padding-top: calc(3/4 * ${getVariable('verticalBase')});
	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em)	{
		padding-top: 0;
	}
`;


const SeHerMenuRemake = () => (
	<section>
		<HugeHeading>SeHer Menu Remake Mockup</HugeHeading>
		<TopAlignBar
			backgroundColor="grayTintLight"
			isTopLevelComponent={false} // Use the full width
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
			zIndex={5}
		>
			<GrowingListItem isListItem>
				<TopAlignBar
					backgroundColor="transparent"
					isTopLevelComponent={false}
					overflow="visible"
					shouldFlexChildren
				>
					<LinkBarBleedingLogo isListItem>
						<LogoLink {...linkProps} useUnderline={false} isBlockLink>
							<SeHerLogo />
						</LogoLink>
					</LinkBarBleedingLogo>
					<LargeLinkBarLink xs={false} md url="/seksjon" {...linkProps}>Seksjon</LargeLinkBarLink>
					<LargeLinkBarLink xs={false} md url="/seksjon" {...linkProps}>Seksjon</LargeLinkBarLink>
					<LargeLinkBarLink xs={false} md url="/seksjon" {...linkProps}>Seksjon</LargeLinkBarLink>
					<LargeLinkBarDropdown xs={false} md linkText="Kommersielt" {...linkProps}>
						<VerticalLinkBar
							backgroundColor="white"
						>
							<LinkBarLink
								linkText="Rabattkoder"
								url="https://example.com"
								{...linkProps}
								xs={false}
								lg
							/>
							<LinkBarLink url="/seksjon" {...linkProps}>Kommersiell lenke</LinkBarLink>
							<LinkBarLink url="/seksjon" {...linkProps}>Kommersiell lenke</LinkBarLink>
							<LinkBarLink url="/seksjon" {...linkProps}>Kommersiell lenke</LinkBarLink>
						</VerticalLinkBar>
					</LargeLinkBarDropdown>
				</TopAlignBar>
			</GrowingListItem>
			<SocialLink
				href="https://www.facebook.com/seoghor/"
				{...socialLinkProps}
			>
				<FontIcon name="facebook" title="Se og Hør på Facebook" />
			</SocialLink>
			<SocialLink
				href="https://www.instagram.com/seoghoer/"
				{...socialLinkProps}
			>
				<FontIcon name="pictures" title="Se og Hør på Instagram" />
			</SocialLink>
			<SocialLink
				href="https://www.youtube.com/channel/UCSzN1_wSj9VsKaysZc263Dg"
				{...socialLinkProps}
			>
				<FontIcon name="youtube" title="Se og Hør på YouTube" />
			</SocialLink>
			<LargeLinkBarSearchField
				action="https://www.seher.no/tekstarkiv/"
				placeholder="Søk i Se&Hør..."
				xs={false}
				md
				backgroundColor="white"
				iconColor="typeLight"
			/>
			<MobileMenu
				displayInitially
				{...linkProps}
				xs
				md={false}
				position="static"
				linkText="Meny"
				textColor="type"
				Trigger={SeHerDropdownButton}
				zIndex={7}
			>
				<StyledVerticalLinkBar background="white" align="right">
					<LinkBarLink linkText="Skal vi ha noe her da, tro?" url="#" {...linkProps} />
					<LinkBarLink linkText="Eller her?" url="#" {...linkProps} />
				</StyledVerticalLinkBar>
			</MobileMenu>
		</TopAlignBar>
		<SecondaryBar
			isTopLevelComponent={false} // Use the full width
			shouldFlexChildren
			justifyContent="flex-start"
			background={`linear-gradient(
				0deg,
				#eee,
				#fff .1rem
			)`}
		>
			<SecondaryLinkBarHeading {...linkProps} size="small" useUnderline={false}>Seksjoner</SecondaryLinkBarHeading>
			<SmallLinkBarLink
				linkText="Rød løper"
				url="#"
				{...secondaryLinkProps}
			/>
			<SmallLinkBarLink
				linkText="Reality"
				url="#"
				{...secondaryLinkProps}
			/>
			<SmallLinkBarLink
				linkText="Brudd & bryllup"
				url="#"
				{...secondaryLinkProps}
				isActive
			/>
			<SmallLinkBarLink
				linkText="Hollywood"
				url="#"
				{...secondaryLinkProps}
			/>
			<SmallLinkBarLink
				linkText="Regal"
				url="#"
				{...secondaryLinkProps}
			/>
			<SmallLinkBarLink
				linkText="Video"
				url="#"
				{...secondaryLinkProps}
			/>
			<SmallLinkBarLink
				linkText="Sterke historier"
				url="https://example.com"
				{...secondaryLinkProps}
			/>
			<SmallLinkBarLink
				linkText="Reise"
				url="https://example.com"
				{...secondaryLinkProps}
			/>
		</SecondaryBar>
	</section>
);

export { SeHerMenuRemake };

import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
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
	LinkBarButton,
	LinkBarHeading,
	ScrollArrowsLinkBar,
	VerticalLinkBar,
} from '../../src';

import { TopBarSearchField } from '../../src/atoms/MatHeader/TopBarSearchField';

const logoWidth = '5.9rem';
const smLogoWidth = '7.2rem';

const SearchField = styled(TopBarSearchField)`
	box-sizing: border-box;
	margin: .8rem 0;
	width: auto;
`;

const LinkBarBleedingLogo = styled(LinkBarItem)`
	align-self: flex-start;
	z-index: 9;
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

const linkProps = {
	useUnderline: true,
	activeBackgroundColor: 'transparent',
	textColor: 'type',
	skin: 'splashBorder',
	ALLCAPS: true,
};

const secondaryLinkProps = Object.assign({}, linkProps, { textColor: 'primary' });

const socialLinkProps = {
	useUnderline: false,
	textColor: 'type',
	xs: false,
	md: true,
};
const SocialLink = styled(LinkBarLink)`
	font-size: 3.0rem;
	line-height: 1;
`;

const ArrowBar = styled(ScrollArrowsLinkBar)`
	${(props) => {
		const blackMagicVariable = '.3rem';
		const margin = `calc(${logoWidth} + 2*${blackMagicVariable})`;
		const smMargin = `calc(${smLogoWidth} + ${blackMagicVariable})`;

		return `
			margin-left: ${margin};

			@media screen and (min-width: ${props.theme.flexboxgrid.breakpoints.sm}em) {
				margin-left: ${smMargin};
			}
		`;
	}}
`;

const StyledBar = styled(HorizontalLinkBar)`
	align-items: flex-start;
`;

const BrandBar = withTheme(({
	theme: {
		colors: {
			grayTintLight,
		},
	},
	...rest
}) => <StyledBar background={grayTintLight} {...rest} />);
const SecondaryBar = withTheme(({
	theme: {
		colors: {
			white,
		},
	},
	...rest
}) => <ArrowBar background={white} arrowSize="small" {...rest} />);

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

const SeHerMenuRemake = () => (
	<section>
		<HugeHeading>SeHer Menu Remake Mockup</HugeHeading>
		<BrandBar
			isTopLevelComponent={false} // Use the full width
			shouldAdjustForNestedPadding
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
			zIndex={9}
		>
			<BrandBar
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
			</BrandBar>
			<BrandBar
				isTopLevelComponent // Use the full width
				shouldFlexChildren
				justifyContent="space-between"
				overflow="visible"
			>
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
				<form action="https://www.seher.no/tekstarkiv/">
					<SearchField
						type="search"
						name="q"
						placeholder="Søk i Se&Hør..."
						xs={false}
						md
					/>
				</form>
				<LargeLinkBarDropdown
					{...linkProps}
					xs
					md={false}
					linkText="Meny"
					textColor="type"
					Trigger={SeHerDropdownButton}
				>
					<VerticalLinkBar background="white" align="right">
						<LinkBarLink linkText="Skal vi ha noe her da, tro?" url="#" {...linkProps} />
						<LinkBarLink linkText="Eller her?" url="#" {...linkProps} />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
			</BrandBar>
		</BrandBar>
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

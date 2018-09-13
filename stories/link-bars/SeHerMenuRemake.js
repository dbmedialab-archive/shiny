import React from 'react';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { getColor, getVariable } from '../../src';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	HorizontalLinkBar,
	SeHerLogo,
	FontIcon,
	HugeHeading,
	LargeLinkBarLink,
	LargeLinkBarDropdown,
	LinkBarButton,
	LinkBarHeading,
	ScrollArrowsLinkBar,
	VerticalLinkBar,
} from '../../src';

import { TopBarSearchField } from '../../src/atoms/MatHeader/TopBarSearchField';

const SearchField = styled(TopBarSearchField)`
	box-sizing: border-box;
	margin: .8rem 0;
	width: auto;
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
	activeBackground: 'transparent',
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
const BrandBar = withTheme(({
	theme: {
		colors: {
			grayTintLight,
		},
	},
	...rest
}) => <HorizontalLinkBar background={grayTintLight} {...rest} />);
const SecondaryBar = withTheme(({
	theme: {
		colors: {
			white,
		},
	},
	...rest
}) => <ScrollArrowsLinkBar background={white} {...rest} />);

const SecondaryLinkBarHeading = styled(LinkBarHeading)`
	border-right: .1rem solid ${getColor('grayTint', 'light')};
	font-weight: ${getVariable('uiWeightSemiBold')};
`;

const LogoLink = styled(XSmallLinkBarLink)`
	width: 6.9rem;

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.sm}em) {
		width: 7.2rem;
	}
`;

const SeHerMenuRemake = () => (
	<section>
		<HugeHeading>SeHer Menu Remake Mockup</HugeHeading>
		<BrandBar
			isTopLevelComponent={false} // Use the full width
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
			shouldAdjustForNestedPadding
			zIndex={9}
		>
			<BrandBar
				overflow="visible"
			>
				<LogoLink {...linkProps} useUnderline={false} isBlockLink>
					<SeHerLogo />
				</LogoLink>
				<LargeLinkBarLink xs={false} md url="/seksjon" {...linkProps}>Seksjon</LargeLinkBarLink>
				<LargeLinkBarLink xs={false} md url="/seksjon" {...linkProps}>Seksjon</LargeLinkBarLink>
				<LargeLinkBarLink xs={false} md url="/seksjon" {...linkProps}>Seksjon</LargeLinkBarLink>
				<LargeLinkBarDropdown xs={false} md linkText="Kommersielt" {...linkProps}>
					<VerticalLinkBar
						background="#ffffff"
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
			isTopLevelComponent // Use the full width
			shouldAdjustForNestedPadding
			shouldFlexChildren
			background={`linear-gradient(
				0deg,
				#eee,
				#fff .1rem
			)`}
		>
			<SecondaryLinkBarHeading {...linkProps} useUnderline={false}>Seksjoner</SecondaryLinkBarHeading>
			<LinkBarLink
				linkText="Rød løper"
				url="#"
				{...secondaryLinkProps}
			/>
			<LinkBarLink
				linkText="Reality"
				url="#"
				{...secondaryLinkProps}
			/>
			<LinkBarLink
				linkText="Brudd & bryllup"
				url="#"
				{...secondaryLinkProps}
				isActive
			/>
			<LinkBarLink
				linkText="Hollywood"
				url="#"
				{...secondaryLinkProps}
			/>
			<LinkBarLink
				linkText="Regal"
				url="#"
				{...secondaryLinkProps}
			/>
			<LinkBarLink
				linkText="Video"
				url="#"
				{...secondaryLinkProps}
			/>
			<LinkBarLink
				linkText="Sterke historier"
				url="https://example.com"
				{...secondaryLinkProps}
			/>
			<LinkBarLink
				linkText="Reise"
				url="https://example.com"
				{...secondaryLinkProps}
			/>
		</SecondaryBar>
	</section>
);

export { SeHerMenuRemake };

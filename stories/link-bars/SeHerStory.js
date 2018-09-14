import React from 'react';
import styled from 'react-emotion';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	SmallLinkBarLink,
	HorizontalLinkBar,
	SeHerLogo,
	FontIcon,
	HugeHeading,
	LinkBarButton,
	LinkBarItem,
	LinkBarDropdown,
	VerticalLinkBar,
} from '../../src';

import { TopBarSearchField } from '../../src/atoms/MatHeader/TopBarSearchField';

const LogoLink = styled(XSmallLinkBarLink)`
	position: absolute;
	top:0;
	width: calc(2.5 * ${props => props.theme.variables.verticalBase});
	transition: .2s width;

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		width: calc(4 * ${props => props.theme.variables.verticalBase} + 1.2rem);
	}
`;

const SearchField = styled(TopBarSearchField)`
	box-sizing: border-box;
	margin: .8rem 0;
	width: auto;
`;

const LinkBarBleedingLogo = styled(LinkBarItem)`
	align-self: flex-start;
	z-index: 9;
`;

const SeHerButton = styled(LinkBarButton)`
	font-size: 2.0rem;
	line-height: 2.4rem;
`;

const SeHerDropdownButton = (props) => {
	const { linkText, hide, ...rest } = props;
	const direction = (hide === true) ? 'down' : 'up';

	return (
		<SeHerButton {...rest}>
			{linkText}{' '}
			<FontIcon name={`arrow-alt-${direction}`} />
		</SeHerButton>
	);
};

const linkProps = {
	useUnderline: true,
	activeBackground: 'transparent',
	textColor: 'type',
	skin: 'splashBorder',
};

const socialLinkProps = {
	useUnderline: false,
	textColor: 'type',
};
const SocialLink = styled(SmallLinkBarLink)`
	font-size: 3.1rem;
	line-height: 1;
`;

const SeHerStory = () => (
	<section>
		<HugeHeading>Se&Hør-like header</HugeHeading>
		<HorizontalLinkBar
			isTopLevelComponent={false} // Use the full width
			background="#ffffff" // A refactor to bacground='splashBackground' is on the books
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
			shouldAdjustForNestedPadding
			zIndex={9}
		>
			<LinkBarBleedingLogo isListItem>
				<LogoLink useUnderline={false}>
					<SeHerLogo />
				</LogoLink>
			</LinkBarBleedingLogo>
			<HorizontalLinkBar
				isTopLevelComponent // Use the full width
				background="#ffffff" // A refactor to bacground='splashBackground' is on the books
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
				<LinkBarDropdown
					xs
					md={false}
					linkText="☰"
					textColor="type"
					Trigger={SeHerDropdownButton}
				>
					<VerticalLinkBar background="white" align="right">
						<LinkBarLink linkText="Rød løper" url="#" {...linkProps} />
						<LinkBarLink linkText="Reality" url="#" {...linkProps} />
						<LinkBarLink linkText="Brudd & bryllup" url="#" {...linkProps} />
						<LinkBarLink linkText="Hollywood" url="#" {...linkProps} />
						<LinkBarLink linkText="Regal" url="#" {...linkProps} />
						<LinkBarLink linkText="Video" url="#" {...linkProps} />
						<LinkBarLink linkText="Sterke historier" url="#" {...linkProps} />
					</VerticalLinkBar>
				</LinkBarDropdown>
			</HorizontalLinkBar>
		</HorizontalLinkBar>
		<HorizontalLinkBar
			background="#ececec"
			isTopLevelComponent={false} // Use the full width
			shouldFlexChildren
			justifyContent="flex-end"
		>
			<LinkBarLink
				linkText="Rød løper"
				url="#"
				{...linkProps}
				xs={false}
				sm
			/>
			<LinkBarLink
				linkText="Reality"
				url="#"
				{...linkProps}
				xs={false}
				sm
			/>
			<LinkBarLink
				linkText="Brudd & bryllup"
				url="#"
				{...linkProps}
				isActive
				xs={false}
				sm
			/>
			<LinkBarLink
				linkText="Hollywood"
				url="#"
				{...linkProps}
				xs={false}
				md
			/>
			<LinkBarLink
				linkText="Regal"
				url="#"
				{...linkProps}
				xs={false}
				lg
			/>
			<LinkBarLink
				linkText="Video"
				url="#"
				{...linkProps}
				xs={false}
				lg
			/>
			<LinkBarLink
				linkText="Sterke historier"
				url="https://example.com"
				{...linkProps}
				xs={false}
				lg
			/>
			<LinkBarLink
				linkText="Reise"
				url="https://example.com"
				{...linkProps}
				xs={false}
				lg
			/>
			<LinkBarLink
				linkText="Rabattkoder"
				url="https://example.com"
				{...linkProps}
				xs={false}
				lg
			/>
		</HorizontalLinkBar>
	</section>
);

export { SeHerStory };

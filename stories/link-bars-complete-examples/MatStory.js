import React from 'react';
import styled from '@emotion/styled';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	HorizontalLinkBar,
	SvgIcon,
	HugeHeading,
	LinkBarItem,
	LinkBarDropdown,
	VerticalLinkBar,
} from '../../src';

import { TopBarSearchField } from '../../src/atoms/MatHeader/TopBarSearchField';

const BoxShadowLinkBar = styled(HorizontalLinkBar)`
	box-shadow: 0 .2rem .4rem 0 rgba(203, 203, 203, 0.5);
`;

const LogoLink = styled(XSmallLinkBarLink)`
	position: absolute;
	top:0;
	width: 10.6rem;
	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		width: 14.6rem;
	}
`;

const SearchField = styled(TopBarSearchField)`
	box-sizing: border-box;
	margin: .8rem 0;
	max-width: calc(100% - 21rem);
`;

const LinkBarBleedingLogo = styled(LinkBarItem)`
	align-self: flex-start;
	z-index: 9;
`;

const linkProps = {
	useUnderline: false,
	activeBackgroundColor: 'transparent',
	activeTextColor: 'primary',
	textColor: 'type',
};

const MatStory = () => (
	<section>
		<HugeHeading>Mat-like header</HugeHeading>
		<HorizontalLinkBar
			isTopLevelComponent={false} // Use the full width
			background="#4a4a4a" // This prop has been deprecated. Use backgroundColor instead
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
			zIndex={5}
		>
			<LinkBarBleedingLogo isListItem>
				<LogoLink useUnderline={false}>
					<SvgIcon name="oppskrift-logo" size={7} />
				</LogoLink>
			</LinkBarBleedingLogo>
			<SearchField
				placeholder="Søk i oppskrifter..."
				xs={false}
				md
			/>
			<LinkBarDropdown
				md={false}
				linkText="☰"
				textColor="white"
			>
				<VerticalLinkBar backgroundColor="white">
					<LinkBarLink linkText="Oppskrifter" url="#" {...linkProps} />
					<LinkBarLink linkText="Trinn-for-trinn-video" url="#" {...linkProps} />
					<LinkBarLink linkText="Bli inspirert" url="#" {...linkProps} />
					<LinkBarLink linkText="Populært nå" url="#" {...linkProps} />
				</VerticalLinkBar>
			</LinkBarDropdown>
		</HorizontalLinkBar>
		<BoxShadowLinkBar
			backgroundColor="white"
			isTopLevelComponent={false} // Use the full width
			shouldFlexChildren
			justifyContent="center"
		>
			<LinkBarLink
				linkText="Oppskrifter"
				url="#"
				{...linkProps}
				isActive
				xs={false}
				md
			/>
			<LinkBarLink
				linkText="Trinn-for-trinn-video"
				url="#"
				{...linkProps}
				xs={false}
				md
			/>
			<LinkBarLink
				linkText="Bli inspirert"
				url="https://example.com"
				{...linkProps}
				xs={false}
				md
			/>
			<LinkBarLink
				linkText="Populært nå"
				url="https://example.com"
				{...linkProps}
				xs={false}
				lg
			/>
		</BoxShadowLinkBar>
	</section>
);

export { MatStory };

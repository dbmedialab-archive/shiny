import React from 'react';
import styled from 'styled-components';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	HorizontalLinkBar,
	MatLogo,
	LinkBarItem,
	LinkBarDropdown,
	VerticalLinkBar,
	TopBarSearchField,
} from '../..';

const BoxShadowLinkBar = HorizontalLinkBar.extend`
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

const SearchField = TopBarSearchField.extend`
	box-sizing: border-box;
	margin: .8rem 0;
	max-width: calc(100% - 21rem);
`;

const LinkBarBleedingLogo = LinkBarItem.extend`
	align-self: flex-start;
	z-index: 9;
`;

const linkProps = {
	useUnderline: false,
	activeBackground: 'transparent',
	activeTextColor: 'primary',
	textColor: 'type',
};

const MatHeader = () => (
	<header>
		<HorizontalLinkBar
			isTopLevelComponent={false} // Use the full width
			background="#4a4a4a" // A refactor to bacground='splashBackground' is on the books
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
		>
			<LinkBarBleedingLogo isListItem>
				<LogoLink useUnderline={false}>
					<MatLogo />
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
				<VerticalLinkBar background="white">
					<LinkBarLink linkText="Oppskrifter" url="#" {...linkProps} />
					<LinkBarLink linkText="Trinn-for-trinn-video" url="#" {...linkProps} />
					<LinkBarLink linkText="Bli inspirert" url="#" {...linkProps} />
					<LinkBarLink linkText="Populært nå" url="#" {...linkProps} />
				</VerticalLinkBar>
			</LinkBarDropdown>
		</HorizontalLinkBar>

		<BoxShadowLinkBar
			background="white"
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
	</header>
);

export { MatHeader };

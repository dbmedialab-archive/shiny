import React from 'react';
import styled from 'styled-components';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	HorizontalLinkBar,
	MatLogo,
	HugeHeading,
	LinkBarItem,
	LinkBarDropdown,
	VerticalLinkBar,
} from '../../src/';

import { TopBarSearchField } from '../../src/atoms/MatHeader/TopBarSearchField';

const LogoLink = styled(XSmallLinkBarLink)`
	position: absolute;
	top:0;
	width: 14.6rem;
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

const MatStory = () => (
	<section>
		<HugeHeading>Mat-like header</HugeHeading>
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
					<LinkBarLink linkText="Test" url="#" {...linkProps} />
					<LinkBarLink linkText="Test" url="#" {...linkProps} />
					<LinkBarLink linkText="Test" url="#" {...linkProps} />
				</VerticalLinkBar>
			</LinkBarDropdown>
		</HorizontalLinkBar>
		<HorizontalLinkBar
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
		</HorizontalLinkBar>
	</section>
);

export { MatStory };

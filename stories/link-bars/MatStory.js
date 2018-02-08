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
					<LinkBarLink linkText="Test" url="#" />
					<LinkBarLink linkText="Test" url="#" />
					<LinkBarLink linkText="Test" url="#" />
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
				useUnderline={false}
				activeBackground="white"
				linkText="Oppskrifter"
				activeTextColor="primary"
				url="#"
				textColor="type"
				isActive
				xs={false}
				md
			/>
			<LinkBarLink
				useUnderline={false}
				activeBackground="white"
				linkText="Train-For-Trinn-Video"
				url="#"
				textColor="type"
				activeTextColor="primary"
				xs={false}
				md
			/>
			<LinkBarLink
				useUnderline={false}
				activeBackground="white"
				linkText="Bli Inspirert"
				url="https://example.com"
				textColor="type"
				activeTextColor="primary"
				xs={false}
				lg
			/>
			<LinkBarLink
				useUnderline={false}
				activeBackground="white"
				linkText="Populært Nå"
				url="https://example.com"
				textColor="type"
				activeTextColor="primary"
				xs={false}
				lg
			/>
		</HorizontalLinkBar>
	</section>
);

export { MatStory };

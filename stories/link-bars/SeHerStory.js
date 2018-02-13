import React from 'react';
import styled from 'styled-components';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	HorizontalLinkBar,
	SeHerLogo,
	HugeHeading,
	LinkBarItem,
	LinkBarDropdown,
	VerticalLinkBar,
} from '../../src/';

import { TopBarSearchField } from '../../src/atoms/MatHeader/TopBarSearchField';

const LogoLink = styled(XSmallLinkBarLink)`
	position: absolute;
	top:0;
	width: calc(2 * ${props => props.theme.variables.verticalBase});
	transition: .2s width;

	@media screen and (min-width: ${props => props.theme.variables.largeWidth}) {
		width: calc(4 * ${props => props.theme.variables.verticalBase});
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
	useUnderline: true,
	activeBackground: 'transparent',
	textColor: 'type',
	skin: 'splashBorder',
};

const SeHerStory = () => (
	<section>
		<HugeHeading>Se&Hør-like header</HugeHeading>
		<HorizontalLinkBar
			isTopLevelComponent={false} // Use the full width
			background="#ffffff" // A refactor to bacground='splashBackground' is on the books
			shouldFlexChildren
			justifyContent="space-between"
			overflow="visible"
		>
			<LinkBarBleedingLogo isListItem>
				<LogoLink useUnderline={false}>
					<SeHerLogo />
				</LogoLink>
			</LinkBarBleedingLogo>
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
			>
				<VerticalLinkBar background="white">
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

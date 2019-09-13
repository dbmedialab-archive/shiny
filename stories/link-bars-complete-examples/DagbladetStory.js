import React from 'react';
import styled from 'styled-components';

import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';

import {
	// For the story
	Heading,
	HugeHeading,

	// For this component specifically
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
	LargeLinkBarDropdown,
	HorizontalLinkBar,
	DagbladetLogo,
	VerticalLinkBar,
	SmallHeading,
	Row,
	Col,
	Paragraph,

	getColor,
	getVariable,
} from '../../src';

const linkProps = {
	useUnderline: false,
	activeBackgroundColor: 'primaryDark',
	textColor: 'white',
	ALLCAPS: true,
};
const dropDownLinkProps = {
	useUnderline: false,
	activeBackground: 'rgba(0,0,0,0.05)',
};
const paidDDLinkProps = Object.assign({}, dropDownLinkProps, {
	rel: 'nofoollow',
});

const PaddedHeading = styled(SmallHeading)`
	padding-left: ${getVariable('horizontalBase')};
	padding-right: ${getVariable('horizontalBase')};
	color: ${getColor('primary')};
`;

const VerySpecialLinkBar= styled(HorizontalLinkBar)`
	justify-content: space-between;

	@media (min-width: ${props => props.theme.flexboxgrid.breakpoints.lg}em) {
		justify-content: flex-start;
	}
`;

const FlexCol = styled(Col)`
	&& {
		display: flex;
		flex-direction: column;
	}
`;

const DagbladetStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar</HugeHeading>
		<Paragraph>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<VerySpecialLinkBar
				isTopLevelComponent={false} // Use the whole width
				backgroundColor="splashBackground"
				overflow="visible"
				shouldFlexChildren
			>
				<SmallLinkBarLink {...linkProps} isBlockLink style={{ maxWidth: '14.6rem' }}>
					<DagbladetLogo background="transparent" />
				</SmallLinkBarLink>
				<LargeLinkBarDropdown {...linkProps} linkText="Innhold" xs={false} lg displayInitially>
					<VerticalLinkBar backgroundColor="white">
						<LinkBarLink {...dropDownLinkProps} linkText="Nyheter" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Sport" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kultur" url="#" isActive />
						<LinkBarLink {...dropDownLinkProps} linkText="Økonomi" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kjendis" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Reise" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Bil" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Meninger" url="#" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
				<LargeLinkBarLink {...linkProps} linkText="Video" url="https://example.com" isActive xs={false} lg />
				<LargeLinkBarDropdown {...linkProps} linkText="Pluss" xs={false} lg>
					<VerticalLinkBar backgroundColor="white">
						<LinkBarLink {...dropDownLinkProps} linkText="Forsiden" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="I dag" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Magasinet" url="#" isActive />
						<LinkBarLink {...dropDownLinkProps} linkText="Søk i arkivet" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kultur" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Nyheter" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Sport" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="eAvis" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kundeservice" url="#" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
				<LargeLinkBarDropdown {...linkProps} linkText="Snarveier" xs={false} lg>
					<VerticalLinkBar backgroundColor="white">
						<LinkBarLink {...dropDownLinkProps} linkText="Tegneserier" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Været" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Fotballstudio" url="#" />
						<LinkBarLink
							{...dropDownLinkProps}
							linkText="FourFourTwo"
							url="#"
							isActive
						/>
						<LinkBarLink {...dropDownLinkProps} linkText="Mat" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Oddstips (annonsørinnhold)" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Tipping (annonsørinnhold)" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Lotteri (annonsørinnhold)" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Se.no" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="DinSide.no" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Leserreiser (annonsørinnhold)" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Rabattkoder (annonsørinnhold)" url="#" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
				<LargeLinkBarDropdown {...linkProps} position="static" linkText="Meny" xs lg={false} displayInitially>
					<VerticalLinkBar backgroundColor="white">
						<PaddedHeading ALLCAPS>Min profil</PaddedHeading>
						<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/pluss/logg_inn/" linkText="Logg inn" />
						<PaddedHeading ALLCAPS>Seksjoner</PaddedHeading>
						<Row>
							<FlexCol xs={6}>
								<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/nyheter/" linkText="Nyheter" />
								<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/kultur/" linkText="Kultur" />
								<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/sport/" linkText="Sport" />
								<LinkBarLink {...dropDownLinkProps} href="https://www.dinside.no/motor/" linkText="Bil" />
							</FlexCol>
							<FlexCol xs={6}>
								<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/reise/" linkText="Reise" />
								<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/meninger/" linkText="Meninger" />
								<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/pluss/" linkText="Pluss" />
								<LinkBarLink {...dropDownLinkProps} href="https://dbtv.no" linkText="DBTV" />
							</FlexCol>
						</Row>
						<PaddedHeading ALLCAPS>Snarveier</PaddedHeading>
						<LinkBarLink {...dropDownLinkProps} linkText="Tegneserier" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Været" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Fotballstudio" url="#" />
						<LinkBarLink
							{...dropDownLinkProps}
							linkText="FourFourTwo"
							url="#"
							isActive
						/>
						<LinkBarLink {...dropDownLinkProps} linkText="Mat" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Oddstips (annonsørinnhold)" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Tipping (annonsørinnhold)" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Lotteri (annonsørinnhold)" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="Se.no" url="#" />
						<LinkBarLink {...dropDownLinkProps} linkText="DinSide.no" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Leserreiser (annonsørinnhold)" url="#" />
						<LinkBarLink {...paidDDLinkProps} linkText="Rabattkoder (annonsørinnhold)" url="#" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
			</VerySpecialLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	LinkBarLink,
	XSmallLinkBarLink,
	LargeLinkBarLink,
	LargeLinkBarDropdown,
	HorizontalLinkBar,
	DagbladetLogo,
	VerticalLinkBar,
	Row,
	Col,
} from '@aller/shiny';

const linkProps = {
	useUnderline: false,
	activeBackground: 'primaryDark',
	textColor: 'white',
	ALLCAPS: true,
};
const dropDownLinkProps = {
	useUnderline: false,
	activeBackground: 'rgba(0,0,0,0.05)',
};
const paidDDLinkProps = Object.assign({}, dropDownLinkProps, {
	rel: 'nofoollow',
});

const PaddedHeading = styled(SmallHeading)\`
	padding-left: \${getVariable('horizontalBase')};
	padding-right: \${getVariable('horizontalBase')};
	color: \${getColor('primary')};
\`;

const VerySpecialLinkBar= styled(HorizontalLinkBar)\`
	justify-content: space-between;

	@media (min-width: \${props => props.theme.flexboxgrid.breakpoints.lg}em) {
		justify-content: flex-start;
	}
\`;

const FlexCol = styled(Col)\`
	&& {
		display: flex;
		flex-direction: column;
	}
\`;

<VerySpecialLinkBar
	backgroundColor="splashColor"
	overflow="visible"
	shouldFlexChildren
>
	<SmallLinkBarLink {...linkProps} isBlockLink style={{ maxWidth: '14.6rem' }}>
		<DagbladetLogo background="transparent" />
	</SmallLinkBarLink>
	<LargeLinkBarDropdown {...linkProps} linkText="Innhold" xs={false} lg>
		<VerticalLinkBar backgroundColor="white">
			<LinkBarLink {...dropDownLinkProps} linkText="Nyheter"  url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Sport"    url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Kultur"   url="#" isActive />
			<LinkBarLink {...dropDownLinkProps} linkText="Økonomi"  url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Kjendis"  url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Reise"    url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Bil"      url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Meninger" url="#" />
		</VerticalLinkBar>
	</LargeLinkBarDropdown>
	<LargeLinkBarLink {...linkProps} linkText="Video" url="https://example.com" isActive xs={false} lg />
	<LargeLinkBarDropdown {...linkProps} linkText="Pluss" xs={false} lg>
		<VerticalLinkBar backgroundColor="white">
			<LinkBarLink {...dropDownLinkProps} linkText="Forsiden"      url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="I dag"         url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Magasinet"     url="#" isActive />
			<LinkBarLink {...dropDownLinkProps} linkText="Søk i arkivet" url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Kultur"        url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Nyheter"       url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Sport"         url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="eAvis"         url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Kundeservice"  url="#" />
		</VerticalLinkBar>
	</LargeLinkBarDropdown>
	<LargeLinkBarDropdown {...linkProps} linkText="Snarveier" xs={false} lg>
		<VerticalLinkBar backgroundColor="white">
			<LinkBarLink {...dropDownLinkProps} linkText="Tegneserier"                 url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Været"                       url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Fotballstudio"               url="#" />
			<LinkBarLink
				{...dropDownLinkProps}
				linkText="FourFourTwo"
				url="#"
				isActive
			/>
			<LinkBarLink {...dropDownLinkProps} linkText="Mat"                         url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Oddstips (annonsørinnhold)"    url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Tipping (annonsørinnhold)"     url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Lotteri (annonsørinnhold)"     url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Se.no"                       url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="DinSide.no"                  url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Leserreiser (annonsørinnhold)" url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Rabattkoder (annonsørinnhold)" url="#" />
		</VerticalLinkBar>
	</LargeLinkBarDropdown>
	<LargeLinkBarDropdown {...linkProps} position="static" linkText="Meny" xs lg={false}>
		<VerticalLinkBar backgroundColor="white">
			<PaddedHeading ALLCAPS>Min profil</PaddedHeading>
			<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/pluss/logg_inn/" linkText="Logg inn" />
			<PaddedHeading ALLCAPS>Seksjoner</PaddedHeading>
			<Row>
				<FlexCol xs={6}>
					<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/nyheter/" linkText="Nyheter" />
					<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/kultur/" linkText="Kultur" />
					<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/sport/" linkText="Sport" />
					<LinkBarLink {...dropDownLinkProps} href="https://www.dinside.no/motor/" linkText="Bil" />
				</FlexCol>
				<FlexCol xs={6}>
					<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/reise/" linkText="Reise" />
					<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/meninger/" linkText="Meninger" />
					<LinkBarLink {...dropDownLinkProps} href="https://www.dagbladet.no/pluss/" linkText="Pluss" />
					<LinkBarLink {...dropDownLinkProps} href="https://dbtv.no" linkText="DBTV" />
				</FlexCol>
			</Row>
			<PaddedHeading ALLCAPS>Snarveier</PaddedHeading>
			<LinkBarLink {...dropDownLinkProps} linkText="Tegneserier"                 url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Været"                       url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Fotballstudio"               url="#" />
			<LinkBarLink
				{...dropDownLinkProps}
				linkText="FourFourTwo"
				url="#"
				isActive
			/>
			<LinkBarLink {...dropDownLinkProps} linkText="Mat"                         url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Oddstips (annonsørinnhold)"    url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Tipping (annonsørinnhold)"     url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Lotteri (annonsørinnhold)"     url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Se.no"                       url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="DinSide.no"                  url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Leserreiser (annonsørinnhold)" url="#" />
			<LinkBarLink {...paidDDLinkProps} linkText="Rabattkoder (annonsørinnhold)" url="#" />
		</VerticalLinkBar>
	</LargeLinkBarDropdown>
</VerySpecialLinkBar>
				`}
		</Code>
	</section>
);

export { DagbladetStory };

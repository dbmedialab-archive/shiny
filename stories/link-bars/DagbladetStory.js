import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';

import {
	LinkBarLink,
	XSmallLinkBarLink,
	LargeLinkBarLink,
	LargeLinkBarDropdown,
	HorizontalLinkBar,
	DagbladetLogo,
	VerticalLinkBar,
} from '../..';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

const linkProps = {
	useUnderline: false,
	activeBackground: '#bd0000',
	textColor: 'white',
};
const dropDownLinkProps = {
	useUnderline: false,
	activeBackground: 'rgba(0,0,0,0.05)',
};
const paidDDLinkProps = Object.assign({}, dropDownLinkProps, {
	rel: 'nofoollow',
});

const DagbladetStory = () => (
	<section>
		<HugeHeading>HorizontalLinkBar</HugeHeading>
		<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar
				background="#d60000"
				overflow="visible"
			>
				<XSmallLinkBarLink style={{ maxWidth: '16.6rem' }}>
					<DagbladetLogo background="transparent" />
				</XSmallLinkBarLink>
				<LargeLinkBarDropdown {...linkProps} linkText="Innhold">
					<VerticalLinkBar background={colors.white}>
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
				<LargeLinkBarLink {...linkProps} linkText="Video" url="https://example.com" isActive	/>
				<LargeLinkBarDropdown {...linkProps} linkText="Pluss">
					<VerticalLinkBar background={colors.white}>
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
				<LargeLinkBarDropdown {...linkProps} linkText="Snarveier">
					<VerticalLinkBar background={colors.white}>
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
			</HorizontalLinkBar>
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
} from '@aller/shiny';

const linkProps = {
	useUnderline: false,
	activeBackground: '#bd0000',
	textColor: 'white',
};
const dropDownLinkProps = {
	useUnderline: false,
	activeBackground: 'rgba(0,0,0,0.05)',
};
const paidDDLinkProps = Object.assign({}, dropDownLinkProps, {
	rel: 'nofoollow',
});

<HorizontalLinkBar
	background="#d60000"
	overflow="visible"
>
	<XSmallLinkBarLink style={{ maxWidth: '16.6rem' }}>
		<DagbladetLogo background="transparent" />
	</XSmallLinkBarLink>
	<LargeLinkBarDropdown {...linkProps} linkText="Innhold">
		<VerticalLinkBar background={colors.white}>
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
	<LargeLinkBarLink {...linkProps} linkText="Video" url="https://example.com" isActive	/>
	<LargeLinkBarDropdown {...linkProps} linkText="Pluss">
		<VerticalLinkBar background={colors.white}>
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
	<LargeLinkBarDropdown {...linkProps} linkText="Snarveier">
		<VerticalLinkBar background={colors.white}>
			<LinkBarLink {...dropDownLinkProps} linkText="Tegneserier"                 url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Været"                       url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="Fotballstudio"               url="#" />
			<LinkBarLink {...dropDownLinkProps} linkText="FourFourTwo"                 url="#"
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
</HorizontalLinkBar>
				`}
		</Code>
	</section>
);

export { DagbladetStory };

import React from 'react';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';

import {
	Code,
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
						<LinkBarLink {...dropDownLinkProps} linkText="Nyheter" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Sport" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kultur" url="https://example.com" isActive />
						<LinkBarLink {...dropDownLinkProps} linkText="Økonomi" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kjendis" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Reise" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Bil" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Meninger" url="https://example.com" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
				<LargeLinkBarLink {...linkProps} linkText="Video" url="https://example.com" isActive	/>
				<LargeLinkBarDropdown {...linkProps} linkText="Pluss">
					<VerticalLinkBar background={colors.white}>
						<LinkBarLink {...dropDownLinkProps} linkText="Forsiden" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="I dag" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Magasinet" url="https://example.com" isActive />
						<LinkBarLink {...dropDownLinkProps} linkText="Søk i arkivet" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kultur" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Nyheter" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Sport" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="eAvis" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Kundeservice" url="https://example.com" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
				<LargeLinkBarDropdown {...linkProps} linkText="Snarveier">
					<VerticalLinkBar background={colors.white}>
						<LinkBarLink {...dropDownLinkProps} linkText="Tegneserier" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Været" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Fotballstudio" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="FourFourTwo" url="https://example.com" isActive />
						<LinkBarLink {...dropDownLinkProps} linkText="Mat" url="https://example.com" />
						<LinkBarLink {...paidDDLinkProps} linkText="Oddstips (annonsørinnhold)" url="https://example.com" />
						<LinkBarLink {...paidDDLinkProps} linkText="Tipping (annonsørinnhold)" url="https://example.com" />
						<LinkBarLink {...paidDDLinkProps} linkText="Lotteri (annonsørinnhold)" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="Se.no" url="https://example.com" />
						<LinkBarLink {...dropDownLinkProps} linkText="DinSide.no" url="https://example.com" />
						<LinkBarLink {...paidDDLinkProps} linkText="Leserreiser (annonsørinnhold)" url="https://example.com" />
						<LinkBarLink {...paidDDLinkProps} linkText="Rabattkoder (annonsørinnhold)" url="https://example.com" />
					</VerticalLinkBar>
				</LargeLinkBarDropdown>
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarLink,
	LinkBarDropdown,
	VerticalLinkBar,
} from '@aller/shiny';

TODO :)
				`}
		</Code>
	</section>
);

export { DagbladetStory };

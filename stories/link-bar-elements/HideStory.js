import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { DemoContainer } from '../storybook-components';

import {
	HorizontalLinkBar,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
} from '../../src';

const HideStory = () => (
	<section>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<SmallLinkBarLink linkText="All screens" url="https://example.com" />
				<SmallLinkBarLink md={false} linkText="xs and sm screens" url="https://example.com" />
				<SmallLinkBarLink xs={false} sm linkText="sm, md and lg screens" url="https://example.com" />
				<SmallLinkBarLink xs={false} md linkText="md and lg screens" url="https://example.com" />
				<SmallLinkBarLink xs={false} lg linkText="lg screens" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="All screens" url="https://example.com" />
				<LinkBarLink md={false} linkText="xs and sm screens" url="https://example.com" />
				<LinkBarLink xs={false} sm linkText="sm, md and lg screens" url="https://example.com" />
				<LinkBarLink xs={false} md linkText="md and lg screens" url="https://example.com" />
				<LinkBarLink xs={false} lg linkText="lg screens" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LargeLinkBarLink linkText="All screens" url="https://example.com" />
				<LargeLinkBarLink md={false} linkText="xs and sm screens" url="https://example.com" />
				<LargeLinkBarLink xs={false} sm linkText="sm, md and lg screens" url="https://example.com" />
				<LargeLinkBarLink xs={false} md linkText="md and lg screens" url="https://example.com" />
				<LargeLinkBarLink xs={false} lg linkText="lg screens" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
	</section>
);

export default withInfo({
	text: `
<Paragraph>Hidden LinkBar elements</Paragraph>
<Paragraph>Elements in VerticalLinkBar and HorizontalLinkBar can be hidden with
	props that resemble the Col props.
</Paragraph>
<Paragraph>Set xs, sm, md or lg to false, and the element will be
	hidden from that breakpoint and up.
</Paragraph>
<Paragraph>Override with a higher breakpoint.</Paragraph>
	`,
})(HideStory);

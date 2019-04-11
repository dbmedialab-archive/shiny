import React from 'react';

import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';
import {
	Heading, HugeHeading,
	Paragraph,
	LinkBarLink,
	VerticalLinkBar,
	HorizontalLinkBar,
	SmallLinkBarHeading,
} from '../../src';

const VerticalLinkBarStory = () => (
	<section>
		<HugeHeading>VerticalLinkBar</HugeHeading>
		<Paragraph>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<VerticalLinkBar key={1}>
					<SmallLinkBarHeading key={0} position={1}>Some head</SmallLinkBarHeading>
					{[
						{ linkText: 'One', url: 'https://example.com' },
						{ linkText: 'Two', url: 'https://example.com' },
						{ linkText: 'Buckle My Shoe', url: 'https://example.com' },
					].map(({ linkText, url }, i) => <LinkBarLink position={i} key={linkText} linkText={linkText} url={url} />)}
				</VerticalLinkBar>
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>

		<Code language="jsx">
			{`
<VerticalLinkBar>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</VerticalLinkBar>
			`}
		</Code>
	</section>
);
export { VerticalLinkBarStory };

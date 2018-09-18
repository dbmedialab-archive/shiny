import React from 'react';
import { DemoContainer } from '../storybook-components';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '../../src';

const LinkStory = () => (
	<section>
		<HugeHeading>LinkBarLink</HugeHeading>
		<p>Provides links (<code>&lt;a&gt;</code> tags) for HorizontalLinkBar.</p>
		<p>You can remove the underline and change the active background with props.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
				<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar backgroundColor="white">
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
						`}
		</Code>

		<Heading>Props</Heading>
		<table>
			<thead>
				<tr>
					<th>Prop</th>
					<th>Description</th>
					<th>Required/optional</th>
					<th>Type</th>
					<th>default</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>isActive</th>
					<td>Flag a selected or otherwise active link item</td>
					<td>optional</td>
					<td>boolean</td>
					<td>false</td>
				</tr>
				<tr>
					<th>linkText</th>
					<td>Text to display in the link. Can be overriden with the <em>children</em> prop.</td>
					<td>optional</td>
					<td>string</td>
					<td>&quot;Manglende lenketekst&quot;</td>
				</tr>
				<tr>
					<th>activeBackgroundColor</th>
					<td>Color of the background on links that have the <em>isActive</em> flag set.</td>
					<td>optional</td>
					<td>String matching a theme color name</td>
					<td>&quot;transparent&quot;</td>
				</tr>
				<tr>
					<th>size</th>
					<td>
						<em>LinkBarLink</em> comes in different sizes, matching other LinkBar* item sizes. For instance: A
						<em>SmallLinkBarLink</em> and a <em>SmallLinkBarButton</em> will have the same height.
					</td>
					<td>optional</td>
					<td>one of xsmall, small, medium, large</td>
					<td>medium</td>
				</tr>
				<tr>
					<th>url</th>
					<td>Where the user will be sent if following the link</td>
					<td>optional</td>
					<td>URL string</td>
					<td>&quot;#&quot;</td>
				</tr>
				<tr>
					<th>useUnderline</th>
					<td>Flag to display fancy underline animation on hover</td>
					<td>optional</td>
					<td>boolean</td>
					<td>true</td>
				</tr>
			</tbody>
		</table>

	</section>
);

export { LinkStory };

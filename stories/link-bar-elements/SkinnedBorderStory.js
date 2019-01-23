import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { DemoContainer } from '../storybook-components';

import {
	HorizontalLinkBar,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
} from '../../src';

const SkinnedBorderStory = () => (
	<section>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<SmallLinkBarLink linkText="Sport" url="https://example.com" />
				<SmallLinkBarLink linkText="Underholdning" url="https://example.com" />
				<SmallLinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
				<SmallLinkBarLink isActive linkText="Sport" url="https://example.com" />
				<SmallLinkBarLink isActive linkText="Underholdning" url="https://example.com" />
				<SmallLinkBarLink isActive linkText="Primary" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink linkText="Sport" url="https://example.com" />
				<LinkBarLink linkText="Underholdning" url="https://example.com" />
				<LinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
				<LinkBarLink isActive linkText="Sport" url="https://example.com" />
				<LinkBarLink isActive linkText="Underholdning" url="https://example.com" />
				<LinkBarLink isActive linkText="Primary" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LargeLinkBarLink linkText="Sport" url="https://example.com" />
				<LargeLinkBarLink linkText="Underholdning" url="https://example.com" />
				<LargeLinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
				<LargeLinkBarLink isActive linkText="Sport" url="https://example.com" />
				<LargeLinkBarLink isActive linkText="Underholdning" url="https://example.com" />
				<LargeLinkBarLink isActive linkText="Primary" url="https://example.com" />
			</HorizontalLinkBar>
		</DemoContainer>
	</section>
);

export default withInfo({
	text: `
<p>If the <code>linkText</code> prop corresponds with a property that exists in your theme
			under <code>colors.skinColors</code>, then that color will be used for the default state indicating bottom
			border. Hover inactive items for an animated effect.
</p>
	`,
})(SkinnedBorderStory);

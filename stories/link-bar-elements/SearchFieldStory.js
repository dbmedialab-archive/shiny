import React from 'react';
import { withInfo } from '@storybook/addon-info';

// HorizontalLinkBar
import {
	HorizontalLinkBar,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
	LinkBarSearchField,
	SmallLinkBarSearchField,
	LargeLinkBarSearchField,
} from '../../src';

const SearchFieldStory = () => (
	<section>
		<HorizontalLinkBar backgroundColor="grayTintLighter">
			<SmallLinkBarLink linkText="One" url="https://example.com" isActive />
			<SmallLinkBarLink linkText="Two" url="https://example.com" />
			<SmallLinkBarSearchField placeholder="Search My Shoe" backgroundColor="white" />
		</HorizontalLinkBar>
		<div>-</div>
		<HorizontalLinkBar backgroundColor="grayTintLighter">
			<LinkBarLink linkText="One" url="https://example.com" isActive />
			<LinkBarLink linkText="Two" url="https://example.com" />
			<LinkBarSearchField
				placeholder="Search My Shoe"
				backgroundColor="white"
			/>
		</HorizontalLinkBar>
		<div>-</div>
		<HorizontalLinkBar backgroundColor="grayTintLighter">
			<LargeLinkBarLink linkText="One" url="https://example.com" isActive />
			<LargeLinkBarLink linkText="Two" url="https://example.com" />
			<LargeLinkBarSearchField placeholder="Search My Shoe" backgroundColor="white" />
		</HorizontalLinkBar>
	</section>
);

export default withInfo('LinkBarSearchField is a search field for link bars.')(SearchFieldStory);

import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { DemoContainer } from '../storybook-components';

import {
	HorizontalLinkBar,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
} from '../../src';

const StateIndicationStory = () => (
	<section>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<SmallLinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="One"
					url="https://example.com"
					isActive
				/>
				<SmallLinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="Two"
					url="https://example.com"
				/>
				<SmallLinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="Buckle My Shoe"
					url="https://example.com"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="One"
					url="https://example.com"
					isActive
				/>
				<LinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="Two"
					url="https://example.com"
				/>
				<LinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="Buckle My Shoe"
					url="https://example.com"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<LargeLinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="One"
					url="https://example.com"
					isActive
				/>
				<LargeLinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="Two"
					url="https://example.com"
				/>
				<LargeLinkBarLink
					useUnderline={false}
					activeBackgroundColor="pinkLight"
					linkText="Buckle My Shoe"
					url="https://example.com"
				/>
			</HorizontalLinkBar>
		</DemoContainer>
	</section>
);

export default withInfo({
	text: `
<p>LinkBarLink with alternative state indication</p>
<p>You can remove the underline and change the active background with props.</p>
	`,
})(StateIndicationStory);

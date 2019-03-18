import React from 'react';
import { withInfo } from '@storybook/addon-info';
import {
	HorizontalLinkBar,
	LinkBarDropdown,
	LinkBarLink,
	MenuLayer,
} from '../../src';


const Story = () => {
	return (
		<section>
			<HorizontalLinkBar>
				<LinkBarDropdown linkText="Under Button" url="https://example.com">
					<MenuLayer left="inherit" backgroundColor="primary">
						<LinkBarLink useUnderline={false} textColor="white" linkText="One" url="https://example.com" isActive />
						<LinkBarLink useUnderline={false} textColor="white" linkText="Two" url="https://example.com" />
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown linkText="Full width" url="https://example.com">
					<MenuLayer backgroundColor="primary">
						<LinkBarLink useUnderline={false} textColor="white" linkText="One" url="https://example.com" isActive />
						<LinkBarLink useUnderline={false} textColor="white" linkText="Two" url="https://example.com" />
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown linkText="On the right side" url="https://example.com">
					<MenuLayer width="auto" left="inherit" right="0" backgroundColor="primaryLighter">
						<LinkBarLink useUnderline={false} linkText="One" url="https://example.com" isActive />
						<LinkBarLink useUnderline={false} linkText="Two" url="https://example.com" />
					</MenuLayer>
				</LinkBarDropdown>
			</HorizontalLinkBar>
		</section>
	);
};

export default withInfo({
	text: `
<p>
	Component with Css rule "position: fixed" and predefined animation and shadow.
</p>
<p>
	Usefull as fixed menu layer with Header and LinkBarDropdown.
</p>
	`,
})(Story);

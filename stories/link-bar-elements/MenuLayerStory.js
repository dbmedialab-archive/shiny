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
						<HorizontalLinkBar backgroundColor="primary">
							<LinkBarLink useUnderline={false} textColor="white" linkText="One" url="https://example.com" isActive />
							<LinkBarLink useUnderline={false} textColor="white" linkText="Two" url="https://example.com" />
						</HorizontalLinkBar>
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown linkText="Full width" url="https://example.com">
					<MenuLayer left={0} backgroundColor="primary">
						<HorizontalLinkBar backgroundColor="primary">
							<LinkBarLink useUnderline={false} textColor="white" linkText="One" url="https://example.com" isActive />
							<LinkBarLink useUnderline={false} textColor="white" linkText="Two" url="https://example.com" />
						</HorizontalLinkBar>
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown linkText="On the right side" url="https://example.com">
					<MenuLayer width="auto" left="inherit" right="0" backgroundColor="primaryLighter">
						<HorizontalLinkBar backgroundColor="primary">
							<LinkBarLink useUnderline={false} textColor="white" linkText="One" url="https://example.com" isActive />
							<LinkBarLink useUnderline={false} textColor="white" linkText="Two" url="https://example.com" />
						</HorizontalLinkBar>
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

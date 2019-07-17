import React from 'react';

import PropTypes from 'prop-types';
import { withInfo } from '@storybook/addon-info';

import {
	HorizontalLinkBar,
	LinkBarLink,
	SmallLinkBarLink,
	LargeLinkBarLink,
	LinkBarDropdown,
	SmallLinkBarDropdown,
	LargeLinkBarDropdown,
	VerticalLinkBar,
	LinkBarButton,
	SvgIcon,
} from '../../src';

import { DemoContainer } from '../storybook-components';

const CustomTrigger = ({ onClick, className }) => (
	<button type="button" onClick={onClick} className={className}>This dropdown has custom trigger</button>
);


CustomTrigger.displayName = 'CustomTrigger';

CustomTrigger.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
};

const CustomTriggerWithMenuButton = ({ hide, ...rest }) => (
	<LinkBarButton {...rest}>
		This Trigger has SvgIcon `hamburger` <SvgIcon name="hamburger" size={2} opened={!hide} />
	</LinkBarButton>
);
CustomTriggerWithMenuButton.propTypes = { hide: PropTypes.bool.isRequired };
const DropdownStory = () => {
	return (
		<section>
			<DemoContainer>
				<HorizontalLinkBar overflow="visible">
					<SmallLinkBarLink linkText="One" url="https://example.com" isActive />
					<SmallLinkBarLink linkText="Two" url="https://example.com" />
					<SmallLinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</SmallLinkBarDropdown>
					<SmallLinkBarDropdown
						linkText="This dropdown is aligned to the right"
						url="https://example.com"
						displayInitially
					>
						<VerticalLinkBar backgroundColor="white" align="right">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</SmallLinkBarDropdown>
					<SmallLinkBarDropdown Trigger={CustomTrigger} displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</SmallLinkBarDropdown>
					<SmallLinkBarDropdown Trigger={CustomTriggerWithMenuButton} displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</SmallLinkBarDropdown>
				</HorizontalLinkBar>
			</DemoContainer>
			<DemoContainer>
				<HorizontalLinkBar overflow="visible">
					<LinkBarLink linkText="One" url="https://example.com" isActive />
					<LinkBarLink linkText="Two" url="https://example.com" />
					<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LinkBarDropdown>
					<LinkBarDropdown
						linkText="This dropdown is aligned to the right"
						url="https://example.com"
						displayInitially
					>
						<VerticalLinkBar backgroundColor="white" align="right">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LinkBarDropdown>
					<LinkBarDropdown Trigger={CustomTrigger} displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LinkBarDropdown>
				</HorizontalLinkBar>
			</DemoContainer>
			<DemoContainer>
				<HorizontalLinkBar overflow="visible">
					<LargeLinkBarLink linkText="One" url="https://example.com" isActive />
					<LargeLinkBarLink linkText="Two" url="https://example.com" />
					<LargeLinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarDropdown linkText="Nested Dropdown!" url="https://example.com" displayInitially zIndex={9}>
								<VerticalLinkBar backgroundColor="white">
									<LinkBarLink linkText="One" url="https://example.com" isActive />
									<LinkBarLink linkText="Two" url="https://example.com" />
								</VerticalLinkBar>
							</LinkBarDropdown>
							<LinkBarLink linkText="Three" url="https://example.com" />
							<LinkBarLink linkText="Four" url="https://example.com" />
							<LinkBarLink linkText="Five" url="https://example.com" />
						</VerticalLinkBar>
					</LargeLinkBarDropdown>
					<LargeLinkBarDropdown
						linkText="This dropdown is aligned to the right"
						url="https://example.com"
						displayInitially
					>
						<VerticalLinkBar backgroundColor="white" align="right">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LargeLinkBarDropdown>
					<LargeLinkBarDropdown Trigger={CustomTrigger} displayInitially>
						<VerticalLinkBar backgroundColor="white">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LargeLinkBarDropdown>
				</HorizontalLinkBar>
			</DemoContainer>
		</section>
	);
};

export default withInfo({
	text: `
<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>
<p>The dropdowns will be collapsed if focus leaves the dropdown, most often on a click or keypress (tab)
	event.
</p>
	`,
})(DropdownStory);

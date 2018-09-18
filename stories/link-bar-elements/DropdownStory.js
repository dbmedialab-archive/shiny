import React from 'react';
import PropTypes from 'prop-types';

import { linkTo } from '@storybook/addon-links';

import { DemoContainer } from '../storybook-components';

import {
	// For the story
	Heading,
	HugeHeading,

	// For this component specifically
	LinkBarLink,
	LinkBarDropdown,
	HorizontalLinkBar,
	VerticalLinkBar,
} from '../../src';

import { Code } from '../../src/atoms/Code';
import theme from '../../src/themes/default-theme';

const { colors } = theme;

const CustomTrigger = ({ onClick, className }) => (
	<button type="button" onClick={onClick} className={className}>This dropdown has custom trigger</button>
);

CustomTrigger.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string.isRequired,
};

const DropdownStory = () => {
	return (
		<section>
			<HugeHeading>HorizontalLinkBar</HugeHeading>
			<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>
			<p>The dropdowns will be collapsed if focus leaves the dropdown, most often on a click or keypress (tab)
				event.
			</p>

			<Heading>Demo</Heading>
			<DemoContainer>
				<HorizontalLinkBar overflow="visible">
					<LinkBarLink linkText="One" url="https://example.com" isActive />
					<LinkBarLink linkText="Two" url="https://example.com" />
					<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
						<VerticalLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LinkBarDropdown>
					<LinkBarDropdown
						linkText="This dropdown is aligned to the right"
						url="https://example.com"
						displayInitially
					>
						<VerticalLinkBar background={colors.white} align="right">
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LinkBarDropdown>
					<LinkBarDropdown Trigger={CustomTrigger} displayInitially>
						<VerticalLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
						</VerticalLinkBar>
					</LinkBarDropdown>
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

	const CustomTrigger = ({ onClick, className }) => (
		<button type="button" onClick={onClick} className={className}>This dropdown has custom trigger</button>
	);

	<HorizontalLinkBar overflow="visible">
		<LinkBarLink linkText="One" url="https://example.com" isActive />
		<LinkBarLink linkText="Two" url="https://example.com" />
		<LinkBarDropdown linkText="Drop Down My Shoe" url="https://example.com" displayInitially>
			<VerticalLinkBar background={colors.white}>
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
			</VerticalLinkBar>
		</LinkBarDropdown>
		<LinkBarDropdown linkText="This dropdown is aligned to the right" url="https://example.com" displayInitially>
			<VerticalLinkBar background={colors.white} align="right">
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
			</VerticalLinkBar>
		</LinkBarDropdown>
		<LinkBarDropdown Trigger={CustomTrigger} displayInitially>
			<VerticalLinkBar background={colors.white}>
				<LinkBarLink linkText="One" url="https://example.com" isActive />
				<LinkBarLink linkText="Two" url="https://example.com" />
			</VerticalLinkBar>
		</LinkBarDropdown>
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
						<th>displayInitially</th>
						<td>Expands the menu by default</td>
						<td>optional</td>
						<td>boolean</td>
						<td>false</td>
					</tr>
					<tr>
						<th>...</th>
						<td>For other props, see the
							<button
								type="button"
								onClick={linkTo('Link bars', 'LinkBarLink')}
							>
								LinkBarLink
							</button>{' '}
						component.
						</td>
						<td />
						<td />
						<td />
					</tr>
				</tbody>
			</table>
		</section>
	);
};

export { DropdownStory };

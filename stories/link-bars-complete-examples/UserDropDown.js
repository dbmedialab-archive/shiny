import React from 'react';
import styled from '@emotion/styled';
import {
	HorizontalLinkBar,
	LinkBarDropdown,
	MenuLayer,
	Heading,
	HugeHeading,
	Paragraph,
} from '../../src';
import UserDropDown from '../../src/organisms/UserDropdown';
import { DemoContainer } from '../storybook-components';
import { Code } from '../../src/atoms/Code';


const linkProps = {
	useUnderline: false,
	textColor: 'darkness',
	activeTextColor: 'darkness',
	ALLCAPS: true,
};
const StyledHorizontalLinkBar = styled(HorizontalLinkBar)`
	justify-content: space-between;
`;
const UserDropDownExample = () => (
	<section>
		<HugeHeading>User Dropdown Example</HugeHeading>
		<Paragraph>ManuLayer has position fixed, configurable by props: left, right, top, bottom</Paragraph>
		<Heading>Demo</Heading>
		<DemoContainer>
			<StyledHorizontalLinkBar
				backgroundColor="primary"
				shouldFlexChildren
				isTopLevelComponent={false}
			>
				<LinkBarDropdown
					{...linkProps}
					isListItem
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<MenuLayer width="25rem">
						<UserDropDown
							fontSize="uiSmallSize"
							position="static"
							user={{ name: 'User Name' }}
						/>
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown
					{...linkProps}
					isListItem
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<MenuLayer width="20rem">
						<UserDropDown
							fontSize="uiTinySize"
							position="static"
							user={{ name: 'User Name' }}
						/>
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown
					{...linkProps}
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<MenuLayer right={0} width="30rem">
						<UserDropDown
							align="right"
							user={{ name: 'User Name' }}
						/>
					</MenuLayer>
				</LinkBarDropdown>
			</StyledHorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
			<StyledHorizontalLinkBar
				backgroundColor="primary"
				shouldFlexChildren
				isTopLevelComponent={false}
			>
				<LinkBarDropdown
					{...linkProps}
					isListItem
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<MenuLayer width="25rem">
						<UserDropDown
							fontSize="uiSmallSize"
							position="static"
							user={{ name: 'User Name' }}
						/>
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown
					{...linkProps}
					isListItem
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<MenuLayer width="20rem">
						<UserDropDown
							fontSize="uiTinySize"
							position="static"
							user={{ name: 'User Name' }}
						/>
					</MenuLayer>
				</LinkBarDropdown>
				<LinkBarDropdown
					{...linkProps}
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<MenuLayer right={0} width="30rem">
						<UserDropDown
							align="right"
							user={{ name: 'User Name' }}
						/>
					</MenuLayer>
				</LinkBarDropdown>
			</StyledHorizontalLinkBar>
			`}
		</Code>
	</section>
);


export { UserDropDownExample };

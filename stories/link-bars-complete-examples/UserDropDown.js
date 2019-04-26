import React from 'react';
import styled from '@emotion/styled';
import {
	HorizontalLinkBar,
	LinkBarDropdown,
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
		<Paragraph>Position fixed, configurable by props: left, right, top, bottom</Paragraph>
		<Heading>Demo</Heading>
		<DemoContainer>
			<StyledHorizontalLinkBar
				backgroundColor="primary"
				shouldFlexChildren
				isTopLevelComponent={false}
			>
				<LinkBarDropdown
					{...linkProps}
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<UserDropDown user={{ name: 'User Name' }} />
				</LinkBarDropdown>
				<LinkBarDropdown
					{...linkProps}
					textColor="white"
					activeTextColor="white"
					linkText={'Test dropddown'}
				>
					<UserDropDown right={0} user={{ name: 'User Name' }} />
				</LinkBarDropdown>
			</StyledHorizontalLinkBar>
		</DemoContainer>
		<Code language="jsx">
			{`
				<HorizontalLinkBar
					backgroundColor="primary"
					shouldFlexChildren
					isTopLevelComponent={false}
				>
					<LinkBarDropdown
						{...linkProps}
						textColor="white"
						activeTextColor="white"
						id="dagbladet-user-dropdown"
						linkText={'Test dropddown'}
					>
						<UserDropDown user={{ name: 'User Name' }} />
					</LinkBarDropdown>
				</HorizontalLinkBar>
			`}
		</Code>
	</section>
);


export { UserDropDownExample };

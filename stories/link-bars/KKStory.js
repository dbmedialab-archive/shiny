import React from 'react';
import styled from 'styled-components';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';

import {
	SmallLinkBarLink,
	HorizontalLinkBar,
	KKLogo,
	LargeLinkBarDropdown,
	LinkBarLink,
	FrontSmallHeading,
	IconWithText,
	Button,
	SearchField,
	ButtonWithModal,
} from '../..';


import theme from '../../src/themes/default-theme';

const { colors } = theme;

const customStyles = {
	content: {
		top: '55%',
		left: '0',
		right: 'auto',
		bottom: 'auto',
		marginRight: '0',
		transform: '',
		background: 'white',
		position: 'absolute',
		width: '100%',
		height: '100%',
		border: 'none',
	},
};

const logoProps = {
	useUnderline: true,
	activeBackground: 'transparent',
	textColor: 'black',
	isActive: true,
	size: 'large',
};

const dropDownLinkProps = {
	useUnderline: false,
	activeBackground: 'transparent',
	linkText: 'Meny',
	width: '100%',
	position: 'static',
	display: 'flex',
	justifySelf: 'flex-start',
	marginRight: 'auto',
};

const linkProps = {
	useUnderline: false,
	activeBackground: 'transparent',
	position: 'static',
	flex: '0 0 50%',
};

const Menu = styled.div`
	width: 100%;
	background: white;
	position: absolute;
`;

const SearchWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	font-size: 44px;
`;

const SearchControls = styled.div`
	width: 55%;
	border-bottom: 2px solid black;
`;

const KKButton = Button.extend`
	color: black;
	width: 50px;
	height: 50px;
	outline-color: tomato;
	background: #fff;
`;

const KKStory = () => (
	<section>
		<HugeHeading>KK Header</HugeHeading>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar
				background="#fff"
				overflow="visible"
				shouldFlexChildren
				justifyContent="space-between"
			>
				<LargeLinkBarDropdown {...dropDownLinkProps} xs={false} md displayInitially>
					<Menu>
						<FrontSmallHeading>
								Redaksjonelt innhold
						</FrontSmallHeading>
						<HorizontalLinkBar
							background={colors.white}
							barWidth="100%"
							childrenWidth="50%"
							isTopLevelComponent={false}
							shouldFlexChildren
							position="static"
							showToggleDropdownArrow={false}
							shouldWrap
							shadow="none"
						>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Helse, kosthold & trening"
									circleText="HE"
									position="right"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Showbiz & royal" circleText="sr" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Living" circleText="li" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Mat" circleText="ma" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Livet mitt" circleText="lm" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Meninger" circleText="me" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Mote & skjønnhet" circleText="mo" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Jobb, karriere & økonomi"
									circleText="jo"
									position="right"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Mamma" circleText="mm" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Reise" circleText="re" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Horoskop" circleText="ho" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Sex og -samliv" circleText="ss" position="right" />
							</LinkBarLink>
						</HorizontalLinkBar>
						<FrontSmallHeading>
								KOMMERSIELT INNHOLD
						</FrontSmallHeading>
						<HorizontalLinkBar
							background={colors.white}
							barWidth="100%"
							childrenWidth="50%"
							isTopLevelComponent={false}
							shouldFlexChildren
							position="static"
							showToggleDropdownArrow={false}
							shouldWrap
							shadow="none"
						>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Shopping"
									circleText="Sh"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="KK-mila"
									circleText="kk"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Rabattkoder"
									circleText="ra"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Abonnèr på KK"
									circleText="kk"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
						</HorizontalLinkBar>
					</Menu>
				</LargeLinkBarDropdown>
				<SmallLinkBarLink {...logoProps} useUnderline={false} isBlockLink style={{ maxWidth: '14.6rem' }}>
					<KKLogo background="transparent" />
				</SmallLinkBarLink>

				<ButtonWithModal
					Button={KKButton}
					customStyles={customStyles}
					openedIcon="wrong"
					closedIcon="search"
					rootElement="#root"
				>
					<SearchWrapper>
						<SearchControls>
							<SearchField
								marginBottom="0"
								iconSize="2rem"
								fontSize="3rem"
								shadow="none"
								color="#888"
								backgroundColor="#fff"
								handleSearchTextChange={() => {}}
								handleUserTypedSearch={() => {}}
								searchText="Hva søker du etter"
								searchTextVisible
								isLoading={false}
								xs={false}
								md
							/>
						</SearchControls>
					</SearchWrapper>
				</ButtonWithModal>
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	SmallLinkBarLink,
	HorizontalLinkBar,
	KKLogo,
	LargeLinkBarDropdown,
	VerticalLinkBar,
	LinkBarLink,
	FrontSmallHeading,
	IconWithText,
	Button,
	SearchField,
	ButtonWithModal,
} from '../..';


import theme from '../../src/themes/default-theme';

const { colors } = theme;

const customStyles = {
	content: {
		top: '55%',
		left: '0',
		right: 'auto',
		bottom: 'auto',
		marginRight: '0',
		transform: '',
		background: 'white',
		position: 'absolute',
		width: '100%',
		height: '100%',
		border: 'none',
		zIndex: '9999',
	},
};

const logoProps = {
	useUnderline: true,
	activeBackground: 'transparent',
	textColor: 'black',
	isActive: true,
	size: 'large',
};

const dropDownLinkProps = {
	useUnderline: false,
	activeBackground: 'transparent',
	linkText: 'Meny',
	width: '100%',
	position: 'static',
	display: 'flex',
	justifySelf: 'flex-start',
	marginRight: 'auto',
};

const linkProps = {
	useUnderline: false,
	activeBackground: 'transparent',
	barWidth: '50%',
	position: 'static',
};

<HorizontalLinkBar
	background="#fff"
	overflow="visible"
	shouldFlexChildren
	justifyContent="space-between"
>
	<LargeLinkBarDropdown {...dropDownLinkProps} xs={false} md displayInitially>
					<Menu>
						<FrontSmallHeading textColor="#888" lineColor="#888">
								Redaksjonelt innhold
						</FrontSmallHeading>
						<HorizontalLinkBar
							background={colors.white}
							barWidth="100%"
							childrenWidth="50%"
							isTopLevelComponent={false}
							shouldFlexChildren
							position="static"
							showToggleDropdownArrow={false}
							shouldWrap
							shadow="none"
						>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Helse, kosthold & trening"
									circleText="HE"
									position="right"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Showbiz & royal" circleText="sr" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Living" circleText="li" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Mat" circleText="ma" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Livet mitt" circleText="lm" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Meninger" circleText="me" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Mote & skjønnhet" circleText="mo" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Jobb, karriere & økonomi"
									circleText="jo"
									position="right"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Mamma" circleText="mm" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Reise" circleText="re" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Horoskop" circleText="ho" position="right" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText name="circle-with-text" text="Sex og -samliv" circleText="ss" position="right" />
							</LinkBarLink>
						</HorizontalLinkBar>
						<FrontSmallHeading textColor="#888" lineColor="#888">
								KOMMERSIELT INNHOLD
						</FrontSmallHeading>
						<HorizontalLinkBar
							background={colors.white}
							barWidth="100%"
							childrenWidth="50%"
							isTopLevelComponent={false}
							shouldFlexChildren
							position="static"
							showToggleDropdownArrow={false}
							shouldWrap
							shadow="none"
						>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Shopping"
									circleText="Sh"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="KK-mila"
									circleText="kk"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Rabattkoder"
									circleText="ra"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<IconWithText
									name="circle-with-text"
									text="Abonnèr på KK"
									circleText="kk"
									position="right"
									fill="#000"
									textColor="#fff"
								/>
							</LinkBarLink>
						</HorizontalLinkBar>
					</Menu>
				</LargeLinkBarDropdown>
	<SmallLinkBarLink {...logoProps} useUnderline={false} isBlockLink style={{ maxWidth: '14.6rem' }}>
		<KKLogo background="transparent" />
	</SmallLinkBarLink>

	<ButtonWithModal
		Button={KKButton}
		customStyles={customStyles}
		openedIcon="wrong"
		closedIcon="search"
		rootElement="#root"
	>
		<SearchWrapper>
			<SearchControls>
				<SearchField
					marginBottom="0"
					iconSize="2rem"
					fontSize="3rem"
					shadow="none"
					color="#888"
					backgroundColor="#fff"
					handleSearchTextChange={() => { }}
					handleUserTypedSearch={() => { }}
					searchText="Hva søker du etter"
					searchTextVisible
					isLoading={false}
					xs={false}
					md
				/>
			</SearchControls>
		</SearchWrapper>
	</ButtonWithModal>
</HorizontalLinkBar>
`}
		</Code>
	</section>
);

export { KKStory };

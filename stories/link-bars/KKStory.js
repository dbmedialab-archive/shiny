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
} from '../../src';


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
	font-size: 4.4rem;
`;

const SearchControls = styled.div`
	width: 55%;
	border-bottom: .2rem solid black;
`;

const KKButton = Button.extend`
	color: black;
	width: 5.0rem;
	height: 5.0rem;
	outline-color: tomato;
	background: #fff;
`;

const Icon = props => <IconWithText name="circle-with-text" size={5} position="right" {...props} />;
const CommercialIcon = props => <Icon fill="#000" textColor="#fff" {...props} />;

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
							isTopLevelComponent={false}
							shouldFlexChildren
							position="static"
							shouldWrap
							shadow="none"
						>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Helse, kosthold & trening" circleText="HE" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Showbiz & royal" circleText="sr" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Living" circleText="li" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Mat" circleText="ma" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Livet mitt" circleText="lm" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Meninger" circleText="me" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Mote & skjønnhet" circleText="mo" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Jobb, karriere & økonomi" circleText="jo" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Mamma" circleText="mm" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Reise" circleText="re" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Horoskop" circleText="ho" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon text="Sex og -samliv" circleText="ss" />
							</LinkBarLink>
						</HorizontalLinkBar>
						<FrontSmallHeading>
								KOMMERSIELT INNHOLD
						</FrontSmallHeading>
						<HorizontalLinkBar
							background={colors.white}
							isTopLevelComponent={false}
							shouldFlexChildren
							position="static"
							shouldWrap
							shadow="none"
						>
							<LinkBarLink {...linkProps} url="#">
								<CommercialIcon text="Shopping" circleText="Sh" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<Icon
									text="KK-mila"
									circleText="kk"
								/>
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<CommercialIcon text="Rabattkoder" circleText="ra" />
							</LinkBarLink>
							<LinkBarLink {...linkProps} url="#">
								<CommercialIcon
									text="Abonnèr på KK"
									circleText="kk"
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
	position: 'static',
};

const Icon = props => <IconWithText name="circle-with-text" size={5} position="right" {...props} />;
const CommercialIcon = props => <Icon fill="#000" textColor="#fff" {...props} />;

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
				isTopLevelComponent={false}
				shouldFlexChildren
				position="static"
				shouldWrap
				shadow="none"
			>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Helse, kosthold & trening" circleText="HE" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Showbiz & royal" circleText="sr" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Living" circleText="li" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Mat" circleText="ma" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Livet mitt" circleText="lm" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Meninger" circleText="me" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Mote & skjønnhet" circleText="mo" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Jobb, karriere & økonomi" circleText="jo" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Mamma" circleText="mm" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Reise" circleText="re" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Horoskop" circleText="ho" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon text="Sex og -samliv" circleText="ss" />
				</LinkBarLink>
			</HorizontalLinkBar>
			<FrontSmallHeading>
					KOMMERSIELT INNHOLD
			</FrontSmallHeading>
			<HorizontalLinkBar
				background={colors.white}
				isTopLevelComponent={false}
				shouldFlexChildren
				position="static"
				shouldWrap
				shadow="none"
			>
				<LinkBarLink {...linkProps} url="#">
					<CommercialIcon text="Shopping" circleText="Sh" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<Icon
						text="KK-mila"
						circleText="kk"
					/>
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<CommercialIcon text="Rabattkoder" circleText="ra" />
				</LinkBarLink>
				<LinkBarLink {...linkProps} url="#">
					<CommercialIcon
						text="Abonnèr på KK"
						circleText="kk"
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
`}
		</Code>
	</section>
);

export { KKStory };

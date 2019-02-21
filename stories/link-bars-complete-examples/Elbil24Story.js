import React from 'react';
import styled from '@emotion/styled';

import { DemoContainer } from '../storybook-components';

import {
	HugeHeading,

	Link,
	LinkBarLink,
	HorizontalLinkBar,
	Paragraph,

	Elbil24Logo,
	Elbil24ProButton,

	getColor,
} from '../../src';

const TopNavigation = styled.div`
	background: ${getColor('primary')};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 14.5rem;
	font-family: 'barlow', sans-serif;
`;

const LogoLink = styled(Link)`
	text-decoration: none;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 30rem;
	padding: 2rem;
	
	@media only screen and (min-width: 60rem) {
		width: 35rem;
	}
`;

const Logo = styled(Elbil24Logo)`
	width: 19rem;
	
	@media only screen and (min-width: 60rem) {
		width: 23rem;
	}
`;

const Slogan = styled(Paragraph)`
	color: ${getColor('white')};
	font-size: 1.4rem;
	font-weight: 400;
	margin-top: .4rem;
	
	@media only screen and (min-width: 60rem) {
		font-size: 1.6rem;
	}
`;

const Branding = styled.div`
	display: flex;
`;

const Pro = styled.div`
	align-self: flex-end;
	
	@media only screen and (min-width: 60rem) {
		margin: .5rem;
	}
`;

const ProLink = styled(Link)`
	position: absolute;
	font-size: 1.2rem;
	text-decoration: none;
	color: ${getColor('white')};
	text-align: right;
	margin-top: -13rem;
	margin-left: -5.5rem;
	white-space: nowrap;
	
	@media only screen and (min-width: 60rem) {
		margin-top: -12.5rem;
	}
`;

const ProButton = styled(Elbil24ProButton)`
	width: 4rem;
	margin-bottom: -.8rem;
`;

const MenuScroll = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	background: ${getColor('secondary')};
	color:${getColor('white')};
	width: 100%;
	scroll-behavior: smooth;
	overflow-y: hidden;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	height: 5rem;
	z-index: 9999;

	@media only screen and (min-width: 60rem) {
		justify-content: center;
	}
`;

const Menu = styled(HorizontalLinkBar)`
	display: flex;
	flex-direction: row;
	list-style: none;
	justify-content: space-around;
	min-width: 80rem;
	max-width: 128rem;
	
	@media only screen and (min-width: 60rem) {
		padding-top: .2rem;
		-webkit-overflow-scrolling: unset;
		-ms-overflow-style: none;
	}
`;

const linkProps = {
	useUnderline: false,
	activeBackgroundColor: 'transparent',
	textColor: 'white',
	ALLCAPS: true,
};

const MenuLink = styled(LinkBarLink)`
	font-weight: 800;
	font-style: italic;
	font-size: 1.8rem;
	
	transition: all .2s ease-out;
	border-bottom: .2rem solid transparent;

	font-family: 'barlow', sans-serif;
	
	:hover {
		font-weight: bold;
		color: #dfdfdf;
    transition: all .2s ease-out;
    border-bottom: .2rem solid ${getColor('white')};
	}
`;


const Elbil24Story = () => (
	<section>
		<HugeHeading>Elbil24 Pro header</HugeHeading>

		<DemoContainer>
			<TopNavigation>
				<Branding>
					<LogoLink href="/">
						<LogoContainer>
							<Logo pro />
							<Slogan>Norges ledende nettavis om elbiler</Slogan>
						</LogoContainer>
					</LogoLink>
				</Branding>
				<Pro>
					<ProLink href="/pro">
						<ProButton />
						<br />
						Logg inn
					</ProLink>
				</Pro>
			</TopNavigation>
			<MenuScroll>
				<Menu
					isTopLevelComponent // Use the whole width
					backgroundColor="secondary"
					overflow="visible"
					shouldFlexChildren
				>
					<MenuLink {...linkProps} linkText="Nyheter" url="/nyheter" />
					<MenuLink {...linkProps} linkText="Tester" url="/tester" />
					<MenuLink {...linkProps} linkText="Biler" url="/biler" />
					<MenuLink {...linkProps} linkText="Nyttig" url="/nyttig" />
					<MenuLink {...linkProps} linkText="Lading" url="/lading" />
					<MenuLink {...linkProps} linkText="Nyhetsbrev" url="/nyhetsbrev" />
					<MenuLink {...linkProps} linkText="Medlemsfordeler" url="/medlemsfordeler" />
				</Menu>
			</MenuScroll>
		</DemoContainer>
	</section>
);

export { Elbil24Story };

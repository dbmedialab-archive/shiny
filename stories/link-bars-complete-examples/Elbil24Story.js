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

const linkProps = {
	useUnderline: false,
	activeBackgroundColor: getColor('secondary'),
	textColor: 'white',
	ALLCAPS: true,
};

// const TopNavigation = styled(HorizontalLinkBar)`
const TopNavigation = styled.div`
	background: ${getColor('primary')};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 145px;
	font-family: 'barlow', sans-serif;
`;

const Logo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`;

const LogoLink = styled(Link)`
	display: block;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
	width: 18rem;
`;

const Slogan = styled(Paragraph)`
	color: ${getColor('white')};
	font-style: italic;
	font-size: 13px;
`;

const Branding = styled.div`
	display: flex;
`;

const Pro = styled.div`
	align-self: flex-end;
`;

const ProLink = styled(Link)`
	position: absolute;
	font-size: 12px;
	text-decoration: none;
	color: #fff;
	text-align: right;
	margin-top: -138px;
	margin-left: -50px;
	width: 5rem;
`;


const Menu = styled(HorizontalLinkBar)`
	display: flex;
	flex-direction: row;
	width: 100%;
	scroll-behavior: smooth;
	overflow-y: hidden;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
	height: 50px;
	font-family: 'barlow', sans-serif;        

	@media only screen and (max-width: 600px) {
		justify-content: flex-start;
	}

	::-webkit-scrollbar {
		width: 0; 
		background: transparent;
	}
	
	justify-content: center;
	min-width: 600px;
`;


const Elbil24Story = () => (
	<section>
		<HugeHeading>Elbil24 Pro header</HugeHeading>

		<DemoContainer>
			<TopNavigation>
				<Branding>
					<Logo>
						<LogoLink href="/">
							<Elbil24Logo pro />
						</LogoLink>
						<Slogan>Norges ledende nettavis om elbiler!</Slogan>
					</Logo>
				</Branding>
				<Pro>
					<ProLink href="/pro">
						<Elbil24ProButton />
						<br />
						Logg inn
					</ProLink>
				</Pro>
			</TopNavigation>
			<Menu
				isTopLevelComponent={false} // Use the whole width
				backgroundColor="secondary"
				overflow="visible"
				shouldFlexChildren
			>
				<LinkBarLink {...linkProps} linkText="Forsiden" url="/" />
				<LinkBarLink {...linkProps} linkText="Nyheter" url="/nyheter" />
				<LinkBarLink {...linkProps} linkText="Tester" url="/tester" />
				<LinkBarLink {...linkProps} linkText="Biler" url="/biler" />
				<LinkBarLink {...linkProps} linkText="Lading" url="/lading" />
				<LinkBarLink {...linkProps} linkText="Nyttig" url="/nyttig" />
			</Menu>
		</DemoContainer>
	</section>
);

export { Elbil24Story };

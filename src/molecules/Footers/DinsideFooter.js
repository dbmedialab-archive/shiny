import React from 'react';
import styled from '@emotion/styled';

import { getColor, getVariable } from '../../utils';
import { Col, Row, Grid } from '../..';
import { DinsideLogo } from '../../atoms/DinsideLogo';

const FooterWrapper = styled.footer`
	background-color: ${getColor('darkness', 'Light')};
	color: ${getColor('white')};
	font-family: ${getVariable('mainFont')};
	font-size: ${getVariable('headingSmallSize')};
	line-height: ${getVariable('headingSmallLineHeight')};
	padding: 5rem 2rem 4rem;

	@media screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		padding: 10rem 0 6rem;
	}

	.text-left{
		text-align: left;
	}
`;

const SubCatHeading = styled.h5`
	font-size: 1.4rem;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
`;

const NavLinksBar = styled.ul`
	list-style: none;
	margin: 0;
	line-height: 1.79;
	padding: 0;
`;

const DinsideLink = styled.a`
	color: inherit;
	font-family: sans-serif;
	line-height: ${getVariable('headingSmallLineHeight')};
	&::after {
		content: '';
		display: block;
		height: 1.3rem;
	}
`;

const DinsideLinkYellow = styled(DinsideLink)`
	color: ${getColor('yellowDark')};
`;

const VerticalSeparator = styled.div`
	height: ${props => props.height}rem;
`;

const Address = styled.address`
	font-style: normal;
`;

const LogoCol = styled(Col)`
	text-align: center;
`;

const DinsideFooter = (props) => {
	return (
		<FooterWrapper>
			<Grid>
				<Row>
					<LogoCol md={3} xs={12}>
						<Row center="md">
							<Col md={12}>
								<DinsideLogo twentyYearAnniversary />
							</Col>
						</Row>
					</LogoCol>
					<Col md={3} xs={12}>
						<Row>
							<Col xs={12}>
								<SubCatHeading>Postadresse:</SubCatHeading>
								<Address>Boks 1184 Sentrum, 0107 Oslo</Address>
								<VerticalSeparator height={2.8} />
							</Col>
							<Col xs={12}>
								<SubCatHeading>Besøksadresse:</SubCatHeading>
								<Address>
								Karvesvingen 1, 0579 Oslo<br />
								Sentralbord: 24 00 10 00
								</Address>
								<VerticalSeparator height={5} />
							</Col>
						</Row>
					</Col>
					<Col md={3} xs={12}>
						<NavLinksBar>
							<DinsideLink>Annonseinfo</DinsideLink>
							<DinsideLink>Om informasjonskapsler</DinsideLink>
							<DinsideLink>Redaksjonen</DinsideLink>
							<DinsideLink>Personvern</DinsideLink>
							<DinsideLinkYellow>AnnonseInfo</DinsideLinkYellow>
						</NavLinksBar>
					</Col>
					<Col md={3} xs={12}>
						<SubCatHeading>Ansvarlig redaktør:</SubCatHeading>
						<DinsideLink>Bjørn Erik Loftås</DinsideLink>
						<VerticalSeparator height={2.8} />
						<SubCatHeading>Utgiverselskap</SubCatHeading>
						© 2018 Dagbladet
						<VerticalSeparator height={2.8} />
					Powered by Labrador CMS
					</Col>
				</Row>
			</Grid>
		</FooterWrapper>
	);
};

export { DinsideFooter };

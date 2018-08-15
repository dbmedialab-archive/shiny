import React from 'react';
import styled from 'styled-components';

import { getColor, getVariable } from '../../utils';
import { Col, Row, Grid } from '../..';
import { SvgIcon } from '../../atoms/SvgIcon';

const FooterWrapper = styled.footer`
	background-color: ${getColor('type')};
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

const OppskriftLink = styled.a`
	text-decoration: none;
	color: inherit;
	font-family: 'Ubuntu', sans-serif;
	font-size: ${getVariable('headingLargeSize')};
	line-height: ${getVariable('headingLargeLineHeight')};
	&::after {
		content: '';
		display: block;
		height: 1.3rem;
	}
`;

const AllerIconWrapper = styled.div`
	padding-top: 1rem;
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

const OppskriftFooter = () => (
	<FooterWrapper>
		<Grid>
			<Row>
				<LogoCol md={3} xs={12}>
					<Row center="md">
						<Col md={12}>
							<OppskriftLink className="oppskrift-link" href="#">Oppskrift.no</OppskriftLink>
						</Col>
					</Row>
					<Row center="md">
						<Col md={3}>
							<AllerIconWrapper>
								<a
									href="https://www.aller.se"
									target="_blank"
									rel="noreferrer noopener"
								>
									<SvgIcon name="aller" size={6.8} />
								</a>
							</AllerIconWrapper>
						</Col>
						<Col md={3}>
							<a
								href="https://www.kk.no"
								target="_blank"
								rel="noreferrer noopener"
							>
								<SvgIcon name="kk" size={4.5} color="white" />
							</a>
						</Col>
						<Col md={12}>
							<a
								href="https://www.dagbladet.no"
								target="_blank"
								rel="noreferrer noopener"
							>
								<SvgIcon name="dagbladet" size={8.7}  />
							</a>
						</Col>
					</Row>
					<VerticalSeparator height={2.8} />
				</LogoCol>
				<Col md={3} xs={12}>
					<Row>
						<Col xs={12}>
							<SubCatHeading>Postadresse:</SubCatHeading>
							<Address>
								Boks 1184 Sentrum, 0107 Oslo
							</Address>
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
					<SubCatHeading>Ansvarlig redaktør:</SubCatHeading>
					<VerticalSeparator height={5} />
					<SubCatHeading>Utgiverselskap</SubCatHeading>
					Aller Media AS
					<VerticalSeparator height={2.8} />
				</Col>
				<Col md={3} xs={12}>
					<NavLinksBar>
						<li>Annonseinfo</li>
						<li>Om informasjonskapsler</li>
						<li>Redaksjonen</li>
						<li>Personvern</li>
					</NavLinksBar>
				</Col>
			</Row>
		</Grid>
	</FooterWrapper>
);

export { OppskriftFooter };

import React from 'react';
import styled from 'styled-components';

import { Col, Row, Grid } from '../..';
import { SvgIcon } from '../../atoms/SvgIcon';

const FooterWrapper = styled.div`
	background-color: ${props => props.theme.colors.darkGrey};
	color: ${props => props.theme.colors.white};
	padding: 10.3rem 0 6.2rem;
	font-family: ${props => props.theme.variables.mainFont};
	font-size: 1.4rem;
	letter-spacing: 2px;
			.margin-bottom-sm-10{
			margin-bottom: 10rem;
		}
		
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		font-size: 3.2rem;
		background-color: ${props => props.theme.colors.type};
		padding-top: 14rem;
		
		.margin-bottom-sm-3{
			margin-bottom: 3rem;
		}
		.margin-bottom-sm-5{
			margin-bottom: 5rem;
		}
		.margin-bottom-sm-6{
			margin-bottom: 6rem;
		}
		.margin-bottom-sm-10{
			margin-bottom: 10rem;
		}
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
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		font-size: 3.4rem;
	}
`;

const NavLinksBar = styled.ul`
	list-style: none;
	margin: 0;
	line-height: 1.79;
	padding: 0;
`;

const OppskriftLink = styled.a`
	font-size: 2.5rem;
	text-decoration: none;
	color: inherit;
	font-family: 'Ubuntu', sans-serif;
	&::after {
		content: '';
		display: block;
		height: 1.3rem;
	}
	
	@media screen and (max-width: ${props => props.theme.flexboxgrid.breakpoints.md}em) {
		font-size: 5.7rem;
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

const OppskriftFooter = () => (
	<FooterWrapper>
		<Grid>
			<Row center="md">
				<Col md={3} xs={12}>
					<Row center="md" className="margin-bottom-sm-3">
						<Col md={12}>
							<OppskriftLink href="#">Oppskrift.no</OppskriftLink>
						</Col>
					</Row>
					<Row center="md" className="margin-bottom-sm-6">
						<Col md={3}>
							<AllerIconWrapper>
								<SvgIcon name="aller" size={6.8} size-sm={19} />
							</AllerIconWrapper>
						</Col>
						<Col md={3}>
							<SvgIcon name="kk" size={4.5} size-sm={12} />
						</Col>
						<Col md={12}>
							<SvgIcon name="dagbladet" size={8.7} size-sm={20} />
						</Col>
					</Row>
				</Col>
				<Col md={3} xs={12} className="text-left">
					<Row className="margin-bottom-sm-10">
						<Col xs={12} className="margin-bottom-sm-3">
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
						</Col>
					</Row>
				</Col>
				<Col md={3} xs={12} className="margin-bottom-sm-10 text-left">
					<SubCatHeading className="margin-bottom-sm-5">Ansvarlig redaktør:</SubCatHeading>
					<VerticalSeparator height={5} />
					<SubCatHeading>Utgiverselskap</SubCatHeading>
					Aller Media AS
				</Col>
				<Col md={3} xs={12} className="text-left">
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

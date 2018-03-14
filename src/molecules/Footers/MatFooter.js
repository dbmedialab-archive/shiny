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
	font-size: 2.5rem;
	text-decoration: none;
	color: inherit;

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

const MatFooter = () => (
	<FooterWrapper>
		<Grid>
			<Row center="xs">
				<Col md={3} xs={12} >
					<Row center="xs">
						<Col md={12}>
							<OppskriftLink href="#">Oppskrift.no</OppskriftLink>
						</Col>
					</Row>
					<Row center="xs" >
						<Col md={3}>
							<AllerIconWrapper>
								<SvgIcon name="aller" size="6.8" />
							</AllerIconWrapper>
						</Col>
						<Col md={3} mdOffset={1} ><SvgIcon name="kk" size="4.5" /></Col>
					</Row>
					<Row center="xs">
						<Col md={12}><SvgIcon name="dagbladet" size="8.7" /></Col>
					</Row>
				</Col>
				<Col md={3} xs={12}>
					<Row xs="center">
						<Col xs={12}>
							<SubCatHeading>Postadresse:</SubCatHeading>
							<address>
								Boks 1184 Sentrum, 0107 Oslo
							</address>
							<VerticalSeparator height={2.8} />
						</Col>
						<Col xs={12}>
							<SubCatHeading>Besøksadresse:</SubCatHeading>
							<address>
								Karvesvingen 1, 0579 Oslo<br />
								Sentralbord: 24 00 10 00
							</address>
						</Col>
					</Row>
				</Col>
				<Col md={3} xs={12}>
					<SubCatHeading>Ansvarlig redaktør:</SubCatHeading>
					<VerticalSeparator height={5} />
					<SubCatHeading>Utgiverselskap</SubCatHeading>
					Aller Media AS
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

export { MatFooter };

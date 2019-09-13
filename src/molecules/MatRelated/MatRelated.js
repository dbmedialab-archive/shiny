/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	Row,
	Col,
	LargeHeading as Heading,
} from '../..';
// import { IconBar } from '../IconBar';
import { ComplexitySectionHeader } from '../../atoms/MainRecipe/ComplexitySectionHeader';

const Img = styled.img`
	max-width: 100%;
`;


export const Related = ({ headerTitle }) => (
	<section>
		<Heading>Related Section</Heading>
		<Row>
			<Col md={6}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="https://i.pinimg.com/474x/7a/15/a4/7a15a4ca174f15f533b79b2672befb2b--lunch-recipes-paleo-recipes.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
			<Col md={6}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="https://i.pinimg.com/736x/51/88/b7/5188b77e242dcb8983b43cf8df072c52--spinach-lasagna-spinach-casserole.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconsBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
		</Row>
		<Row style={{ marginBottom: 20 }}>
			<Col md={4}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="http://www.vancitybuzz.com/wp-content/uploads/2015/09/Pappardelle-Bolognaise_0001-230x180.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconsBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
			<Col md={4}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="http://www.fleuroudevoshaar.nl/wp-content/uploads/2014/09/geroosterde-groenten-wortels-stock-512x341-230x180.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconsBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
		</Row>
	</section>
);

Related.propTypes = {
	headerTitle: PropTypes.string.isRequired,
};

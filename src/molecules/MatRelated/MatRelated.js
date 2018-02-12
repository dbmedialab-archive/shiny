/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row } from '../../atoms/Row';
import { Col  } from '../../atoms/Col';
// import { IconBar } from '../IconBar';
import { ComplexitySectionHeader } from '../../atoms/MainRecipe/ComplexitySectionHeader';

const Img = styled.img`
	max-width: 100%;
`;


export const Related = props => (
	<section style={{ width: 1122, margin: '0 auto' }}>
		<h1>Related Section</h1>
		<Row>
			<Col md={6}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="https://i.pinimg.com/474x/7a/15/a4/7a15a4ca174f15f533b79b2672befb2b--lunch-recipes-paleo-recipes.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{props.headerTitle}</ComplexitySectionHeader>
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
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{props.headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
		</Row>
		<Row style={{ marginBottom: 20 }}>
			<Col md={6}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="http://www.vancitybuzz.com/wp-content/uploads/2015/09/Pappardelle-Bolognaise_0001-230x180.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconsBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{props.headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
			<Col md={6}>
				<Row>
					<Col md={5}>
						<div><Img width="230" src="http://www.fleuroudevoshaar.nl/wp-content/uploads/2014/09/geroosterde-groenten-wortels-stock-512x341-230x180.jpg" alt="" /></div>
					</Col>
					<Col md={5}>
						{/* <IconsBar entities={props.entities} /> */}
						<ComplexitySectionHeader style={{ fontSize: 18 }}>{props.headerTitle}</ComplexitySectionHeader>
					</Col>
				</Row>
			</Col>
		</Row>
	</section>
);

Related.propTypes = {
	entities: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.number,
	}),
	headerTitle: PropTypes.string.isRequired,
};

Related.defaultProps = {
	entities: {
		name: '',
		value: 0,
	},
};

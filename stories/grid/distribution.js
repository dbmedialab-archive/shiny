import React from 'react';
import PropTypes from 'prop-types';

import Heading, { HugeHeading } from '../../src/atoms/Heading';
import LeetTextarea from '../../src/atoms/LeetTextarea';

import { Row, Col as GridCol } from '../../src/atoms/Grid';
import BlueBox from './blue-box';

const Col = ({ children = null, ...rest }) => (
	<GridCol {...rest}>
		<BlueBox>
			{children}
		</BlueBox>
	</GridCol>
);
Col.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default () => (
	<section>
		<HugeHeading>Grid</HugeHeading>
		<Heading>Distribution</Heading>
		<p>Add props to distribute the contents of a row or column.</p>

		<Row around="xs">
			<Col xs={2}>around-row</Col>
			<Col xs={2}>around-row</Col>
			<Col xs={2}>around-row</Col>
		</Row>
		<Row between="xs">
			<Col xs={2}>between-row</Col>
			<Col xs={2}>between-row</Col>
			<Col xs={2}>between-row</Col>
		</Row>

		<LeetTextarea>
			{`
<Row around="xs">
	<Col xs={2}>around-row</Col>
	<Col xs={2}>around-row</Col>
	<Col xs={2}>around-row</Col>
</Row>
<Row between="xs">
	<Col xs={2}>between-row</Col>
	<Col xs={2}>between-row</Col>
	<Col xs={2}>between-row</Col>
</Row>
			`}
		</LeetTextarea>
	</section>
);

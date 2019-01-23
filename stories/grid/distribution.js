import React from 'react';
import PropTypes from 'prop-types';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
	Row,
	Col as GridCol,
	Paragraph,
} from '../../src';
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
		<Paragraph>Add props to distribute the contents of a row or column.</Paragraph>

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

		<Code language="jsx">
			{`
import {
	Row,
	Col,
} from '@aller/shiny';

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
		</Code>
	</section>
);

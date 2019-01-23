import React from 'react';
import PropTypes from 'prop-types';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

import { Row } from '../../src/atoms/Row';
import { Col as GridCol } from '../../src/atoms/Col';
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
		<Heading>Hide</Heading>
		<Paragraph>
			You can simply hide some elements for a given breakpoint by passing `false` to the breakpoint properties.
		</Paragraph>
		<Row>
			<Col xs={12} md={6}>xs-12 md-6</Col>
			<Col xs={false} md={6}>xs-false md-6</Col>
		</Row>
		<Row>
			<Col xs={false}>xs-false</Col>
			<Col xs={false} md={12}>xs-false md-12</Col>
		</Row>

		<Code language="jsx">
			{`
import {
	Row,
	Col,
} from '@aller/shiny';

<Row>
	<Col xs={12} md={6}>xs-12 md-6</Col>
	<Col xs={false} md={6}>xs-false md-6</Col>
</Row>
<Row>
	<Col xs={false}>xs-false</Col>
	<Col xs={false} md={12}>xs-false md-12</Col>
</Row>
			`}
		</Code>
	</section>
);

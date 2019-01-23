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
		<Heading>Basic</Heading>
		<Paragraph>
			The <code>&lt;Row&gt;</code> and <code>&lt;Col&gt;</code> components are provided by
			<code>react-emotion-flexboxgrid, but we have copy pasted the code to our Grid, Row and Col component</code>.
			(
			<a href="https://github.com/SimeonC/react-emotion-flexboxgrid">GitHub</a>/
			<a href="https://www.npmjs.com/package/react-emotion-flexboxgrid">npm</a>/
			<a href="https://loicmahieu.github.io/react-styled-flexboxgrid/demo/index.html">docs</a>
			).
		</Paragraph>
		<Paragraph>
			The interface resembles the grid from popular frameworks such as Bootstrap and Foundation. Coming from
			a traditional grid, you should quickly feel at home.
		</Paragraph>
		<Row>
			<Col xs={12}>xs-12</Col>
		</Row>
		<Row>
			<Col xs={6}>xs-6</Col>
			<Col xs={6}>xs-6</Col>
		</Row>
		<Row>
			<Col xs={4}>xs-4</Col>
			<Col xs={4}>xs-4</Col>
			<Col xs={4}>xs-4</Col>
		</Row>
		<Row>
			<Col xs={3}>xs-3</Col>
			<Col xs={3}>xs-3</Col>
			<Col xs={3}>xs-3</Col>
			<Col xs={3}>xs-3</Col>
		</Row>
		<Row>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
			<Col xs={1}>xs-1</Col>
		</Row>
		<Row>
			<Col xs={1}>xs-1</Col>
			<Col xs={11}>xs-11</Col>
		</Row>
		<Row>
			<Col xs={2}>xs-2</Col>
			<Col xs={10}>xs-10</Col>
		</Row>
		<Row>
			<Col xs={3}>xs-3</Col>
			<Col xs={9}>xs-9</Col>
		</Row>
		<Row>
			<Col xs={4}>xs-4</Col>
			<Col xs={8}>xs-8</Col>
		</Row>
		<Row>
			<Col xs={5}>xs-5</Col>
			<Col xs={7}>xs-7</Col>
		</Row>
		<Row>
			<Col xs={6}>xs-6</Col>
			<Col xs={6}>xs-6</Col>
		</Row>
		<Row>
			<Col xs={7}>xs-7</Col>
			<Col xs={5}>xs-5</Col>
		</Row>
		<Row>
			<Col xs={8}>xs-8</Col>
			<Col xs={4}>xs-4</Col>
		</Row>
		<Row>
			<Col xs={9}>xs-9</Col>
			<Col xs={3}>xs-3</Col>
		</Row>
		<Row>
			<Col xs={10}>xs-10</Col>
			<Col xs={2}>xs-2</Col>
		</Row>
		<Row>
			<Col xs={11}>xs-11</Col>
			<Col xs={1}>xs-1</Col>
		</Row>

		<Code language="jsx">
			{`
import {
	Row,
	Col,
} from '@aller/shiny';

<Row>
	<Col xs={12}>xs-12</Col>
</Row>
<Row>
	<Col xs={6}>xs-6</Col>
	<Col xs={6}>xs-6</Col>
</Row>
<Row>
	<Col xs={4}>xs-4</Col>
	<Col xs={4}>xs-4</Col>
	<Col xs={4}>xs-4</Col>
</Row>
<Row>
	<Col xs={3}>xs-3</Col>
	<Col xs={3}>xs-3</Col>
	<Col xs={3}>xs-3</Col>
	<Col xs={3}>xs-3</Col>
</Row>
<Row>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
	<Col xs={1}>xs-1</Col>
</Row>
<Row>
	<Col xs={1}>xs-1</Col>
	<Col xs={11}>xs-11</Col>
</Row>
<Row>
	<Col xs={2}>xs-2</Col>
	<Col xs={10}>xs-10</Col>
</Row>
<Row>
	<Col xs={3}>xs-3</Col>
	<Col xs={9}>xs-9</Col>
</Row>
<Row>
	<Col xs={4}>xs-4</Col>
	<Col xs={8}>xs-8</Col>
</Row>
<Row>
	<Col xs={5}>xs-5</Col>
	<Col xs={7}>xs-7</Col>
</Row>
<Row>
	<Col xs={6}>xs-6</Col>
	<Col xs={6}>xs-6</Col>
</Row>
<Row>
	<Col xs={7}>xs-7</Col>
	<Col xs={5}>xs-5</Col>
</Row>
<Row>
	<Col xs={8}>xs-8</Col>
	<Col xs={4}>xs-4</Col>
</Row>
<Row>
	<Col xs={9}>xs-9</Col>
	<Col xs={3}>xs-3</Col>
</Row>
<Row>
	<Col xs={10}>xs-10</Col>
	<Col xs={2}>xs-2</Col>
</Row>
<Row>
	<Col xs={11}>xs-11</Col>
	<Col xs={1}>xs-1</Col>
</Row>
			`}
		</Code>
	</section>
);

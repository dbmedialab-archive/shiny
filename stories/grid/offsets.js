import React from 'react';
import PropTypes from 'prop-types';

import Heading, { HugeHeading } from '../../src/atoms/Heading';
import LeetTextarea from '../../src/atoms/LeetTextarea';

import Row from '../../src/atoms/Row';
import GridCol from '../../src/atoms/Col';
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
		<Heading>Offsets</Heading>
		<p>We all need some air from time to time.</p>
		<Row>
			<Col xsOffset={11} xs={1}>offset-11 xs-1</Col>
			<Col xsOffset={10} xs={2}>offset-10 xs-2</Col>
			<Col xsOffset={9} xs={3}>offset-9 xs-3</Col>
			<Col xsOffset={8} xs={4}>offset-8 xs-4</Col>
			<Col xsOffset={7} xs={5}>offset-7 xs-5</Col>
			<Col xsOffset={6} xs={6}>offset-6 xs-6</Col>
			<Col xsOffset={5} xs={7}>offset-5 xs-7</Col>
			<Col xsOffset={4} xs={8}>offset-4 xs-8</Col>
			<Col xsOffset={3} xs={9}>offset-3 xs-9</Col>
			<Col xsOffset={2} xs={10}>offset-2 xs-10</Col>
			<Col xsOffset={1} xs={11}>offset-1 xs-11</Col>
		</Row>

		<LeetTextarea>
			{`
import Row from 'shiny/src/atoms/Row';
import Col from 'shiny/src/atoms/Col';

<Row>
	<Col xsOffset={11} xs={1}>offset-11 xs-1</Col>
	<Col xsOffset={10} xs={2}>offset-10 xs-2</Col>
	<Col xsOffset={9} xs={3}>offset-9 xs-3</Col>
	<Col xsOffset={8} xs={4}>offset-8 xs-4</Col>
	<Col xsOffset={7} xs={5}>offset-7 xs-5</Col>
	<Col xsOffset={6} xs={6}>offset-6 xs-6</Col>
	<Col xsOffset={5} xs={7}>offset-5 xs-7</Col>
	<Col xsOffset={4} xs={8}>offset-4 xs-8</Col>
	<Col xsOffset={3} xs={9}>offset-3 xs-9</Col>
	<Col xsOffset={2} xs={10}>offset-2 xs-10</Col>
	<Col xsOffset={1} xs={11}>offset-1 xs-11</Col>
</Row>
			`}
		</LeetTextarea>
	</section>
);

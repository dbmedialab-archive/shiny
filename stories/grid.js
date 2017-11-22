import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { StoryBox, SiteSelection } from './storybook-components';
import { Grid, Row, Col as GridCol } from '../src/atoms/Grid';
import Heading, { HugeHeading, SmallHeading } from '../src/atoms/Heading';
import LeetTextarea from '../src/atoms/LeetTextarea';

const BlueBox = styled.div`
	position: relative;
	box-sizing: border-box;
	background: ${props => props.theme.colors[props.theme.colors.skinColors.calmBackground]};
	border: .1rem solid ${props => props.theme.colors[props.theme.colors.skinColors.calmBorder]};
	color: ${props => props.theme.colors[props.theme.colors.skinColors.calmText]};
	border-radius: .3rem;
	overflow: hidden;
	text-align: center;
	margin-bottom: ${props => props.theme.variables.verticalBase};
	font-size: ${props => props.theme.variables.uiRegularSize};
	line-height: ${props => props.theme.variables.uiRegularLineHeight};
	padding:
		calc(1/2 * ${props => props.theme.variables.verticalBase})
		calc(1/2 * ${props => props.theme.variables.horizontalBase})
	;
`;

const LighterBlueBox = styled(BlueBox)`
	background: ${props => props.theme.colors[props.theme.colors.skinColors.nativeAd]};
`;

const Col = ({ children = null, ...rest }) => (
	<GridCol {...rest}>
		<BlueBox>
			{children}
		</BlueBox>
	</GridCol>
);

const MotherCol = ({ children = null, ...rest }) => (
	<GridCol {...rest}>
		<LighterBlueBox>
			{children}
		</LighterBlueBox>
	</GridCol>
);

Col.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
MotherCol.propTypes = Col.propTypes;

export default () => {
	storiesOf('Grid', module)
		.addDecorator(stories => <StoryBox><SiteSelection>{stories()}</SiteSelection></StoryBox>)
		.add('Grid', () => (
			<section>
				<HugeHeading>Grid</HugeHeading>
				<p>
					The <code>&lt;Row&gt;</code> and <code>&lt;Col&gt;</code> components are provided by
					<code>react-styled-flexboxgrid</code>.
					(
					<a href="https://github.com/loicmahieu/react-styled-flexboxgrid">GitHub</a>/
					<a href="https://www.npmjs.com/package/react-styled-flexboxgrid">npm</a>/
					<a href="https://loicmahieu.github.io/react-styled-flexboxgrid/demo/index.html">docs</a>
					).
				</p>
				<p>
					The interface resembles the grid from popular frameworks such as Bootstrap and Foundation. Coming from
					a traditional grid, you should quickly feel at home.
				</p>
				<Heading>Usage</Heading>
				<SmallHeading>Basic</SmallHeading>
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

				<LeetTextarea>
					{`
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
				</LeetTextarea>

				<SmallHeading>Responsive</SmallHeading>
				<p>
					Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
					sm, md & lg viewport widths.
				</p>
				<p>The break points can be customised in the styled-components theme.</p>
				<Row>
					<Col xs={12} sm={3} md={2} lg={1}>xs-12 sm-3 md-2 lg-1</Col>
					<Col xs={6} sm={6} md={8} lg={10}>xs-6 sm-6 md-8 lg-10</Col>
					<Col xs={6} sm={3} md={2} lg={1}>xs-6 sm-3 md-2 lg-1</Col>
				</Row>
				<Row>
					<Col xs={12} sm={3} md={2} lg={1}>xs-12 sm-3 md-2 lg-1</Col>
					<Col xs={12} sm={9} md={10} lg={11}>xs-12 sm-9 md-10 lg-11</Col>
				</Row>
				<Row>
					<Col xs={10} sm={6} md={8} lg={10}>xs-10 sm-6 md-8 lg-10</Col>
					<Col xs={2} sm={6} md={4} lg={2}>xs-2 sm-6 md-4 lg-2</Col>
				</Row>

				<LeetTextarea>
					{`
<Row>
	<Col xs={12} sm={3} md={2} lg={1} />
	<Col xs={6} sm={6} md={8} lg={10} />
	<Col xs={6} sm={3} md={2} lg={1} />
</Row>
<Row>
	<Col xs={12} sm={3} md={2} lg={1} />
	<Col xs={12} sm={9} md={10} lg={11} />
</Row>
<Row>
	<Col xs={10} sm={6} md={8} lg={10} />
	<Col xs={2} sm={6} md={4} lg={2} />
</Row>
					`}
				</LeetTextarea>

				<SmallHeading>Offset</SmallHeading>
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


				<SmallHeading>Auto Width</SmallHeading>
				<p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>

				<Row>
					<Col xs>xs</Col>
					<Col xs>xs</Col>
				</Row>
				<Row>
					<Col xs>xs</Col>
					<Col xs>xs</Col>
					<Col xs>xs</Col>
				</Row>
				<LeetTextarea>
					{`
<Row>
	<Col xs>xs</Col>
	<Col xs>xs</Col>
</Row>
<Row>
	<Col xs>xs</Col>
	<Col xs>xs</Col>
	<Col xs>xs</Col>
</Row>
					`}
				</LeetTextarea>

				<SmallHeading>Alignment</SmallHeading>
				<p>
					Add props to align elements to the start or end of row as well as the top, bottom, or center of a column.
				</p>
				<Row>
					<MotherCol xs={12}>
						<Row start="xs">
							<Col xs={6}>start-row</Col>
						</Row>
					</MotherCol>
					<MotherCol xs={12}>
						<Row center="xs">
							<Col xs={6}>center-row</Col>
						</Row>
					</MotherCol>
					<MotherCol xs={12}>
						<Row end="xs">
							<Col xs={6}>end-row</Col>
						</Row>
					</MotherCol>
				</Row>
				<Row top="xs">
					<Col xs={6}>
						top-row <br />
						several lines <br />
						several lines <br />
						several lines <br />
					</Col>
					<Col xs={6} />
				</Row>
				<Row middle="xs">
					<Col xs={6}>
						middle-row <br />
						several lines <br />
						several lines <br />
						several lines <br />
					</Col>
					<Col xs={6} />
				</Row>
				<Row bottom="xs">
					<Col xs={6}>
						bottom-row <br />
						several lines <br />
						several lines <br />
						several lines <br />
					</Col>
					<Col xs={6} />
				</Row>

				<LeetTextarea>
					{`
<Row>
	<Col xs={12}>
		<Row start="xs">
			<Col xs={6}>start-row</Col>
		</Row>
	</Col>
	<Col xs={12}>
		<Row center="xs">
			<Col xs={6}>center-row</Col>
		</Row>
	</Col>
	<Col xs={12}>
		<Row end="xs">
			<Col xs={6}>end-row</Col>
		</Row>
	</Col>
</Row>
<Row top="xs">
	<Col xs={6}>
		top-row <br />
		several lines <br />
		several lines <br />
		several lines <br />
	</Col>
	<Col xs={6} />
</Row>
<Row middle="xs">
	<Col xs={6}>
		middle-row <br />
		several lines <br />
		several lines <br />
		several lines <br />
	</Col>
	<Col xs={6} />
</Row>
<Row bottom="xs">
	<Col xs={6}>
		bottom-row <br />
		several lines <br />
		several lines <br />
		several lines <br />
	</Col>
	<Col xs={6} />
</Row>
					`}
				</LeetTextarea>

				<SmallHeading>Distribution</SmallHeading>
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

				<SmallHeading>Hide</SmallHeading>
				<p>
					You can simply hide some elements for a given breakpoint by passing `false` to the breakpoint properties.
				</p>
			</section>
		));
};

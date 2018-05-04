import React from 'react';
import styled from 'styled-components';

import { DemoContainer } from '../storybook-components/index';
import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
	BlockLink,
	SmallHeading,
	Row,
	Col,
	BodyText,
} from '../../src';

const Img = styled.img`
	max-width: 100%;
`;

const imgUrl = 'https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?cs=tinysrgb&h=350';
export default () => (
	<section>
		<HugeHeading>BlockLink</HugeHeading>
		<p>A block-level link element. The BlockLink is an <code>&lt;a&gt;</code> tag.</p>
		<p>By default, links are inline elements. BlockLink is a block-level element.</p>
		<p>Note: Please be aware that due to setting line-height to 0 in BlockLink,
			children should always specify line-height of their own.
		</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<Row>
				<Col xs>
					<BlockLink href="https://example.com">
						<SmallHeading>BlockLink</SmallHeading>
						<Img src={imgUrl} alt="Alternative text" />
						<BodyText>This is text, and the text is long enough to span over several lines. This text is closer to the
							image.
						</BodyText>
					</BlockLink>
				</Col>
				<Col xs>
					<a href="https://example.com">
						<SmallHeading>Regular link</SmallHeading>
						<Img src={imgUrl} alt="Alternative text" />
						<BodyText>This is text, and the text is long enough to span over several lines. This text is further from
							the image.
						</BodyText>
					</a>
				</Col>
			</Row>
			<Row>
				<Col xs>
					<SmallHeading>Two BlockLinks</SmallHeading>
					<BodyText>There is whitespace between the blocks.</BodyText>
					<BlockLink href="https://example.com">
						<Img src={imgUrl} alt="Alternative text" />
					</BlockLink>
					<BlockLink href="https://example.com">
						<Img src={imgUrl} alt="Alternative text" />
					</BlockLink>
				</Col>
				<Col xs>
					<SmallHeading>Two regular links</SmallHeading>
					<BodyText>There is whitespace from an implicit line around the images.</BodyText>
					<a href="https://example.com">
						<Img src={imgUrl} alt="Alternative text" />
					</a>
					<a href="https://example.com">
						<Img src={imgUrl} alt="Alternative text" />
					</a>
				</Col>
			</Row>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { BlockLink } from '@aller/shiny';

<BlockLink href="#">
	<img src={imgUrl} alt="Alternative text" />
	<p>This is text</p>
</BlockLink>
			`}
		</Code>
	</section>
);

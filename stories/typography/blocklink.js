import React from 'react';
import styled from '@emotion/styled';

import { DemoContainer } from '../storybook-components/index';
import { Code } from '../../src/atoms/Code';

import {
	Heading, HugeHeading, SmallHeading,
	Row, Col,
	Paragraph,
	BlockLink,
} from '../../src';

const Img = styled.img`
	max-width: 100%;
`;

const imgUrl = 'https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?cs=tinysrgb&h=350';
export default () => (
	<section>
		<HugeHeading>BlockLink</HugeHeading>
		<Paragraph>A block-level link element. The BlockLink is an <code>&lt;a&gt;</code> tag.</Paragraph>
		<Paragraph>By default, links are inline elements. BlockLink is a block-level element.</Paragraph>
		<Paragraph>Note: Please be aware that due to setting line-height to 0 in BlockLink,
			children should always specify line-height of their own.
		</Paragraph>

		<Heading>Demo</Heading>
		<DemoContainer>
			<Row>
				<Col xs>
					<BlockLink href="https://example.com">
						<SmallHeading>BlockLink</SmallHeading>
						<Img src={imgUrl} alt="Alternative text" />
						<Paragraph>This is text, and the text is long enough to span over several lines. This text is closer to the
							image.
						</Paragraph>
					</BlockLink>
				</Col>
				<Col xs>
					<a href="https://example.com">
						<SmallHeading>Regular link</SmallHeading>
						<Img src={imgUrl} alt="Alternative text" />
						<Paragraph>This is text, and the text is long enough to span over several lines. This text is further from
							the image.
						</Paragraph>
					</a>
				</Col>
			</Row>
			<Row>
				<Col xs>
					<SmallHeading>Two BlockLinks</SmallHeading>
					<Paragraph>There is no whitespace between the blocks.</Paragraph>
					<BlockLink href="https://example.com">
						<Img src={imgUrl} alt="Alternative text" />
					</BlockLink>
					<BlockLink href="https://example.com">
						<Img src={imgUrl} alt="Alternative text" />
					</BlockLink>
				</Col>
				<Col xs>
					<SmallHeading>Two regular links</SmallHeading>
					<Paragraph>There is whitespace from an implicit line around the images.</Paragraph>
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
	<Paragraph>This is text</Paragraph>
</BlockLink>
			`}
		</Code>
	</section>
);

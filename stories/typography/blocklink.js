import React from 'react';
import { DemoContainer } from '../storybook-components/index';

import { Code } from '../../src/atoms/Code';

import {
	Heading,
	HugeHeading,
	BlockLink,
	LazyProgressiveImage,
	Source,
	MediumPlugHeading,
} from '../../src';

const imgUrl = 'https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?auto=compress&cs=tinysrgb&h=350';
export default () => (
	<section>
		<HugeHeading>Block Link</HugeHeading>
		<p>
			Wrap a whole block of elements in a link.
		</p>
		<p> Note: Please be aware that due to setting line-height to 0 in BlockLink,
			children should always specify line-height of their own.
		</p>
		<Heading>Demo</Heading>
		<DemoContainer background="white">
			<BlockLink href="#">
				<LazyProgressiveImage src={imgUrl} ratio={0.5} fallbackSrc={imgUrl}>
					<Source srcSet={imgUrl} />
				</LazyProgressiveImage>
				<MediumPlugHeading> Some heading </MediumPlugHeading>
			</BlockLink>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import { BlockLink, LazyProgressiveImage, Source } from '@aller/shiny';

<BlockLink href="#">
	<LazyProgressiveImage src={imgUrl} ratio={0.5} fallbackSrc={imgUrl}>
		<Source srcSet={imgUrl} />
	</LazyProgressiveImage>
	<MediumPlugHeading> Test </MediumPlugHeading>
</BlockLink>
`}
		</Code>

	</section>
);


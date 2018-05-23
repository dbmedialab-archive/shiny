import React from 'react';

import { Code } from '../../src/atoms/Code';
import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { DemoContainer } from '../storybook-components';

import { ArrowBullet } from '../../src/atoms/ArrowBullet';


export default () => (
	<section>
		<HugeHeading>
			Arrow Bullet
		</HugeHeading>

		<p>
			A button-style link with decorated arrow with offset animation on hover
		</p>

		<Heading>
			Demo
		</Heading>
		<DemoContainer background="white">
			<ArrowBullet href="https://oppskrift.no">
				Test content
			</ArrowBullet>
		</DemoContainer>

		<Heading>
			Usage
		</Heading>
		<Code language="jsx">
			{`import { ArrowBullet } from '@aller/shiny';

<ArrowBullet href="https://oppskrift.no">
    Test content
</ArrowBullet>`}
		</Code>
	</section>
);

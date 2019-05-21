import React from 'react';
import { storiesOf } from '@storybook/react';
import { StorybookPaddedGrid } from '../../src/storybook-decorators/PaddedGrid';
import { DemoContainer } from '../storybook-components';
import { Code } from '../../src/atoms/Code';

import {
	Heading, HugeHeading,
	Paragraph,

	// Loaders
	DotLoader,
	GearsLoader,
	// NoonLoader
	LoadingSearchIcon,
} from '../../src';

export default () => {
	storiesOf('Web App Components|Loaders', DotLoader)
		.addDecorator(StorybookPaddedGrid)
	/*
	// @TODO Add story for NoonLoader
      .add('NoonLoader', () => {
        return (
          <section>
            <HugeHeading>NoonLoader</HugeHeading>
            <Paragraph>Should be used when loading content that will add to the height</Paragraph>

            <Heading>Usage</Heading>
            <DemoContainer>
              <NoonLoader classes={'what-you-will'} />
            </DemoContainer>
          </section>
        );
      })
      */
		.add('DotLoader', () => {
			return (
				<section>
					<HugeHeading>DotLoader</HugeHeading>
					<Paragraph>Should be used when loading content that will fill a already defined space</Paragraph>

					<Heading>Demo</Heading>
					<DemoContainer>
						<DotLoader classes={'what-you-will'} />
					</DemoContainer>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import { DotLoader } from '@aller/shiny';

<DotLoader />
						`}
					</Code>
				</section>
			);
		})
		.add('LoadingSearchIcon', () => {
			return (
				<section>
					<HugeHeading>LoadingSearchIcon</HugeHeading>
					<Paragraph>
						This is used by the NewsSearch component when loading articles. Works well with the SearchIcon.
						Color defaults to primary.
					</Paragraph>

					<Heading>Usage</Heading>
					<DemoContainer>
						<LoadingSearchIcon />
					</DemoContainer>
					<DemoContainer>
						<LoadingSearchIcon color="hotpink" />
					</DemoContainer>
				</section>
			);
		})
		.add('Gears Loader', () => (
			<section>
				<HugeHeading>Gears Loader</HugeHeading>
				<Paragraph>
					We can use this loader when waiting the response from server.
				</Paragraph>

				<Heading>Usage</Heading>
				<DemoContainer>
					<GearsLoader />
				</DemoContainer>
				<Code language="jsx">
					{`
						import { GearsLoader } from '@aller/shiny';

						<GearsLoader />
					`}
				</Code>
			</section>
		));
};

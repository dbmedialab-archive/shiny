import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { DemoContainer } from './storybook-components';

import { Heading, HugeHeading } from '../src/atoms/Heading';

// Loaders
import { DotLoader } from '../src/atoms/loaders/DotLoader';
// import { NoonLoader } from '../shared-components/NoonLoader/NoonLoader';
import { LoadingSearchIcon } from '../src/atoms/loaders/LoadingSearchIcon';

export default () => {
	storiesOf('Loaders', DotLoader)
	/*
	// @TODO Add story for NoonLoader
      .add('NoonLoader', () => {
        return (
          <section>
            <HugeHeading>NoonLoader</HugeHeading>
            <p>Should be used when loading content that will add to the height</p>

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
					<p>Should be used when loading content that will fill a already defined space</p>

					<Heading>Usage</Heading>
					<DemoContainer>
						<DotLoader classes={'what-you-will'} />
					</DemoContainer>
				</section>
			);
		})
		.add('LoadingSearchIcon', () => {
			return (
				<section>
					<HugeHeading>LoadingSearchIcon</HugeHeading>
					<p>
						This is used by the NewsSearch component when loading articles. Works well with the SearchIcon.
						Color defaults to primary.
					</p>

					<Heading>Usage</Heading>
					<DemoContainer>
						<LoadingSearchIcon />
					</DemoContainer>
					<DemoContainer>
						<LoadingSearchIcon color="hotpink" />
					</DemoContainer>
				</section>
			);
		});
};

import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { StoryBox, DemoContainer, SiteSelection } from './storybook-components';

import Heading, { HugeHeading } from '../src/atoms/Heading';

// Loaders
import DotLoader from '../src/atoms/loaders/DotLoader';
// import NoonLoader from '../shared-components/NoonLoader/NoonLoader';
import LoadingSearchIcon from '../src/atoms/loaders/LoadingSearchIcon';

export default () => {
	storiesOf('Loaders', DotLoader)
		.addDecorator(stories => (
			<StoryBox>
				{stories()}
			</StoryBox>
		))
	/*
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
				<SiteSelection>
					<section>
						<HugeHeading>DotLoader</HugeHeading>
						<p>Should be used when loading content that will fill a already defined space</p>

						<Heading>Usage</Heading>
						<DemoContainer>
							<DotLoader classes={'what-you-will'} />
						</DemoContainer>
					</section>
				</SiteSelection>
			);
		})
		.add('LoadingSearchIcon', () => {
			return (
				<SiteSelection>
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
				</SiteSelection>
			);
		});
};

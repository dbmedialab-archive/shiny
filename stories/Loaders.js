import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { StoryBox, StoryTitle, StorySubtitle, DemoContainer, SiteSelection } from './storybook-components';

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
            <StoryTitle>NoonLoader</StoryTitle>
            <p>Should be used when loading content that will add to the height</p>

            <StorySubtitle>Usage</StorySubtitle>
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
						<StoryTitle>DotLoader</StoryTitle>
						<p>Should be used when loading content that will fill a already defined space</p>

						<StorySubtitle>Usage</StorySubtitle>
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
						<StoryTitle>LoadingSearchIcon</StoryTitle>
						<p>
							This is used by the NewsSearch component when loading articles. Works well with the SearchIcon.
							Color defaults to primary.
						</p>

						<StorySubtitle>Usage</StorySubtitle>
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

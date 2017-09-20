import React from 'react'
import { storiesOf, action, linkTo } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars

import SiteSelection from './SiteSelection'
import Palette from '../src/Palette'
import {
	StoryBox,
	StoryTitle,
	StorySubtitle,
	DemoContainer
} from './styles/storybook-styles'

// Typography
import Heading, {
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading
} from '../src/atoms/Heading'
// import BlockLink from '../shared-components/Typography/BlockLink';
// import LargeScreenText from '../shared-components/Typography/LargeScreenText';

export default () => {
	storiesOf('Typography', Heading)
		.addDecorator(stories => <StoryBox>{stories()}</StoryBox>)
		.add('Heading', () => {
			return (
				<SiteSelection>
					<section>
						<StoryTitle>Heading</StoryTitle>
						<p>Also called headline, overskrift.</p>
						<p>There are four sizes of headings:</p>
						<ul>
							<li>Small</li>
							<li>Medium</li>
							<li>Large (default)</li>
							<li>XLarge</li>
							<li>Huge</li>
						</ul>
						<p>The font-sizes will increase on large screens.</p>

						<StorySubtitle>Demo</StorySubtitle>
						<DemoContainer>
							<SmallHeading>Dette er en liten overskrift</SmallHeading>
							<MediumHeading>Dette er en middels overskrift</MediumHeading>
							<LargeHeading>
								Dette er en vanlig størrelse overskrift
							</LargeHeading>
							<XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
							<HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
						</DemoContainer>

						<StorySubtitle>Usage</StorySubtitle>
						<pre>
							<code>
								{`
            import {
              SmallHeading,
              MediumHeading,
              LargeHeading,
              XLargeHeading,
              HugeHeading
            } from '/path/to/shared-components/Typography/Heading';

            <SmallHeading>Dette er en liten overskrift</SmallHeading>
            <MediumHeading>Dette er en middels overskrift</MediumHeading>
            <LargeHeading>Dette er en vanlig størrelse overskrift</LargeHeading>
            <XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
            <HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
          `}
							</code>
						</pre>

						<StorySubtitle>Alternative usage</StorySubtitle>
						<pre>
							<code>
								{`
            import Heading from '/path/to/shared-components/Typography/Heading';

            <Heading size="small">Dette er en liten overskrift</Heading>
            <Heading size="medium">Dette er en middels overskrift</Heading>
            <Heading>Dette er en vanlig størrelse overskrift</Heading>
            <Heading size="xlarge">Dette er en ekstra stor overskrift</Heading>
            <Heading size="huge">Dette er en ekstra stor overskrift</Heading>
          `}
							</code>
						</pre>
					</section>
				</SiteSelection>
			)
		})
		.add('Palette', () => {
			return (
				<SiteSelection>
					<Palette />
				</SiteSelection>
			)
		})
}

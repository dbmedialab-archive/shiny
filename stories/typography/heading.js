import React from 'react';

import SiteSelection from '../SiteSelection';

import {
  StoryTitle,
  StorySubtitle,
  DemoContainer,
} from '../styles/storybook-styles';

import LeetTextarea from '../../src/atoms/LeetTextarea';

// Typography
import {
  SmallHeading,
  MediumHeading,
  LargeHeading,
  XLargeHeading,
  HugeHeading,
} from '../../src/atoms/Heading';

export default () => (
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
        <LargeHeading>Dette er en vanlig størrelse overskrift</LargeHeading>
        <XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
        <HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
      </DemoContainer>

      <StorySubtitle>Usage</StorySubtitle>
      <LeetTextarea>{`
import {
  SmallHeading,
  MediumHeading,
  LargeHeading,
  XLargeHeading,
  HugeHeading
} from '/path/to/shared-components/atoms/Heading';

<SmallHeading>Dette er en liten overskrift</SmallHeading>
<MediumHeading>Dette er en middels overskrift</MediumHeading>
<LargeHeading>Dette er en vanlig størrelse overskrift</LargeHeading>
<XLargeHeading>Dette er en ekstra stor overskrift</XLargeHeading>
<HugeHeading>Dette er en ekstra stor overskrift</HugeHeading>
      `}</LeetTextarea>

      <StorySubtitle>Alternative usage</StorySubtitle>
      <LeetTextarea>{`
import Heading from '/path/to/shared-components/atoms/Heading';

<Heading size="small">Dette er en liten overskrift</Heading>
<Heading size="medium">Dette er en middels overskrift</Heading>
<Heading>Dette er en vanlig størrelse overskrift</Heading>
<Heading size="xlarge">Dette er en ekstra stor overskrift</Heading>
<Heading size="huge">Dette er en ekstra stor overskrift</Heading>
    `}</LeetTextarea>
    </section>
  </SiteSelection>
);
